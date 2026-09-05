import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { destinations, type DestinationId } from "./destinations";
import { buildRoom, type RoomObjectId } from "./scene";
import { isRoomSkin, skinStorageKey, type RoomSkin } from "./skins";
import { createRoomSounds } from "./sounds";

class BobRoom extends HTMLElement {
	private cleanup?: () => void;

	connectedCallback() {
		if (this.cleanup) return;
		const events = new AbortController();
		const { signal } = events;
		const cue = createRoomSounds(this, signal);
		const stage = this.querySelector<HTMLElement>(".room-stage")!;
		const viewport = this.querySelector<HTMLElement>(".room-viewport")!;
		const rover = this.querySelector<HTMLElement>(".rover")!;
		const mount = this.querySelector<HTMLElement>(".canvas-mount")!;
		const loading = this.querySelector<HTMLElement>(".loading-room")!;
		const labels = this.querySelector<HTMLElement>(".object-labels")!;
		const labelButton = this.querySelector<HTMLButtonElement>("[data-labels]")!;
		const resetButton = this.querySelector<HTMLButtonElement>("[data-reset]")!;
		const motionButton = this.querySelector<HTMLButtonElement>("[data-motion]")!;
		const skinSelect = this.querySelector<HTMLSelectElement>("[data-room-skin]")!;
		const helpButton = this.querySelector<HTMLButtonElement>("[data-help]")!;
		const help = this.querySelector<HTMLElement>(".room-help")!;
		const guideTitle = this.querySelector<HTMLElement>("[data-guide-title]")!;
		const guideText = this.querySelector<HTMLElement>("[data-guide-text]")!;
		const defaultTitle = guideTitle.textContent!;
		const defaultText =
			viewport.scrollWidth > viewport.clientWidth
				? "Swipe sideways to look around. Choose Other options to see everywhere you can go."
				: guideText.textContent!;
		guideText.textContent = defaultText;
		const labelElements = new Map<DestinationId, HTMLAnchorElement>();
		this.querySelectorAll<HTMLAnchorElement>("[data-object]").forEach((link) => {
			labelElements.set(link.dataset.object as DestinationId, link);
		});
		let petTimeout: ReturnType<typeof setTimeout> | undefined;
		let petCount = 0;
		let currentSkin: RoomSkin = "classic";
		function petDog() {
			cue(currentSkin === "cyberpunk" ? "pulse" : currentSkin === "greek" ? "chime" : "sparkle");
			if (currentSkin === "greek") {
				guideTitle.textContent = "Let us examine that together.";
				guideText.textContent = [
					"What makes an idea worth keeping? Perhaps the writing will give us a place to begin.",
					"Where does a good question lead? The wiki holds a few paths to explore.",
					"What would you like to understand today? Every inquiry needs a first question.",
				][petCount++ % 3];
				return;
			}
			rover.setAttribute("data-petted", "");
			clearTimeout(petTimeout);
			petTimeout = setTimeout(() => rover.removeAttribute("data-petted"), 1800);
			guideTitle.textContent =
				currentSkin === "cyberpunk"
					? "Affection received. Tail servos engaged."
					: ["Oh, that’s the spot!", "An excellent use of the internet.", "I think we’re going to be friends."][
							petCount++ % 3
						];
			guideText.textContent =
				currentSkin === "cyberpunk"
					? "Rover’s happiness circuits are running at full capacity."
					: "Rover is very pleased with this visit. Feel free to stay a while.";
		}
		function showHelp(open: boolean) {
			cue(open ? (currentSkin === "cyberpunk" ? "scan" : "bloom") : "droplet");
			help.hidden = !open;
			helpButton.setAttribute("aria-expanded", String(open));
			if (open) help.querySelector<HTMLAnchorElement>("a")!.focus();
			else helpButton.focus();
		}
		helpButton.addEventListener("click", () => showHelp(help.hidden), { signal });
		this.querySelector("[data-close-help]")!.addEventListener("click", () => showHelp(false), { signal });
		this.addEventListener(
			"keydown",
			(event) => {
				if (event.key === "Escape" && !help.hidden) showHelp(false);
			},
			{ signal },
		);
		this.querySelector("[data-pet]")!.addEventListener("click", petDog, { signal });

		// Keep the HTML navigation and guide usable if WebGL is disabled or unavailable.
		let renderer: THREE.WebGLRenderer;
		try {
			renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
		} catch {
			this.querySelector("[data-loading-text]")!.textContent =
				"The room couldn’t open here. You can still visit these parts of the site:";
			this.cleanup = () => {
				events.abort();
				clearTimeout(petTimeout);
			};
			return;
		}
		renderer.setPixelRatio(1);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;
		renderer.shadowMap.autoUpdate = false;
		renderer.shadowMap.needsUpdate = true;
		renderer.toneMapping = THREE.NoToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.domElement.setAttribute("aria-hidden", "true");
		mount.append(renderer.domElement);
		const scene = new THREE.Scene();
		scene.background = new THREE.Color("#ffca4b");
		const ambient = new THREE.HemisphereLight("#ffffff", "#ab802a", 2.4);
		scene.add(ambient);
		const sun = new THREE.DirectionalLight("#fff4dc", 1.5);
		sun.position.set(-3, 8, 6);
		sun.castShadow = true;
		sun.shadow.mapSize.set(2048, 2048);
		Object.assign(sun.shadow.camera, { left: -8, right: 8, top: 8, bottom: -8, near: 0.5, far: 30 });
		sun.shadow.normalBias = 0.025;
		sun.shadow.bias = -0.0002;
		scene.add(sun);
		const room = buildRoom(scene);
		const camera = new THREE.OrthographicCamera(-7, 7, 3.5, -3.5, 0.1, 80);
		camera.position.set(0, 10, 20);
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 3.25, 0);
		controls.enablePan = false;
		controls.enableZoom = false;
		controls.minAzimuthAngle = -0.12;
		controls.maxAzimuthAngle = 0.12;
		controls.minPolarAngle = 1.19;
		controls.maxPolarAngle = 1.36;
		controls.rotateSpeed = 0.4;
		controls.update();
		controls.saveState();
		// Narrow screens can swipe across the full-width room without shrinking its objects.
		renderer.domElement.style.touchAction = "pan-x";
		let width = 1,
			height = 1;
		const projected = new THREE.Vector3();
		function render() {
			renderer.render(scene, camera);
			for (const [id, anchor] of room.anchors) {
				projected.copy(anchor).project(camera);
				const label = labelElements.get(id)!;
				const halfLabel = label.offsetWidth / 2 + 7;
				label.style.left = `${THREE.MathUtils.clamp((projected.x * 0.5 + 0.5) * width, halfLabel, width - halfLabel)}px`;
				label.style.top = `${THREE.MathUtils.clamp((-projected.y * 0.5 + 0.5) * height, 20, height - 25)}px`;
			}
		}
		function resize() {
			width = stage.clientWidth;
			height = stage.clientHeight;
			const aspect = width / height;
			const viewHeight = 8.5;
			camera.left = (-viewHeight * aspect) / 2;
			camera.right = (viewHeight * aspect) / 2;
			camera.top = viewHeight / 2;
			camera.bottom = -viewHeight / 2;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height, false);
			viewport.scrollLeft = (width - viewport.clientWidth) / 2;
			render();
		}
		const observer = new ResizeObserver(resize);
		observer.observe(stage);
		controls.addEventListener("change", render);
		labelButton.disabled = false;
		resetButton.disabled = false;
		labels.hidden = false;
		let showNames = false;
		let holdingF1 = false;
		function updateLabels() {
			stage.classList.toggle("labels-off", !showNames && !holdingF1);
			labelButton.setAttribute("aria-pressed", String(showNames));
		}
		updateLabels();
		labelButton.addEventListener(
			"click",
			() => {
				showNames = !showNames;
				cue("toggle");
				updateLabels();
			},
			{ signal },
		);
		window.addEventListener(
			"keydown",
			(event) => {
				if (event.key === "F1") {
					event.preventDefault();
					holdingF1 = true;
					updateLabels();
				}
			},
			{ signal },
		);
		window.addEventListener(
			"keyup",
			(event) => {
				if (event.key === "F1") {
					event.preventDefault();
					holdingF1 = false;
					updateLabels();
				}
			},
			{ signal },
		);
		window.addEventListener(
			"blur",
			() => {
				holdingF1 = false;
				updateLabels();
			},
			{ signal },
		);
		resetButton.addEventListener(
			"click",
			() => {
				controls.reset();
				cue("release");
				render();
			},
			{ signal },
		);

		let active: RoomObjectId | undefined;
		function highlight(id?: RoomObjectId) {
			if (id === active) return;
			active = id;
			for (const [key, label] of labelElements) label.toggleAttribute("data-active", key === id);
			const destination = destinations.find((item) => item.id === id);
			guideTitle.textContent = destination
				? `${destination.label} · ${destination.object}`
				: id === "dog"
					? "That’s me! A very good dog, if I do say so myself."
					: defaultTitle;
			guideText.textContent =
				destination?.description ?? (id === "dog" ? "Click for a little tail-wagging appreciation." : defaultText);
			renderer.domElement.style.cursor = id ? "pointer" : "grab";
		}
		this.querySelectorAll<HTMLAnchorElement>("[data-object], [data-shortcut]").forEach((link) => {
			const id = (link.dataset.object ?? link.dataset.shortcut) as DestinationId;
			link.addEventListener("pointerenter", () => highlight(id), { signal });
			link.addEventListener("pointerleave", () => highlight(), { signal });
			link.addEventListener("focus", () => highlight(id), { signal });
			link.addEventListener("blur", () => highlight(), { signal });
		});
		const raycaster = new THREE.Raycaster();
		const pointer = new THREE.Vector2();
		function hit(event: PointerEvent): RoomObjectId | undefined {
			const rect = renderer.domElement.getBoundingClientRect();
			pointer.set(
				((event.clientX - rect.left) / rect.width) * 2 - 1,
				(-(event.clientY - rect.top) / rect.height) * 2 + 1,
			);
			raycaster.setFromCamera(pointer, camera);
			// Test the whole scene, so solid furniture naturally occludes objects behind it.
			const intersection = raycaster.intersectObjects(scene.children, true).find(({ object }) => {
				// Hidden architecture from other skins must not block the current room's links.
				let ancestor: THREE.Object3D | null = object;
				while (ancestor) {
					if (!ancestor.visible) return false;
					ancestor = ancestor.parent;
				}
				return true;
			});
			let object: THREE.Object3D | null = intersection?.object ?? null;
			while (object) {
				if (object.userData.destination) return object.userData.destination as RoomObjectId;
				object = object.parent;
			}
		}
		let down: { x: number; y: number; id?: RoomObjectId; pointerId: number } | undefined;
		let dragged = false;
		renderer.domElement.addEventListener(
			"pointerdown",
			(event) => {
				if (!event.isPrimary || event.button !== 0) {
					down = undefined;
					return;
				}
				down = { x: event.clientX, y: event.clientY, id: hit(event), pointerId: event.pointerId };
				dragged = false;
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"pointermove",
			(event) => {
				if (down) {
					if (Math.hypot(event.clientX - down.x, event.clientY - down.y) > 6) dragged = true;
					return;
				}
				if (event.pointerType !== "touch") highlight(hit(event));
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"pointerup",
			(event) => {
				if (!down || event.pointerId !== down.pointerId) return;
				const id = hit(event);
				const clicked = !dragged && id && id === down.id;
				down = undefined;
				if (!clicked) return;
				if (id === "dog") {
					petDog();
					return;
				}
				const link = labelElements.get(id);
				if (link) {
					// Preserve modifier-click behavior even when clicking a mesh instead of its label.
					link.dispatchEvent(
						new MouseEvent("click", {
							bubbles: true,
							cancelable: true,
							view: window,
							ctrlKey: event.ctrlKey,
							metaKey: event.metaKey,
							shiftKey: event.shiftKey,
							altKey: event.altKey,
						}),
					);
				}
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"pointercancel",
			() => {
				down = undefined;
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"pointerleave",
			() => {
				if (!down) highlight();
			},
			{ signal },
		);

		const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
		let motionEnabled = !reducedMotion.matches;
		motionButton.disabled = false;
		motionButton.setAttribute("aria-pressed", String(motionEnabled));
		let animationFrame = 0;
		let lastFrame = 0;
		let inView = true;
		let contextLost = false;
		function refreshTime() {
			if (document.hidden || contextLost) return;
			const now = new Date();
			if (!room.updateTime(now)) return;
			stage.setAttribute(
				"aria-label",
				`Interactive room. The clocks and outside follow your local time, ${now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}. Drag to look around.`,
			);
			render();
		}
		function animate(time: number) {
			animationFrame = requestAnimationFrame(animate);
			if (time - lastFrame < 1000 / 30) return;
			lastFrame = time;
			room.animate(time / 1000);
			renderer.render(scene, camera);
		}
		function updateAnimation() {
			rover.dataset.animation = String(motionEnabled);
			cancelAnimationFrame(animationFrame);
			if (!document.hidden && inView && !contextLost && motionEnabled) animationFrame = requestAnimationFrame(animate);
		}
		const visibilityObserver = new IntersectionObserver(([entry]) => {
			inView = entry.isIntersecting;
			updateAnimation();
		});
		visibilityObserver.observe(stage);
		document.addEventListener(
			"visibilitychange",
			() => {
				refreshTime();
				updateAnimation();
			},
			{ signal },
		);
		motionButton.addEventListener(
			"click",
			() => {
				motionEnabled = !motionEnabled;
				cue("toggle");
				motionButton.setAttribute("aria-pressed", String(motionEnabled));
				updateAnimation();
			},
			{ signal },
		);
		reducedMotion.addEventListener(
			"change",
			() => {
				motionEnabled = !reducedMotion.matches;
				motionButton.setAttribute("aria-pressed", String(motionEnabled));
				updateAnimation();
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"webglcontextlost",
			(event) => {
				event.preventDefault();
				contextLost = true;
				updateAnimation();
				loading.hidden = false;
				labels.hidden = true;
				labelButton.disabled = true;
				resetButton.disabled = true;
				this.querySelector("[data-loading-text]")!.textContent =
					"The room is taking a breather. You can still use these links.";
			},
			{ signal },
		);
		renderer.domElement.addEventListener(
			"webglcontextrestored",
			() => {
				contextLost = false;
				refreshTime();
				loading.hidden = true;
				labels.hidden = false;
				labelButton.disabled = false;
				resetButton.disabled = false;
				renderer.shadowMap.needsUpdate = true;
				resize();
				updateAnimation();
			},
			{ signal },
		);
		const applySkin = (skin: RoomSkin) => {
			const cyberpunk = skin === "cyberpunk";
			const greek = skin === "greek";
			currentSkin = skin;
			petCount = 0;
			clearTimeout(petTimeout);
			rover.removeAttribute("data-petted");
			rover.setAttribute(
				"aria-label",
				greek ? "Socrates, your guide" : cyberpunk ? "Robot Rover, your guide" : "Rover, your guide",
			);
			this.querySelector("[data-pet]")!.setAttribute(
				"aria-label",
				greek ? "Talk to Socrates" : cyberpunk ? "Pet Robot Rover" : "Pet Rover",
			);
			guideTitle.textContent = defaultTitle;
			guideText.textContent = defaultText;
			this.dataset.skin = skin;
			skinSelect.value = skin;
			room.setSkin(skin);
			(scene.background as THREE.Color).set(cyberpunk ? "#171c35" : greek ? "#e0d8c2" : "#ffca4b");
			ambient.color.set(cyberpunk ? "#b5d3ff" : "#ffffff");
			ambient.groundColor.set(cyberpunk ? "#56265c" : greek ? "#8e9795" : "#ab802a");
			ambient.intensity = cyberpunk ? 1.55 : greek ? 2 : 2.4;
			sun.color.set(cyberpunk ? "#b4caff" : greek ? "#fff9ea" : "#fff4dc");
			sun.intensity = cyberpunk ? 0.9 : 1.5;
			renderer.shadowMap.needsUpdate = true;
			refreshTime();
		};
		let initialSkin: RoomSkin = "classic";
		try {
			const saved = localStorage.getItem(skinStorageKey);
			if (isRoomSkin(saved)) initialSkin = saved;
		} catch {
			// The selector still works when browser storage is unavailable.
		}
		skinSelect.disabled = false;
		skinSelect.addEventListener(
			"change",
			() => {
				const skin = skinSelect.value;
				if (!isRoomSkin(skin)) return;
				applySkin(skin);
				cue("arrival");
				try {
					localStorage.setItem(skinStorageKey, skin);
				} catch {
					// Keep the chosen skin for this visit even if it cannot be saved.
				}
			},
			{ signal },
		);
		resize();
		applySkin(initialSkin);
		// Clock updates also run when ambient animation is paused or reduced motion is enabled.
		// Check each second so minute changes appear promptly; the scene only updates once per minute.
		const timeInterval = setInterval(refreshTime, 1_000);
		loading.hidden = true;
		updateAnimation();
		this.cleanup = () => {
			events.abort();
			clearTimeout(petTimeout);
			clearInterval(timeInterval);
			cancelAnimationFrame(animationFrame);
			observer.disconnect();
			visibilityObserver.disconnect();
			controls.dispose();
			room.dispose();
			renderer.dispose();
			renderer.domElement.remove();
		};
	}

	disconnectedCallback() {
		this.cleanup?.();
		this.cleanup = undefined;
	}
}

if (!customElements.get("bob-room")) customElements.define("bob-room", BobRoom);
