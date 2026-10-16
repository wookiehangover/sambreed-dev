export const COLS = 44;
export const ROWS = 56;
export const WIDTH = 2;
export const HEIGHT = 2.6;

const GRAVITY = -5.2;
const DAMPING = 0.988;
const ITERATIONS = 14;
const MAX_STEP = 0.1;

type Constraint = [a: number, b: number, rest: number, stiffness: number];

export interface Grab {
	indices: Int32Array;
	weights: Float32Array;
	offsets: Float32Array;
	held: number;
}

export class Cloth {
	readonly count = COLS * ROWS;
	readonly pos = new Float32Array(this.count * 3);
	readonly prev = new Float32Array(this.count * 3);
	readonly rest = new Float32Array(this.count * 3);
	/** RGBA texel buffers: position and velocity per particle. */
	readonly posTexels = new Float32Array(this.count * 4);
	readonly velTexels = new Float32Array(this.count * 4);
	private readonly constraints: Constraint[] = [];
	time = 0;

	constructor() {
		const dx = WIDTH / (COLS - 1);
		const dy = HEIGHT / (ROWS - 1);
		for (let r = 0; r < ROWS; r++) {
			for (let c = 0; c < COLS; c++) {
				const i = (r * COLS + c) * 3;
				this.rest[i] = -WIDTH / 2 + c * dx;
				this.rest[i + 1] = HEIGHT / 2 - r * dy;
				this.rest[i + 2] = 0;
			}
		}
		this.pos.set(this.rest);
		this.prev.set(this.rest);

		const link = (c0: number, r0: number, c1: number, r1: number, stiffness: number) => {
			if (c1 < 0 || c1 >= COLS || r1 >= ROWS) return;
			const a = r0 * COLS + c0;
			const b = r1 * COLS + c1;
			const ex = this.rest[b * 3] - this.rest[a * 3];
			const ey = this.rest[b * 3 + 1] - this.rest[a * 3 + 1];
			this.constraints.push([a, b, Math.hypot(ex, ey), stiffness]);
		};
		for (let r = 0; r < ROWS; r++) {
			for (let c = 0; c < COLS; c++) {
				link(c, r, c + 1, r, 1);
				link(c, r, c, r + 1, 1);
				link(c, r, c + 1, r + 1, 0.5);
				link(c, r, c - 1, r + 1, 0.5);
				link(c, r, c + 2, r, 0.08);
				link(c, r, c, r + 2, 0.08);
			}
		}
		this.writeTexels(1 / 60);
	}

	/** Apply an impulse (world units per step) to particles near a fabric uv. */
	push(u: number, v: number, radius: number, fx: number, fy: number, fz: number) {
		const aspect = HEIGHT / WIDTH;
		for (let r = 1; r < ROWS; r++) {
			for (let c = 0; c < COLS; c++) {
				const du = c / (COLS - 1) - u;
				const dv = (r / (ROWS - 1) - v) * aspect;
				const w = Math.exp(-(du * du + dv * dv) / (radius * radius));
				if (w < 0.01) continue;
				const i = (r * COLS + c) * 3;
				this.prev[i] -= fx * w;
				this.prev[i + 1] -= fy * w;
				this.prev[i + 2] -= fz * w;
			}
		}
	}

	grab(u: number, v: number, x: number, y: number, z: number): Grab {
		const aspect = HEIGHT / WIDTH;
		const radius = 0.16;
		const indices: number[] = [];
		const weights: number[] = [];
		const offsets: number[] = [];
		for (let r = 1; r < ROWS; r++) {
			for (let c = 0; c < COLS; c++) {
				const du = c / (COLS - 1) - u;
				const dv = (r / (ROWS - 1) - v) * aspect;
				const w = Math.exp(-(du * du + dv * dv) / (radius * radius));
				if (w < 0.04) continue;
				const p = r * COLS + c;
				indices.push(p);
				weights.push(w);
				offsets.push(this.pos[p * 3] - x, this.pos[p * 3 + 1] - y, this.pos[p * 3 + 2] - z);
			}
		}
		return {
			indices: Int32Array.from(indices),
			weights: Float32Array.from(weights),
			offsets: Float32Array.from(offsets),
			held: 0,
		};
	}

