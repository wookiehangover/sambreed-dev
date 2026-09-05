export const roomSkins = [
	{ id: "classic", label: "Classic Bob" },
	{ id: "cyberpunk", label: "Retro cyberpunk office" },
	{ id: "greek", label: "Greek academy" },
] as const;

export type RoomSkin = (typeof roomSkins)[number]["id"];

export function isRoomSkin(value: unknown): value is RoomSkin {
	return roomSkins.some((skin) => skin.id === value);
}

export const skinStorageKey = "bob-room-skin";

/** Material colors are keyed by the original room's palette, so switching is reversible. */
export const cyberpunkPalette: Record<string, string> = {
	"#ffca4b": "#171c35", // wall
	"#b58a22": "#101727", // floor
	"#ffbd3f": "#495270", // structural trim
	"#ffdc75": "#4a7290", // shelves and window frames
	"#b96526": "#292d4e", // woodwork
	"#568eac": "#253a50", // desktop
	"#38758d": "#172633",
	"#a62220": "#29213c",
	"#c98330": "#11182b",
	"#ffd75a": "#25334e",
	"#f9c845": "#303e59",
	"#fff4bd": "#71e7eb",
	"#fff1a8": "#f571d4",
	"#f0b951": "#a2439f",
	"#fff0ac": "#60d9df",
	"#d68d29": "#2f4765",
	"#e19d32": "#384a70",
	"#a0a79a": "#20283c",
	"#c8cab1": "#354864",
	"#f6d773": "#5cf0e5",
	"#ded79d": "#24384b",
	"#e8e6cf": "#384756",
	"#e6e4cf": "#4b5f73",
	"#c6c5b4": "#69718e",
	"#ccb26d": "#dd67ca",
	"#ffffdf": "#75eee2",
	"#f4d451": "#ed76d0",
	"#dbac2f": "#9f80e6",
};

export const greekPalette: Record<string, string> = {
	"#ffca4b": "#e0d8c2",
	"#b58a22": "#b8b19c",
	"#ffbd3f": "#dfd8c8",
	"#ffdc75": "#f2ecdb",
	"#b96526": "#afa894",
	"#568eac": "#ded7c3",
	"#38758d": "#aaa594",
	"#a62220": "#5e7c89",
	"#c98330": "#a9a795",
	"#ffd75a": "#d8d4c4",
	"#f9c845": "#e8e1cc",
	"#fff4bd": "#aa893c",
	"#fff1a8": "#b2944d",
	"#f0b951": "#ede5ce",
	"#fff0ac": "#ede5ce",
	"#d68d29": "#c9c6b4",
	"#e19d32": "#e9e1d0",
	"#a0a79a": "#d3ccb7",
	"#c8cab1": "#e9e2d0",
	"#f6d773": "#b69b57",
	"#ded79d": "#eee5cb",
	"#ccb26d": "#a76842",
	"#ffffdf": "#f8f2d7",
	"#f4d451": "#ece5ba",
};
