import { Color } from "three";

const stops = [
	{ hour: 0, sky: "#08102c", horizon: "#182342", daylight: 0 },
	{ hour: 5, sky: "#111833", horizon: "#4c3857", daylight: 0 },
	{ hour: 6, sky: "#736aab", horizon: "#f4a16e", daylight: 0.25 },
	{ hour: 8, sky: "#70b6ed", horizon: "#fff0cf", daylight: 1 },
	{ hour: 12, sky: "#4b9ef1", horizon: "#fffef2", daylight: 1 },
	{ hour: 16, sky: "#65a9df", horizon: "#ffecc1", daylight: 1 },
	{ hour: 18, sky: "#79638f", horizon: "#f9904d", daylight: 0.4 },
	{ hour: 20, sky: "#121932", horizon: "#303653", daylight: 0 },
	{ hour: 24, sky: "#08102c", horizon: "#182342", daylight: 0 },
] as const;

function blend(from: string, to: string, amount: number) {
	return `#${new Color(from).lerp(new Color(to), amount).getHexString()}`;
}

/** A stylized day/night cycle using the visitor's local clock, without geolocation. */
export function outdoorLight(date: Date) {
	const hour = date.getHours() + date.getMinutes() / 60;
	const next = stops.findIndex((stop) => stop.hour > hour);
	const from = stops[next - 1];
	const to = stops[next];
	const progress = (hour - from.hour) / (to.hour - from.hour);
	return {
		hour,
		sky: blend(from.sky, to.sky, progress),
		horizon: blend(from.horizon, to.horizon, progress),
		daylight: from.daylight + (to.daylight - from.daylight) * progress,
	};
}