	step(dt: number, wind: number, grab: Grab | null, target: [number, number, number] | null) {
		this.time += dt;
		const t = this.time;
		const g = GRAVITY * dt * dt;
		const { pos, prev } = this;

		for (let r = 1; r < ROWS; r++) {
			const v = r / (ROWS - 1);
			for (let c = 0; c < COLS; c++) {
				const u = c / (COLS - 1);
				const i = (r * COLS + c) * 3;
				const gust =
					wind *
					v *
					(Math.sin(t * 0.9 - v * 6.5 + u * 2.4) * 1.6 +
						Math.sin(t * 1.43 - u * 5.3 + v * 3.1) * 0.8 +
						Math.sin(t * 0.37 + u * 1.3) * 1.1);
				for (let k = 0; k < 3; k++) {
					const p = pos[i + k];
					let vel = (p - prev[i + k]) * DAMPING;
					if (vel > MAX_STEP) vel = MAX_STEP;
					else if (vel < -MAX_STEP) vel = -MAX_STEP;
					prev[i + k] = p;
					pos[i + k] = p + vel + (k === 1 ? g : k === 2 ? gust * dt * dt : gust * 0.45 * dt * dt);
				}
			}
		}

		if (grab && target) {
			grab.held += dt;
			const squeeze = 1 - 0.72 * Math.min(1, grab.held / 0.9);
			const { indices, weights, offsets } = grab;
			for (let n = 0; n < indices.length; n++) {
				const i = indices[n] * 3;
				const w = Math.min(1, weights[n] * 1.6) * 0.55;
				const tight = 1 - (1 - squeeze) * weights[n];
				for (let k = 0; k < 3; k++) {
					const goal = target[k] + offsets[n * 3 + k] * tight;
					pos[i + k] += (goal - pos[i + k]) * w;
				}
			}
		}

		const { constraints } = this;
		for (let it = 0; it < ITERATIONS; it++) {
			for (let n = 0; n < constraints.length; n++) {
				const [a, b, rest, stiffness] = constraints[n];
				const ia = a * 3;
				const ib = b * 3;
				const dx = pos[ib] - pos[ia];
				const dy = pos[ib + 1] - pos[ia + 1];
				const dz = pos[ib + 2] - pos[ia + 2];
				const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
				const diff = ((d - rest) / d) * 0.5 * stiffness;
				const pinA = a < COLS;
				const pinB = b < COLS;
				const sa = pinA ? 0 : pinB ? 2 : 1;
				const sb = pinB ? 0 : pinA ? 2 : 1;
				pos[ia] += dx * diff * sa;
				pos[ia + 1] += dy * diff * sa;
				pos[ia + 2] += dz * diff * sa;
				pos[ib] -= dx * diff * sb;
				pos[ib + 1] -= dy * diff * sb;
				pos[ib + 2] -= dz * diff * sb;
			}
		}

		for (let c = 0; c < COLS; c++) {
			const i = c * 3;
			pos[i] = prev[i] = this.rest[i];
			pos[i + 1] = prev[i + 1] = this.rest[i + 1];
			pos[i + 2] = prev[i + 2] = this.rest[i + 2];
		}
		this.writeTexels(dt);
	}

	private writeTexels(dt: number) {
		const { pos, prev, posTexels, velTexels } = this;
		for (let p = 0; p < this.count; p++) {
			for (let k = 0; k < 3; k++) {
				posTexels[p * 4 + k] = pos[p * 3 + k];
				velTexels[p * 4 + k] = (pos[p * 3 + k] - prev[p * 3 + k]) / dt;
			}
		}
	}
}
