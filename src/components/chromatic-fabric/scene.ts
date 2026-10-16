import * as THREE from "three";
import { Cloth, COLS, HEIGHT, ROWS, WIDTH, type Grab } from "./cloth";
import { fragmentShader, MAX_RIPPLES, vertexShader } from "./shaders";

const MAX_LINES = 240;
const SEGMENTS = 280;
const STEP = 1 / 60;

function buildGeometry() {
	const verts = (SEGMENTS + 1) * 2;
	const line = new Float32Array(MAX_LINES * verts);
	const along = new Float32Array(MAX_LINES * verts);
	const side = new Float32Array(MAX_LINES * verts);
	const index = new Uint32Array(MAX_LINES * SEGMENTS * 6);
	let n = 0;
	for (let l = 0; l < MAX_LINES; l++) {
		for (let s = 0; s <= SEGMENTS; s++) {
			for (const k of [-1, 1]) {
				line[n] = l;
				along[n] = s / SEGMENTS;
				side[n] = k;
				n++;
			}
		}
	}
	let m = 0;
	for (let l = 0; l < MAX_LINES; l++) {
		for (let s = 0; s < SEGMENTS; s++) {
			const a = l * verts + s * 2;
			index.set([a, a + 1, a + 2, a + 1, a + 3, a + 2], m);
			m += 6;
		}
	}
	const geometry = new THREE.InstancedBufferGeometry();
	geometry.setAttribute("line", new THREE.BufferAttribute(line, 1));
	geometry.setAttribute("along", new THREE.BufferAttribute(along, 1));
	geometry.setAttribute("side", new THREE.BufferAttribute(side, 1));
	geometry.setAttribute("channel", new THREE.InstancedBufferAttribute(new Float32Array([-1, 0, 1]), 1));
	geometry.setIndex(new THREE.BufferAttribute(index, 1));
	geometry.instanceCount = 3;
	return geometry;
}

function texture(data: Float32Array) {
	const map = new THREE.DataTexture(data, COLS, ROWS, THREE.RGBAFormat, THREE.FloatType);
	map.magFilter = map.minFilter = THREE.NearestFilter;
	map.needsUpdate = true;
	return map;
}

class ChromaticFabric extends HTMLElement {
	private dispose?: () => void;