function drawSky(ctx: CanvasRenderingContext2D, right: boolean, date: Date) {
	const light = outdoorLight(date);
	const sky = ctx.createLinearGradient(0, 0, 0, 370);
	sky.addColorStop(0, light.sky);
	sky.addColorStop(1, light.horizon);
	ctx.fillStyle = sky;
	ctx.fillRect(0, 0, 384, 768);

	// Stars stay in the same places as the sky changes, and disappear in daylight.
	ctx.globalAlpha = Math.max(0, 1 - light.daylight * 3);
	ctx.fillStyle = "#fff7d6";
	for (let i = 0; i < 33; i++) {
		const x = 12 + ((i * 97 + (right ? 43 : 0)) % 360);
		const y = 12 + ((i * 61) % 286);
		ctx.fillRect(x, y, i % 5 ? 2 : 3, i % 5 ? 2 : 3);
	}
	ctx.globalAlpha = 1;
	if (right) {
		if (light.hour >= 6 && light.hour <= 18) {
			const progress = (light.hour - 6) / 12;
			ctx.fillStyle = "#ffeb9a";
			ctx.beginPath();
			ctx.arc(45 + progress * 285, 330 - Math.sin(progress * Math.PI) * 255, 24, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.globalAlpha = Math.max(0, 1 - light.daylight * 2);
			ctx.fillStyle = "#eeedce";
			ctx.beginPath();
			ctx.arc(267, 85, 23, 0.55, Math.PI * 2 - 0.55);
			ctx.quadraticCurveTo(245, 85, 267 + Math.cos(0.55) * 23, 85 + Math.sin(0.55) * 23);
			ctx.fill();
			ctx.globalAlpha = 1;
		}
	}

	return light;
}

export function drawOutdoors(ctx: CanvasRenderingContext2D, right: boolean, date: Date) {
	const light = drawSky(ctx, right, date);
	const color = (night: string, day: string) => blend(night, day, light.daylight);
	ctx.fillStyle = right ? color("#151c25", "#bd850c") : color("#102329", "#277c1e");
	ctx.fillRect(0, 365, 384, 410);
	ctx.fillStyle = color("#0b1921", "#164d19");
	for (let i = 0; i < 7; i++) {
		ctx.beginPath();
		ctx.arc(i * 76 - 20, 342 + (i % 3) * 12, 44, 0, Math.PI * 2);
		ctx.fill();
	}
	if (right) {
		ctx.strokeStyle = color("#2b303c", "#efa331");
		ctx.lineWidth = 8;
		for (let i = 0; i < 5; i++) {
			ctx.beginPath();
			ctx.moveTo(0, 400 + i * 95);
			ctx.lineTo(384, 768);
			ctx.stroke();
		}
		ctx.fillStyle = color("#34353d", "#e2a622");
		ctx.beginPath();
		ctx.ellipse(292, 509, 31, 53, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = color("#1b203c", "#4a28a4");
		ctx.fillRect(256, 554, 88, 35);
	} else {
		ctx.fillStyle = color("#091a20", "#10471c");
		ctx.fillRect(0, 355, 384, 413);
		for (let i = 0; i < 23; i++) {
			ctx.fillStyle = i % 2 ? color("#11282a", "#208626") : color("#1b3432", "#479a26");
			ctx.beginPath();
			ctx.ellipse((i * 83) % 384, 390 + ((i * 61) % 360), 45, 65, i, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.strokeStyle = color("#26202a", "#824c25");
		ctx.lineWidth = 20;
		ctx.beginPath();
		ctx.moveTo(60, 768);
		ctx.lineTo(157, 445);
		ctx.moveTo(119, 555);
		ctx.lineTo(282, 462);
		ctx.stroke();
	}
}

/** The same local-time sky above a low-resolution city skyline. */
export function drawCityOutdoors(ctx: CanvasRenderingContext2D, right: boolean, date: Date) {
	const { daylight } = drawSky(ctx, right, date);
	const color = (night: string, day: string) => blend(night, day, daylight);
	ctx.fillStyle = color("#17172c", "#7c8ea5");
	ctx.fillRect(0, 225, 384, 543);
	for (let layer = 0; layer < 2; layer++) {
		for (let i = 0; i < 7; i++) {
			const x = i * 63 - 25 + layer * 18;
			const top = 130 + ((i * 79 + (right ? 61 : 0)) % 190) + layer * 180;
			const width = 46 + (i % 3) * 9;
			ctx.fillStyle = layer ? color("#0d1524", "#34455e") : color("#222541", "#536783");
			ctx.fillRect(x, top, width, 768 - top);
			ctx.fillRect(x + width / 2, top - 22, 2, 22);
			ctx.fillStyle = i % 2 ? "#e58fdb" : "#6ee5e9";
			ctx.fillRect(x, top, width, 2);
			for (let row = 0; row < 17; row++)
				for (let col = 0; col < 4; col++) {
					ctx.fillStyle =
						(row * 7 + col * 3 + i) % 5 < 2
							? color(i % 2 ? "#ecb666" : "#65c6d2", "#98b6c4")
							: color("#252a44", "#48627c");
					ctx.fillRect(x + 6 + col * 11, top + 14 + row * 24, 5, 10);
				}
		}
	}
	// Pixel signs and distant skybridges.
	ctx.fillStyle = "#303457";
	ctx.fillRect(0, 546, 384, 15);
	for (const [x, y, text, neon] of (right
		? [
				[239, 310, "ARCADE", "#ef65d6"],
				[41, 606, "OPEN", "#70eadb"],
			]
		: [
				[25, 298, "NOODLES", "#f681cb"],
				[222, 519, "NET", "#66dfe9"],
			]) as [number, number, string, string][]) {
		ctx.fillStyle = "#13152d";
		ctx.fillRect(x - 5, y - 20, text.length * 14 + 10, 32);
		ctx.strokeStyle = neon;
		ctx.lineWidth = 2;
		ctx.strokeRect(x - 5, y - 20, text.length * 14 + 10, 32);
		ctx.fillStyle = neon;
		ctx.font = "bold 21px monospace";
		ctx.fillText(text, x, y + 3);
	}
	ctx.strokeStyle = "#89bde529";
	ctx.lineWidth = 1;
	for (let i = 0; i < 36; i++) {
		const x = (i * 97) % 390;
		const y = (i * 149) % 750;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x - 7, y + 30);
		ctx.stroke();
	}
}

/** Open colonnades overlooking a stylized Aegean coast. */
export function drawGreekOutdoors(ctx: CanvasRenderingContext2D, right: boolean, date: Date) {
	const { daylight } = drawSky(ctx, right, date);
	const color = (night: string, day: string) => blend(night, day, daylight);
	ctx.fillStyle = color("#172b44", "#498995");
	ctx.beginPath();
	ctx.moveTo(0, 365);
	for (let i = 0; i <= 12; i++) ctx.lineTo(i * 32, 315 + Math.sin(i * 0.65 + (right ? 2 : 0)) * 32);
	ctx.lineTo(384, 400);
	ctx.lineTo(0, 400);
	ctx.fill();
	const sea = ctx.createLinearGradient(0, 370, 0, 768);
	sea.addColorStop(0, color("#192f4b", "#387cbe"));
	sea.addColorStop(1, color("#173b46", "#62bdbf"));
	ctx.fillStyle = sea;
	ctx.fillRect(0, 370, 384, 398);
	ctx.strokeStyle = color("#3a5068", "#b9dcd6");
	ctx.lineWidth = 2;
	for (let i = 0; i < 26; i++) {
		const x = (i * 97) % 384,
			y = 390 + ((i * 43) % 370);
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + 14 + (i % 5) * 8, y);
		ctx.stroke();
	}
	ctx.fillStyle = color("#313637", "#c2b38c");
	ctx.beginPath();
	ctx.moveTo(0, 575);
	ctx.lineTo(95, 518);
	ctx.lineTo(192, 554);
	ctx.lineTo(258, 671);
	ctx.lineTo(384, 729);
	ctx.lineTo(384, 768);
	ctx.lineTo(0, 768);
	ctx.fill();
	if (!right) {
		ctx.fillStyle = color("#969383", "#fff0d3");
		ctx.fillRect(37, 498, 139, 11);
		for (let i = 0; i < 6; i++) {
			ctx.fillRect(47 + i * 22, 428, 9, 70);
			ctx.fillRect(43 + i * 22, 424, 17, 6);
		}
		ctx.fillRect(36, 414, 142, 10);
		ctx.beginPath();
		ctx.moveTo(31, 414);
		ctx.lineTo(107, 374);
		ctx.lineTo(183, 414);
		ctx.fill();
	} else {
		ctx.strokeStyle = color("#2e3128", "#74603a");
		ctx.lineWidth = 9;
		ctx.beginPath();
		ctx.moveTo(114, 639);
		ctx.lineTo(129, 515);
		ctx.stroke();
		ctx.fillStyle = color("#24392e", "#6b8250");
		for (let i = 0; i < 6; i++) {
			ctx.beginPath();
			ctx.ellipse(75 + i * 20, 500 + Math.sin(i * 2) * 18, 41, 23, 0, 0, Math.PI * 2);
			ctx.fill();
		}
	}
}
