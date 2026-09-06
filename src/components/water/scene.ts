import { fragmentShader, vertexShader } from "./shaders";

class WaterScene extends HTMLElement {
	private dispose?: () => void;

	connectedCallback() {
		const canvas = this.querySelector("canvas");
		if (!canvas) return;

		const gl = canvas.getContext("webgl", {
			alpha: false,
			antialias: false,
			depth: false,
			powerPreference: "low-power",
		});
		if (!gl) {
			canvas.hidden = true;
			return;
		}

		const shaders: WebGLShader[] = [];
		let program: WebGLProgram | null = null;
		let buffer: WebGLBuffer | null = null;
		const release = () => {
			if (buffer) gl.deleteBuffer(buffer);
			if (program) gl.deleteProgram(program);
			shaders.forEach((shader) => gl.deleteShader(shader));
		};

		try {
			program = gl.createProgram();
			if (!program) throw new Error("Could not create the water program.");
			for (const [type, source] of [
				[gl.VERTEX_SHADER, vertexShader],
				[gl.FRAGMENT_SHADER, fragmentShader],
			] as const) {
				const shader = gl.createShader(type);
				if (!shader) throw new Error("Could not create a water shader.");
				shaders.push(shader);
				gl.shaderSource(shader, source);
				gl.compileShader(shader);
				if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
					throw new Error(gl.getShaderInfoLog(shader) ?? "Shader failed.");
				gl.attachShader(program, shader);
			}
			gl.linkProgram(program);
			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Could not link the water program.");
			gl.useProgram(program);
			buffer = gl.createBuffer();
			if (!buffer) throw new Error("Could not create the water surface.");
			gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
			const position = gl.getAttribLocation(program, "position");
			gl.enableVertexAttribArray(position);
			gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
		} catch (error) {
			// eslint-disable-next-line no-console -- Preserve driver diagnostics when a shader fails.
			console.error("Water scene could not start:", error);
			release();
			canvas.hidden = true;
			return;
		}

		const resolution = gl.getUniformLocation(program, "resolution");
		const time = gl.getUniformLocation(program, "time");
		const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
		const events = new AbortController();
		let frame = 0;
		let elapsed = 12;
		let previous = 0;

		const render = () => {
			gl.uniform2f(resolution, canvas.width, canvas.height);
			gl.uniform1f(time, elapsed);
			gl.drawArrays(gl.TRIANGLES, 0, 3);
		};
		const animate = (now: number) => {
			if (previous) elapsed += Math.min((now - previous) / 1000, 0.05);
			previous = now;
			render();
			frame = requestAnimationFrame(animate);
		};
		const syncMotion = () => {
			cancelAnimationFrame(frame);
			previous = 0;
			if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(animate);
		};
		const resize = () => {
			// Keep fine reflections on Retina displays while bounding the GPU cost.
			const scale = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(2_400_000 / (innerWidth * innerHeight)));
			canvas.width = Math.max(1, Math.round(this.clientWidth * scale));
			canvas.height = Math.max(1, Math.round(this.clientHeight * scale));
			gl.viewport(0, 0, canvas.width, canvas.height);
			render();
		};
		const observer = new ResizeObserver(resize);
		observer.observe(this);
		reducedMotion.addEventListener("change", syncMotion, { signal: events.signal });
		document.addEventListener("visibilitychange", syncMotion, { signal: events.signal });
		canvas.addEventListener(
			"webglcontextlost",
			(event) => {
				event.preventDefault();
				cancelAnimationFrame(frame);
				events.abort();
				observer.disconnect();
				canvas.hidden = true;
			},
			{ signal: events.signal },
		);
		resize();
		syncMotion();
		this.dispose = () => {
			cancelAnimationFrame(frame);
			events.abort();
			observer.disconnect();
			release();
		};
	}

	disconnectedCallback() {
		this.dispose?.();
	}
}

if (!customElements.get("water-scene")) customElements.define("water-scene", WaterScene);