	connectedCallback() {
		if (this.dispose) return;
		const canvas = this.querySelector("canvas");
		if (!canvas) return;

		let renderer: THREE.WebGLRenderer;
		try {
			renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: false,
				alpha: false,
				powerPreference: "high-performance",
			});
		} catch {
			canvas.hidden = true;
			return;
		}
		renderer.setClearColor(0x000000, 1);

		const cloth = new Cloth();
		const positions = texture(cloth.posTexels);
		const velocities = texture(cloth.velTexels);
		const ripples = Array.from({ length: MAX_RIPPLES }, () => new THREE.Vector4(0, 0, 0, 0));
		let nextRipple = 0;

		const material = new THREE.RawShaderMaterial({
			glslVersion: THREE.GLSL3,
			vertexShader,
			fragmentShader,
			uniforms: {
				positions: { value: positions },
				velocities: { value: velocities },
				grid: { value: new THREE.Vector2(COLS, ROWS) },
				lines: { value: 180 },
				segments: { value: SEGMENTS },
				resolution: { value: new THREE.Vector2(1, 1) },
				lineWidth: { value: 1.2 },
				chroma: { value: 4 },
				time: { value: 0 },
				aspect: { value: HEIGHT / WIDTH },
				ripples: { value: ripples },
			},
			blending: THREE.CustomBlending,
			blendEquation: THREE.AddEquation,
			blendSrc: THREE.OneFactor,
			blendDst: THREE.OneFactor,
			side: THREE.DoubleSide,
			depthTest: false,
			depthWrite: false,
			transparent: true,
		});
		const geometry = buildGeometry();
		const mesh = new THREE.Mesh(geometry, material);
		mesh.frustumCulled = false;
		const scene = new THREE.Scene();
		scene.add(mesh);
		const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

		const uniforms = material.uniforms;
		const events = new AbortController();
		const { signal } = events;
		let width = 1;
		let height = 1;
		let cellPx = 10;
		let clock = 0;

		const resize = () => {
			width = this.clientWidth || innerWidth;
			height = this.clientHeight || innerHeight;
			const ratio = Math.min(devicePixelRatio || 1, 2);
			renderer.setPixelRatio(ratio);
			renderer.setSize(width, height, false);
			camera.aspect = width / height;
			const fov = THREE.MathUtils.degToRad(camera.fov);
			const fitHeight = (HEIGHT * 1.3) / 2 / Math.tan(fov / 2);
			const fitWidth = (WIDTH * 1.3) / 2 / Math.tan(fov / 2) / camera.aspect;
			const distance = Math.max(fitHeight, fitWidth);
			camera.position.set(Math.sin(0.42) * distance, 0.35, Math.cos(0.42) * distance);
			camera.lookAt(0, -0.05, 0);
			camera.updateProjectionMatrix();
			camera.updateMatrixWorld();
			const fabricPx = (WIDTH / (2 * camera.position.z * Math.tan(fov / 2) * camera.aspect)) * width;
			cellPx = fabricPx / (COLS - 1);
			uniforms.resolution.value.set(width * ratio, height * ratio);
			uniforms.lineWidth.value = 1.15 * ratio;
			uniforms.lines.value = Math.round(THREE.MathUtils.clamp(fabricPx / 3.8, 90, MAX_LINES));
			uniforms.chroma.value = Math.max(4, fabricPx * 0.017) * ratio;
			geometry.setDrawRange(0, uniforms.lines.value * SEGMENTS * 6);
			render();
		};

		const render = () => {
			uniforms.time.value = clock;
			renderer.render(scene, camera);
		};

		const viewProjection = new THREE.Matrix4();
		/** Nearest point on the cloth to a client coordinate, in fabric uv and world space. */
		const pick = (x: number, y: number) => {
			viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
			const e = viewProjection.elements;
			const { pos } = cloth;
			const sigma = cellPx * 0.9;
			let best = Infinity;
			let wSum = 0;
			let u = 0;
			let v = 0;
			let wx = 0;
			let wy = 0;
			let wz = 0;
			for (let p = 0; p < cloth.count; p++) {
				const px = pos[p * 3];
				const py = pos[p * 3 + 1];
				const pz = pos[p * 3 + 2];
				const w = e[3] * px + e[7] * py + e[11] * pz + e[15];
				const sx = ((e[0] * px + e[4] * py + e[8] * pz + e[12]) / w + 1) * 0.5 * width;
				const sy = (1 - (e[1] * px + e[5] * py + e[9] * pz + e[13]) / w) * 0.5 * height;
				const d2 = (sx - x) ** 2 + (sy - y) ** 2;
				if (d2 < best) best = d2;
				const k = Math.exp(-d2 / (sigma * sigma));
				if (k < 1e-4) continue;
				wSum += k;
				u += k * ((p % COLS) / (COLS - 1));
				v += k * (Math.floor(p / COLS) / (ROWS - 1));
				wx += k * px;
				wy += k * py;
				wz += k * pz;
			}
			if (Math.sqrt(best) > cellPx * 1.6 || wSum === 0) return null;
			return { u: u / wSum, v: v / wSum, x: wx / wSum, y: wy / wSum, z: wz / wSum };
		};

		const ray = new THREE.Raycaster();
		const ndc = new THREE.Vector2();
		const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
		const hit = new THREE.Vector3();
		const toWorld = (x: number, y: number, z: number): [number, number, number] | null => {
			ndc.set((x / width) * 2 - 1, -(y / height) * 2 + 1);
			ray.setFromCamera(ndc, camera);
			plane.constant = -z;
			return ray.ray.intersectPlane(plane, hit) ? [hit.x, hit.y, hit.z] : null;
		};

		const addRipple = (u: number, v: number, strength: number) => {
			ripples[nextRipple].set(u, v, clock, strength);
			nextRipple = (nextRipple + 1) % MAX_RIPPLES;
		};

		// The cloth holds still until it is first touched.
		let awake = false;
		let grab: Grab | null = null;
		let grabDepth = 0;
		let target: [number, number, number] | null = null;
		let pointerId = -1;
		let last: { x: number; y: number; t: number } | null = null;
		let travelled = 0;

		canvas.addEventListener(
			"pointerdown",
			(event) => {
				const point = pick(event.clientX, event.clientY);
				if (!point) return;
				awake = true;
				grab = cloth.grab(point.u, point.v, point.x, point.y, point.z);
				grabDepth = point.z;
				target = [point.x, point.y, point.z];
				pointerId = event.pointerId;
				canvas.setPointerCapture(event.pointerId);
				canvas.dataset.grabbing = "";
				addRipple(point.u, point.v, 1.4);
			},
			{ signal },
		);

		canvas.addEventListener(
			"pointermove",
			(event) => {
				const now = performance.now();
				const dt = last ? Math.max(1, now - last.t) : 16;
				const dx = last ? event.clientX - last.x : 0;
				const dy = last ? event.clientY - last.y : 0;
				last = { x: event.clientX, y: event.clientY, t: now };

				if (grab && event.pointerId === pointerId) {
					target = toWorld(event.clientX, event.clientY, grabDepth) ?? target;
					return;
				}
				const point = pick(event.clientX, event.clientY);
				if (!point) {
					delete canvas.dataset.hover;
					travelled = 0;
					return;
				}
				canvas.dataset.hover = "";
				const speed = Math.min(Math.hypot(dx, dy) / dt, 3);
				travelled += Math.hypot(dx, dy);
				if (travelled > cellPx * 0.9) {
					travelled = 0;
					addRipple(point.u, point.v, 0.35 + speed * 0.3);
				}
				const k = 0.0016 * speed;
				const scale = WIDTH / (cellPx * (COLS - 1));
				if (speed > 0) awake = true;
				cloth.push(point.u, point.v, 0.07, (dx / dt) * scale * 0.012, (-dy / dt) * scale * 0.012, -k);
			},
			{ signal },
		);

		const release = (event: PointerEvent) => {
			if (event.pointerId !== pointerId) return;
			grab = null;
			target = null;
			pointerId = -1;
			delete canvas.dataset.grabbing;
		};
		canvas.addEventListener("pointerup", release, { signal });
		canvas.addEventListener("pointercancel", release, { signal });
		canvas.addEventListener(
			"pointerleave",
			() => {
				last = null;
				delete canvas.dataset.hover;
			},
			{ signal },
		);

		let frame = 0;
		let previous = 0;
		let accumulator = 0;
		const animate = (now: number) => {
			const delta = previous ? Math.min((now - previous) / 1000, 0.1) : STEP;
			previous = now;
			accumulator += delta;
			let steps = 0;
			while (accumulator >= STEP && steps < 4) {
				if (awake) cloth.step(STEP, grab, target);
				clock += STEP;
				accumulator -= STEP;
				steps++;
			}
			if (steps === 4) accumulator = 0;
			if (steps && awake) {
				positions.needsUpdate = true;
				velocities.needsUpdate = true;
			}
			render();
			frame = requestAnimationFrame(animate);
		};
		const syncVisibility = () => {
			cancelAnimationFrame(frame);
			previous = 0;
			if (!document.hidden) frame = requestAnimationFrame(animate);
		};

		const observer = new ResizeObserver(resize);
		observer.observe(this);
		document.addEventListener("visibilitychange", syncVisibility, { signal });
		canvas.addEventListener(
			"webglcontextlost",
			(event) => {
				event.preventDefault();
				cancelAnimationFrame(frame);
				canvas.hidden = true;
			},
			{ signal },
		);

		// Let the cloth settle into its drape before the first frame.
		cloth.settle(100);
		resize();
		syncVisibility();

		this.dispose = () => {
			cancelAnimationFrame(frame);
			events.abort();
			observer.disconnect();
			geometry.dispose();
			material.dispose();
			positions.dispose();
			velocities.dispose();
			renderer.dispose();
		};
	}

	disconnectedCallback() {
		this.dispose?.();
		this.dispose = undefined;
	}
}

if (!customElements.get("chromatic-fabric")) customElements.define("chromatic-fabric", ChromaticFabric);
