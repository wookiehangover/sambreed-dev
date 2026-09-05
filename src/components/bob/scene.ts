import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import type { DestinationId } from "./destinations";
import { drawCityOutdoors, drawGreekOutdoors, drawOutdoors } from "./outdoors";
import { cyberpunkPalette, greekPalette, type RoomSkin } from "./skins";

type Surface = THREE.Material | string;
type Position = [number, number, number];
export type RoomObjectId = DestinationId | "dog";

/** Everything in the room is geometry or a locally drawn texture; no remote assets. */
export function buildRoom(scene: THREE.Scene) {
	const materials = new Map<string, THREE.MeshStandardMaterial>();
	const textures: THREE.Texture[] = [];
	const targets: THREE.Group[] = [];
	const anchors = new Map<DestinationId, THREE.Vector3>();
	function material(surface: Surface) {
		if (typeof surface !== "string") return surface;
		if (!materials.has(surface))
			materials.set(surface, new THREE.MeshStandardMaterial({ color: surface, roughness: 0.85 }));
		return materials.get(surface)!;
	}
	function mesh(parent: THREE.Object3D, geometry: THREE.BufferGeometry, surface: Surface, position: Position) {
		const object = new THREE.Mesh(geometry, material(surface));
		object.position.set(...position);
		object.castShadow = true;
		object.receiveShadow = true;
		parent.add(object);
		return object;
	}
	function box(parent: THREE.Object3D, size: Position, position: Position, surface: Surface, radius = 0) {
		return mesh(
			parent,
			radius ? new RoundedBoxGeometry(...size, 2, radius) : new THREE.BoxGeometry(...size),
			surface,
			position,
		);
	}
	function sphere(parent: THREE.Object3D, size: Position, position: Position, surface: Surface) {
		const object = mesh(parent, new THREE.SphereGeometry(1, 20, 14), surface, position);
		object.scale.set(...size);
		return object;
	}
	function cylinder(
		parent: THREE.Object3D,
		top: number,
		bottom: number,
		height: number,
		position: Position,
		surface: Surface,
	) {
		return mesh(parent, new THREE.CylinderGeometry(top, bottom, height, 32), surface, position);
	}
	function group(position: Position, id?: RoomObjectId) {
		const object = new THREE.Group();
		object.position.set(...position);
		scene.add(object);
		if (id) {
			object.userData.destination = id;
			targets.push(object);
		}
		return object;
	}
	function texture(width: number, height: number, draw: (ctx: CanvasRenderingContext2D) => void) {
		const canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		const ctx = canvas.getContext("2d")!;
		draw(ctx);
		const result = new THREE.CanvasTexture(canvas);
		result.colorSpace = THREE.SRGBColorSpace;
		result.anisotropy = 4;
		textures.push(result);
		return result;
	}
	function picture(parent: THREE.Object3D, width: number, height: number, position: Position, map: THREE.Texture) {
		const plane = mesh(parent, new THREE.PlaneGeometry(width, height), new THREE.MeshBasicMaterial({ map }), position);
		plane.castShadow = false;
		return plane;
	}

	const gold = "#ffbd3f",
		trim = "#ffdc75",
		wood = "#b96526",
		blue = "#568eac";
	box(scene, [40, 10, 0.2], [0, 4.5, -3.9], "#ffca4b");
	box(scene, [40, 0.2, 25], [0, -0.16, 4], "#b58a22");
	// Warm, inset wall panels and the red doors at the edges of the room.
	for (const x of [-6.5, 6.5]) {
		box(scene, [1.1, 7.6, 0.15], [x, 3.4, -3.72], "#a62220");
		for (const dx of [-0.5, 0.5]) box(scene, [0.09, 7.6, 0.16], [x + dx, 3.4, -3.58], trim);
		for (const y of [0.18, 6.9]) box(scene, [1, 0.12, 0.18], [x, y, -3.55], gold);
		sphere(scene, [0.06, 0.09, 0.07], [x + (x < 0 ? 0.32 : -0.32), 2.45, -3.4], "#fff1a8");
	}
	for (const x of [-2.13, 2.13]) {
		box(scene, [1.64, 6.55, 0.21], [x, 3.26, -3.61], "#c98330");
		for (const dx of [-0.81, 0.81]) box(scene, [0.12, 6.65, 0.3], [x + dx, 3.3, -3.39], gold);
		box(scene, [1.62, 1.31, 0.88], [x, 0.66, -3.02], "#ffd75a");
		for (const dx of [-0.4, 0.4]) {
			box(scene, [0.68, 1.14, 0.04], [x + dx, 0.67, -2.558], "#f9c845");
			box(scene, [0.035, 0.22, 0.035], [x + dx + (dx < 0 ? 0.19 : -0.19), 0.86, -2.52], "#fff4bd");
		}
		for (const y of [1.36, 2.62, 3.87, 5.12, 6.47]) box(scene, [1.78, 0.09, 0.99], [x, y, -2.99], trim);
	}
	const outdoorViews: { map: THREE.CanvasTexture; ctx: CanvasRenderingContext2D; right: boolean }[] = [];
	let outdoorMinute = "";
	let skin: RoomSkin = "classic";
	const windowBars: THREE.Object3D[] = [];
	// Repaint both windows together from the visitor’s local clock.
	function windowAt(x: number, right: boolean) {
		const g = group([x, 3.41, -3.61]);
		box(g, [2.55, 6.68, 0.26], [0, 0, 0], wood);
		box(g, [2.36, 6.48, 0.08], [0, 0, 0.17], gold);
		const view = texture(384, 768, (ctx) => drawOutdoors(ctx, right, new Date()));
		outdoorViews.push({ map: view, ctx: (view.image as HTMLCanvasElement).getContext("2d")!, right });
		picture(g, 2.08, 6.08, [0, 0, 0.218], view);
		for (const dx of [-1.12, 1.12]) box(g, [0.12, 6.43, 0.18], [dx, 0, 0.33], trim);
		for (const y of [-3.18, 1.84, 3.18]) {
			const bar = box(g, [2.36, 0.14, 0.26], [0, y, 0.33], trim);
			if (y === 1.84) windowBars.push(bar);
		}
		windowBars.push(box(g, [0.085, 4.88, 0.13], [0, -0.62, 0.35], "#d68d29"));
		for (const y of [-1.38, 0.16]) windowBars.push(box(g, [2.2, 0.085, 0.13], [0, y, 0.35], "#e19d32"));
		const transom = group([x, 5.95, -3.15]);
		windowBars.push(transom);
		transom.rotation.x = -0.24;
		for (const dx of [-1, 0, 1]) box(transom, [0.08, 0.92, 0.08], [dx, 0, 0], "#f0b951");
		for (const y of [-0.46, 0.46]) box(transom, [2.08, 0.08, 0.09], [0, y, 0], "#fff0ac");
		box(g, [2.67, 0.13, 0.56], [0, -3.31, 0.27], trim);
	}
	windowAt(-4.42, false);
	windowAt(4.42, true);

	// Fireplace and calendar in the central niche.
	const hearth = group([0, 0, -3.01]);
	box(hearth, [2.78, 2.14, 0.77], [0, 1.05, 0], "#a0a79a");
	box(hearth, [2.49, 1.99, 0.05], [0, 1.1, 0.41], "#c8cab1");
	box(hearth, [1.99, 1.7, 0.04], [0, 0.96, 0.46], "#1c2020", 0.07);
	for (const x of [-1.01, 1.01]) box(hearth, [0.065, 1.8, 0.075], [x, 1.02, 0.5], "#f6d773");
	for (const y of [0.14, 1.89]) box(hearth, [2.09, 0.07, 0.08], [0, y, 0.5], "#f6d773");
	box(hearth, [3.03, 0.2, 1.11], [0, 2.23, 0.06], trim);
	box(hearth, [3.05, 0.17, 1.23], [0, 0.015, 0.1], "#ded79d");
	const fire = new THREE.Group();
	hearth.add(fire);
	for (const x of [-0.49, 0, 0.46]) {
		const log = cylinder(fire, 0.09, 0.11, 1.07, [x, 0.28, 0.53], "#876025");
		log.rotation.z = 1.57;
		log.rotation.y = x;
	}
	const flames: THREE.Mesh[] = [];
	for (let i = 0; i < 8; i++) {
		const flame = mesh(
			fire,
			new THREE.ConeGeometry(0.19, 0.75 + (i % 3) * 0.2, 5),
			new THREE.MeshBasicMaterial({ color: i % 2 ? "#fff472" : "#fbc632" }),
			[-0.7 + i * 0.2, 0.91, 0.55],
		);
		flame.rotation.z = ((i % 3) - 1) * 0.3;
		flames.push(flame);
	}
	const firelight = new THREE.PointLight("#ffd53b", 2, 4, 2);
	firelight.position.set(0, 0.7, -1.9);
	scene.add(firelight);
	for (const x of [-0.76, 0.76]) box(fire, [0.03, 0.65, 0.06], [x, 0.49, 0.8], "#181b19");
	box(fire, [1.57, 0.045, 0.045], [0, 0.21, 0.8], "#1b1b1b");
	const calendar = group([0, 3.73, -3.54]);
	box(calendar, [2.57, 2.55, 0.25], [0, 0, 0], wood);
	box(calendar, [2.29, 2.26, 0.09], [0, 0, 0.17], trim);
	const calMap = texture(320, 360, (ctx) => {
		ctx.fillStyle = "#f4f1cd";
		ctx.fillRect(0, 0, 320, 360);
		ctx.fillStyle = "#539333";
		ctx.fillRect(5, 5, 310, 17);
		ctx.fillStyle = "#b74828";
		ctx.font = "51px Georgia";
		ctx.textAlign = "center";
		const today = new Date();
		ctx.fillText(today.toLocaleDateString("en-US", { month: "short", day: "numeric" }), 160, 102);
		ctx.font = "28px Georgia";
		ctx.fillText(String(today.getFullYear()), 160, 147);
		const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
		const days = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
		for (let row = 0; row < 6; row++)
			for (let col = 0; col < 7; col++) {
				const day = row * 7 + col - firstDay + 1;
				ctx.fillStyle = (row + col) % 2 ? "#f4efd0" : "#719655";
				ctx.fillRect(19 + col * 41, 176 + row * 28, 39, 26);
				if (day < 1 || day > days) continue;
				ctx.fillStyle = day === today.getDate() ? "#ae2525" : "#2a3520";
				ctx.font = "15px Georgia";
				ctx.fillText(String(day), 39 + col * 41, 195 + row * 28);
			}
	});
	picture(calendar, 1.99, 2.01, [0, 0, 0.222], calMap);
	// The black mantel clock above the calendar.
	const clock = group([0, 5.91, -3.08]);
	box(clock, [1.5, 0.12, 0.73], [0, -0.51, 0], "#232528");
	const clockBody = mesh(clock, new THREE.CylinderGeometry(0.48, 0.69, 1.25, 4), "#1c2226", [0, 0.12, 0]);
	clockBody.rotation.y = Math.PI / 4;
	clockBody.scale.z = 0.55;
	box(clock, [0.73, 0.73, 0.05], [0, 0.33, 0.31], "#c1b579");
	box(clock, [0.61, 0.61, 0.025], [0, 0.33, 0.35], "#334936");
	const face = cylinder(clock, 0.265, 0.265, 0.03, [0, 0.33, 0.375], "#babc72");
	face.rotation.x = 1.57;
	const dial = cylinder(clock, 0.224, 0.224, 0.03, [0, 0.33, 0.399], "#3c512b");
	dial.rotation.x = 1.57;
	function clockHands(parent: THREE.Object3D, center: Position, length: number, color: string) {
		const hands = [0.7, 1].map((scale) => {
			const pivot = new THREE.Group();
			pivot.position.set(...center);
			parent.add(pivot);
			const hand = box(
				pivot,
				[0.018, length * scale, 0.012],
				[0, (length * scale) / 2, 0],
				new THREE.MeshBasicMaterial({ color }),
			);
			hand.castShadow = false;
			return pivot;
		});
		return (date: Date) => {
			const minutes = date.getMinutes();
			hands[0].rotation.z = (-((date.getHours() % 12) + minutes / 60) * Math.PI) / 6;
			hands[1].rotation.z = (-minutes * Math.PI) / 30;
		};
	}
	const updateMantelClock = clockHands(clock, [0, 0.33, 0.427], 0.19, "#fff6a6");

	// Oversized software boxes are actual 3D objects, just like Bob’s program icons.
	function iconBox(x: number, y: number, id: DestinationId | undefined, kind: string, color: string) {
		const g = group([x, y, -2.87], id);
		box(g, [0.84, 0.83, 0.64], [0, 0, 0], color);
		box(g, [0.77, 0.73, 0.025], [0, 0, 0.333], "#ededeb");
		const map = texture(128, 128, (ctx) => {
			ctx.fillStyle = "#eeeede";
			ctx.fillRect(0, 0, 128, 128);
			ctx.strokeStyle = "#242136";
			ctx.lineWidth = 4;
			if (kind === "book") {
				ctx.fillStyle = "#ad2877";
				ctx.fillRect(21, 15, 80, 94);
				ctx.fillStyle = "#36349c";
				ctx.fillRect(28, 15, 73, 85);
				ctx.fillStyle = "#fffed6";
				ctx.fillRect(36, 27, 53, 45);
				ctx.strokeRect(36, 27, 53, 45);
				ctx.fillStyle = "#387c53";
				ctx.font = "bold 25px Georgia";
				ctx.fillText("W", 46, 58);
				ctx.fillStyle = "#ffecd0";
				ctx.fillRect(31, 100, 70, 7);
			} else if (kind === "links") {
				ctx.fillStyle = "#202030";
				ctx.fillRect(19, 19, 91, 70);
				ctx.fillStyle = "#907abd";
				ctx.fillRect(25, 26, 77, 55);
				ctx.strokeStyle = "#fff";
				ctx.lineWidth = 8;
				ctx.beginPath();
				ctx.ellipse(52, 54, 20, 12, -0.7, 0, 6.3);
				ctx.ellipse(79, 54, 20, 12, -0.7, 0, 6.3);
				ctx.stroke();
				ctx.fillStyle = "#8b878c";
				ctx.fillRect(14, 95, 103, 16);
				ctx.strokeRect(14, 95, 103, 16);
			} else if (kind === "globe") {
				ctx.fillStyle = "#4456b2";
				ctx.beginPath();
				ctx.arc(64, 60, 43, 0, 6.3);
				ctx.fill();
				ctx.fillStyle = "#48a849";
				ctx.beginPath();
				ctx.moveTo(35, 26);
				ctx.lineTo(70, 20);
				ctx.lineTo(77, 43);
				ctx.lineTo(58, 63);
				ctx.lineTo(43, 94);
				ctx.lineTo(31, 72);
				ctx.fill();
				ctx.strokeStyle = "#fff";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.ellipse(64, 60, 22, 43, 0, 0, 6.3);
				ctx.ellipse(64, 60, 43, 14, 0, 0, 6.3);
				ctx.stroke();
				ctx.fillStyle = "#333";
				ctx.fillRect(58, 101, 12, 9);
				ctx.fillRect(35, 111, 59, 7);
			} else if (kind === "calculator") {
				ctx.fillStyle = "#292939";
				ctx.fillRect(20, 15, 90, 100);
				ctx.fillStyle = "#9fcbba";
				ctx.fillRect(28, 25, 73, 24);
				for (let r = 0; r < 4; r++)
					for (let c = 0; c < 4; c++) {
						ctx.fillStyle = c === 3 ? "#cbadbd" : "#acafb0";
						ctx.fillRect(29 + c * 19, 58 + r * 12, 14, 8);
					}
			} else if (kind === "sound") {
				ctx.fillStyle = "#37969d";
				ctx.fillRect(28, 40, 24, 45);
				ctx.beginPath();
				ctx.moveTo(52, 40);
				ctx.lineTo(81, 19);
				ctx.lineTo(81, 106);
				ctx.lineTo(52, 85);
				ctx.fill();
				ctx.strokeStyle = "#2b544e";
				ctx.lineWidth = 5;
				ctx.beginPath();
				ctx.arc(63, 63, 45, -0.8, 0.8);
				ctx.stroke();
			} else {
				ctx.fillStyle = "#7762b4";
				ctx.fillRect(19, 18, 91, 95);
				for (let i = 0; i < 4; i++) {
					ctx.fillStyle = "#c6e0b8";
					ctx.fillRect(27, 27 + i * 20, 20, 13);
					ctx.fillStyle = "#e6e8de";
					ctx.fillRect(53, 27 + i * 20, 45, 13);
				}
			}
		});
		picture(g, 0.72, 0.69, [0, 0, 0.354], map);
		if (id) anchors.set(id, new THREE.Vector3(x, y - 0.58, -2.45));
		return g;
	}
	iconBox(-2.13, 4.36, "wiki", "book", "#ba3882");
	iconBox(-2.13, 3.13, undefined, "calculator", "#56bab0");
	iconBox(-2.13, 1.87, undefined, "sound", "#c2539e");
	iconBox(2.13, 4.36, "links", "links", "#a549a2");
	iconBox(2.13, 3.13, undefined, "organizer", "#759ed0");
	iconBox(2.13, 1.87, "search", "globe", "#4c75ad");
	// A row of red reference books and a little blue toy car on the top shelves.
	for (let i = 0; i < 6; i++) {
		box(scene, [0.2, 0.88, 0.5], [-2.73 + i * 0.235, 5.63, -2.98], "#ba202d");
		for (const y of [5.39, 5.83]) box(scene, [0.12, 0.065, 0.01], [-2.73 + i * 0.235, y, -2.719], "#f8b84a");
	}
	const car = group([2.13, 5.46, -2.9]);
	car.rotation.y = -0.28;
	box(car, [1.21, 0.24, 0.54], [0, 0, 0], "#41c9df", 0.07);
	box(car, [0.62, 0.26, 0.48], [0, 0.22, 0], "#8ce2ed", 0.05);
	box(car, [0.46, 0.19, 0.01], [0, 0.23, 0.249], "#d2f6eb");
	for (const x of [-0.39, 0.39])
		for (const z of [-0.29, 0.29]) {
			const wheel = cylinder(car, 0.14, 0.14, 0.08, [x, -0.12, z], "#1f262a");
			wheel.rotation.x = 1.57;
		}

	// The broad blue desk reaches right out to the viewer, with an open knee space.
	const desk = group([-0.9, 0, 2.15]);
	function slab(points: [number, number][], height: number, y: number, color: string) {
		const shape = new THREE.Shape();
		points.forEach(([x, z], i) => (i ? shape.lineTo(x, -z) : shape.moveTo(x, -z)));
		shape.closePath();
		const top = mesh(desk, new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false }), color, [0, y, 0]);
		top.rotation.x = -Math.PI / 2;
		return top;
	}
	slab(
		[
			[-6, -1.5],
			[-2.2, -1.75],
			[0.1, -1.1],
			[2.35, -1.57],
			[5, -0.65],
			[4.9, 1.18],
			[2.2, 0.77],
			[0.05, 1.75],
			[-2.4, 0.88],
			[-6, 1.32],
		],
		0.2,
		1.31,
		blue,
	);
	for (const [x, z, w] of [
		[-4, 0.54, 3.6],
		[-1.8, 1.0, 0.6],
		[2.35, 0.45, 0.65],
		[4.2, 0.2, 0.65],
	])
		box(desk, [w, 1.33, 0.18], [x, 0.63, z], "#38758d");
	for (const x of [-1.8, 2.35]) {
		box(desk, [0.49, 1.1, 0.035], [x, 0.64, x < 0 ? 1.108 : 0.558], "#213747");
		for (let i = 0; i < 5; i++) {
			box(
				desk,
				[0.07, 0.09, 0.01],
				[x + (i % 2 ? 0.1 : -0.1), 0.24 + i * 0.17, x < 0 ? 1.13 : 0.58],
				i % 2 ? "#62b52d" : "#9162b0",
			);
		}
	}
	// A compact computer on the left wing opens Writing.
	const computer = group([-3.14, 1.55, 1.91], "writing");
	computer.rotation.y = 0.13;
	box(computer, [1.17, 0.12, 0.83], [0, 0, 0], "#e8e6cf");
	box(computer, [1.02, 0.82, 0.55], [0, 0.51, -0.19], "#e6e4cf", 0.025);
	box(computer, [0.85, 0.64, 0.035], [0, 0.52, 0.1], "#151c23");
	const screen = texture(256, 192, (ctx) => {
		ctx.fillStyle = "#19213e";
		ctx.fillRect(0, 0, 256, 192);
		ctx.fillStyle = "#7c74cb";
		ctx.fillRect(13, 12, 230, 17);
		ctx.fillStyle = "#8ced84";
		ctx.font = "18px monospace";
		ctx.fillText("hello, world.", 22, 65);
		ctx.fillStyle = "#e3dc89";
		ctx.font = "14px monospace";
		ctx.fillText("a place for words", 22, 98);
		ctx.fillRect(22, 128, 10, 19);
	});
	picture(computer, 0.77, 0.56, [0, 0.52, 0.122], screen);
	box(computer, [1.09, 0.07, 0.42], [0, 0.1, 0.51], "#c6c5b4");
	for (let r = 0; r < 4; r++)
		for (let c = 0; c < 10; c++)
			box(computer, [0.066, 0.025, 0.055], [-0.44 + c * 0.098, 0.15, 0.365 + r * 0.09], "#53595a");
	anchors.set("writing", new THREE.Vector3(-3.14, 2.58, 2.0));
	// Letter tray, telephone, purple notebook, loose paper, and pencil.
	const mail = group([-5.17, 1.54, 2.27], "email");
	box(mail, [0.82, 0.35, 0.64], [0, 0.16, 0], "#ad642b");
	for (let i = 0; i < 4; i++) {
		const letter = box(mail, [0.51, 0.4, 0.025], [-0.14 + i * 0.1, 0.38, 0.02 + i * 0.06], "#fffde4");
		letter.rotation.z = (i - 1.5) * 0.15;
	}
	anchors.set("email", new THREE.Vector3(-5.17, 2.17, 2.36));
	const phone = group([-4.34, 1.6, 1.48]);
	phone.rotation.y = 0.3;
	box(phone, [0.56, 0.13, 0.62], [0, 0, 0], "#e6e2d4", 0.05);
	box(phone, [0.68, 0.14, 0.19], [0, 0.29, -0.16], "#d2d1c0", 0.06);
	for (const x of [-0.25, 0.25]) box(phone, [0.16, 0.22, 0.2], [x, 0.19, -0.16], "#deddd2", 0.04);
	for (let r = 0; r < 3; r++)
		for (let c = 0; c < 3; c++) box(phone, [0.07, 0.03, 0.06], [-0.13 + c * 0.13, 0.086, 0.01 + r * 0.12], "#44474d");
	const notebook = group([-0.49, 1.56, 2.08], "wiki");
	notebook.rotation.y = -0.2;
	box(notebook, [1.18, 0.12, 0.91], [0, 0, 0], "#e9e6c6");
	box(notebook, [1.25, 0.04, 0.96], [0, 0.08, 0], "#6647be");
	box(notebook, [0.57, 0.015, 0.5], [0, 0.106, 0], "#cead68");
	box(notebook, [0.43, 0.015, 0.37], [0, 0.12, 0], "#7161bd");
	const papers = group([1.39, 1.59, 1.65]);
	papers.rotation.y = -0.33;
	for (let i = 0; i < 3; i++) box(papers, [1.17, 0.012, 0.82], [i * 0.03, i * 0.018, 0], "#fffde5");
	for (let i = 0; i < 5; i++) box(papers, [0.69, 0.006, 0.018], [-0.1, 0.057, -0.27 + i * 0.1], "#77694b");
	const pencil = cylinder(papers, 0.018, 0.018, 1.1, [0.2, 0.11, 0.35], "#dfa828");
	pencil.rotation.z = 1.57;
	const penNib = mesh(papers, new THREE.ConeGeometry(0.021, 0.12, 5), "#222", [-0.405, 0.11, 0.35]);
	penNib.rotation.z = 1.57;
	// A small file box and desk clock add the familiar clutter.
	const file = group([-1.71, 1.55, 1.25], "links");
	file.rotation.y = 0.17;
	box(file, [0.68, 0.7, 0.53], [0, 0.32, 0], "#292c26");
	for (let i = 0; i < 5; i++) {
		const folder = box(file, [0.56, 0.43, 0.035], [0, 0.7, -0.19 + i * 0.07], i % 2 ? "#d6c56d" : "#699d4e");
		folder.rotation.z = (i - 2) * 0.06;
	}
	picture(
		file,
		0.5,
		0.5,
		[0, 0.33, 0.271],
		texture(128, 128, (ctx) => {
			ctx.fillStyle = "#282c23";
			ctx.fillRect(0, 0, 128, 128);
			ctx.fillStyle = "#e5be3c";
			ctx.font = "bold 87px Georgia";
			ctx.fillText("@", 14, 94);
		}),
	);
	const deskClock = group([-4.6, 0.7, 2.79]);
	box(deskClock, [0.73, 0.6, 0.09], [0, 0, 0], "#212c31");
	picture(
		deskClock,
		0.62,
		0.49,
		[0, 0, 0.05],
		texture(200, 160, (ctx) => {
			ctx.fillStyle = "#ffffe9";
			ctx.fillRect(0, 0, 200, 160);
			ctx.fillStyle = "#111";
			ctx.font = "28px Georgia";
			ctx.fillText("12", 82, 29);
			ctx.fillText("3", 165, 90);
			ctx.fillText("6", 91, 150);
			ctx.fillText("9", 9, 90);
		}),
	);
	const updateDeskClock = clockHands(deskClock, [0, 0, 0.065], 0.16, "#111111");
	// Brass lamp and flowers in the left window.
	const lamp = group([-5.55, 0, -0.57]);
	cylinder(lamp, 0.39, 0.47, 0.09, [0, 0.04, 0], "#545947");
	cylinder(lamp, 0.055, 0.075, 2.75, [0, 1.42, 0], "#3b413e");
	cylinder(lamp, 0.42, 0.83, 0.95, [0, 3.01, 0], "#ccb26d");
	cylinder(lamp, 0.07, 0.07, 0.08, [0, 3.53, 0], "#89702b");
	const flowers = group([-4.48, 1.58, 0.85]);
	cylinder(flowers, 0.23, 0.15, 0.55, [0, 0.24, 0], "#b0bcc1");
	for (let i = 0; i < 11; i++) {
		const x = Math.sin(i * 2.1) * 0.46,
			z = Math.cos(i * 2.1) * 0.22,
			y = 0.92 + (i % 4) * 0.16;
		const stem = cylinder(flowers, 0.018, 0.018, y, [x / 2, y / 2 + 0.3, z / 2], "#258333");
		stem.rotation.z = -x * 0.7;
		for (let j = 0; j < 5; j++)
			sphere(
				flowers,
				[0.11, 0.085, 0.055],
				[x + Math.cos(j * 1.26) * 0.115, y + Math.sin(j * 1.26) * 0.115, z],
				i % 3 ? "#ffffdf" : "#f4d451",
			);
		sphere(flowers, [0.065, 0.065, 0.06], [x, y, z + 0.02], "#dbac2f");
	}
	// Additive details share the existing room layout and never replace its navigation objects.
	const cyber = group([0, 0, 0]);
	cyber.visible = false;
	const cyan = new THREE.MeshBasicMaterial({ color: "#65f5ec" });
	const magenta = new THREE.MeshBasicMaterial({ color: "#ff63cb" });
	for (const x of [-5.7, 5.7]) box(cyber, [0.055, 6.8, 0.06], [x, 3.45, -3.23], x < 0 ? magenta : cyan);
	box(cyber, [11.4, 0.06, 0.06], [0, 6.84, -3.23], cyan);
	for (const x of [-2.13, 2.13]) {
		for (const y of [1.36, 2.62, 3.87, 5.12, 6.47])
			box(cyber, [1.68, 0.035, 0.035], [x, y - 0.05, -2.48], x < 0 ? cyan : magenta);
	}
	for (const x of [-6.5, 6.5]) {
		for (let i = 0; i < 5; i++) box(cyber, [0.62, 0.04, 0.03], [x, 4.2 + i * 0.15, -3.49], magenta);
	}
	const terminal = texture(512, 384, (ctx) => {
		ctx.fillStyle = "#071c29";
		ctx.fillRect(0, 0, 512, 384);
		ctx.fillStyle = "#69f9da";
		ctx.font = "bold 26px monospace";
		ctx.fillText("PERSONAL MAINFRAME", 28, 45);
		ctx.fillStyle = "#df79df";
		ctx.font = "18px monospace";
		ctx.fillText("SAM'S PLACE / NETWORK ONLINE", 28, 79);
		ctx.strokeStyle = "#246170";
		ctx.lineWidth = 1;
		for (let y = 110; y < 330; y += 28) {
			ctx.beginPath();
			ctx.moveTo(25, y);
			ctx.lineTo(487, y);
			ctx.stroke();
		}
		for (let x = 25; x < 490; x += 33) {
			ctx.beginPath();
			ctx.moveTo(x, 110);
			ctx.lineTo(x, 330);
			ctx.stroke();
		}
		ctx.strokeStyle = "#67f3e5";
		ctx.lineWidth = 3;
		ctx.beginPath();
		for (let i = 0; i < 90; i++) {
			const x = 28 + i * 5;
			const y = 222 + Math.sin(i * 0.22) * 49 + Math.cos(i * 0.57) * 23;
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.stroke();
		ctx.fillStyle = "#69f9da";
		ctx.fillText("> MAKE YOURSELF AT HOME_", 28, 364);
		ctx.fillStyle = "#00000025";
		for (let y = 0; y < 384; y += 4) ctx.fillRect(0, y, 512, 1);
	});
	picture(cyber, 1.94, 1.63, [0, 1.02, -2.17], terminal);
	for (const [x, color] of [
		[-3.5, "#da55f3"],
		[3.5, "#4bf6ef"],
	] as const) {
		const light = new THREE.PointLight(color, 10, 8, 2);
		light.position.set(x, 3.6, -1.2);
		cyber.add(light);
	}
	const greek = group([0, 0, 0]);
	greek.visible = false;
	const marbleMap = texture(256, 512, (ctx) => {
		ctx.fillStyle = "#eee9d9";
		ctx.fillRect(0, 0, 256, 512);
		ctx.strokeStyle = "#a9a79635";
		ctx.lineWidth = 1.5;
		for (let i = 0; i < 14; i++) {
			ctx.beginPath();
			for (let y = 0; y <= 512; y += 8) {
				const x = i * 26 - 70 + y * 0.22 + Math.sin(y * 0.035 + i) * 12;
				if (y === 0) ctx.moveTo(x, y);
				else ctx.lineTo(x, y);
			}
			ctx.stroke();
		}
	});
	const marble = new THREE.MeshStandardMaterial({ map: marbleMap, roughness: 0.8 });
	for (const x of [-5.8, -3.04, 3.04, 5.8]) {
		box(greek, [0.77, 0.19, 0.8], [x, 0.12, -2.92], marble);
		cylinder(greek, 0.37, 0.39, 0.17, [x, 0.3, -2.92], marble);
		cylinder(greek, 0.23, 0.3, 5.73, [x, 3.24, -2.92], marble);
		// Narrow raised ribs give the shafts a fluted silhouette.
		for (let i = 0; i < 16; i++) {
			const angle = (i * Math.PI) / 8;
			cylinder(greek, 0.028, 0.037, 5.63, [x + Math.cos(angle) * 0.26, 3.23, -2.92 + Math.sin(angle) * 0.26], marble);
		}
		cylinder(greek, 0.39, 0.27, 0.22, [x, 6.17, -2.92], marble);
		box(greek, [0.82, 0.18, 0.83], [x, 6.36, -2.92], marble);
	}
	box(greek, [12.5, 0.29, 0.65], [0, 6.6, -2.92], marble);
	// A triangular pediment and dentil molding above the central alcove.
	const pediment = new THREE.Shape();
	pediment.moveTo(-1.5, 0);
	pediment.lineTo(0, 0.45);
	pediment.lineTo(1.5, 0);
	pediment.closePath();
	mesh(greek, new THREE.ExtrudeGeometry(pediment, { depth: 0.22, bevelEnabled: false }), marble, [0, 5.12, -2.93]);
	box(greek, [3.2, 0.13, 0.59], [0, 5.08, -2.84], marble);
	for (let i = 0; i < 15; i++) box(greek, [0.095, 0.12, 0.12], [-1.4 + i * 0.2, 4.97, -2.56], marble);
	const seal = cylinder(greek, 0.16, 0.16, 0.025, [0, 5.36, -2.68], "#ad9453");
	seal.rotation.x = Math.PI / 2;
	// Terracotta amphora in the old hearth niche.
	box(greek, [1.94, 1.65, 0.06], [0, 1.02, -2.43], "#a8a28d");
	sphere(greek, [0.36, 0.5, 0.24], [0, 0.83, -2.05], "#aa633d");
	cylinder(greek, 0.14, 0.18, 0.34, [0, 1.35, -2.05], "#aa633d");
	cylinder(greek, 0.22, 0.2, 0.08, [0, 1.54, -2.05], "#d0a46c");
	cylinder(greek, 0.16, 0.24, 0.13, [0, 0.34, -2.05], "#aa633d");
	for (const x of [-0.32, 0.32]) {
		const handle = mesh(greek, new THREE.TorusGeometry(0.2, 0.044, 8, 20), "#aa633d", [x, 1.12, -2.05]);
		handle.scale.set(0.65, 1.35, 1);
	}
	for (const y of [0.63, 0.94]) {
		const radius = 0.36 * Math.sqrt(1 - ((y - 0.83) / 0.5) ** 2);
		const band = mesh(greek, new THREE.TorusGeometry(radius, 0.022, 8, 32), "#4d392a", [0, y, -2.05]);
		band.rotation.x = Math.PI / 2;
		band.scale.y = 2 / 3;
	}
	return {
		targets,
		anchors,
		setSkin(next: RoomSkin) {
			skin = next;
			const isCyberpunk = skin === "cyberpunk";
			const isGreek = skin === "greek";
			const palette = isCyberpunk ? cyberpunkPalette : isGreek ? greekPalette : {};
			for (const [original, mat] of materials) mat.color.set(palette[original] ?? original);
			cyber.visible = isCyberpunk;
			greek.visible = isGreek;
			windowBars.forEach((bar) => {
				bar.visible = !isGreek;
			});
			clock.position.set(0, isGreek ? 5.95 : 5.91, isGreek ? -2.5 : -3.08);
			clock.scale.setScalar(isGreek ? 0.62 : 1);
			fire.visible = skin === "classic";
			firelight.visible = skin === "classic";
			outdoorMinute = "";
		},
		updateTime(date = new Date()) {
			const minute = `${Math.floor(date.getTime() / 60000)}:${date.getTimezoneOffset()}`;
			if (minute === outdoorMinute) return false;
			outdoorMinute = minute;
			updateMantelClock(date);
			updateDeskClock(date);
			for (const { map, ctx, right } of outdoorViews) {
				(skin === "cyberpunk" ? drawCityOutdoors : skin === "greek" ? drawGreekOutdoors : drawOutdoors)(
					ctx,
					right,
					date,
				);
				map.needsUpdate = true;
			}
			return true;
		},
		animate(time: number) {
			flames.forEach((flame, i) => {
				flame.scale.y = 1 + Math.sin(time * 6 + i * 1.7) * 0.2;
			});
		},
		dispose() {
			const geometries = new Set<THREE.BufferGeometry>();
			const usedMaterials = new Set<THREE.Material>();
			scene.traverse((object) => {
				if (object instanceof THREE.Mesh) {
					geometries.add(object.geometry);
					for (const mat of Array.isArray(object.material) ? object.material : [object.material])
						usedMaterials.add(mat);
				}
			});
			geometries.forEach((g) => g.dispose());
			usedMaterials.forEach((m) => m.dispose());
			textures.forEach((t) => t.dispose());
		},
	};
}
