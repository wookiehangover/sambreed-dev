import { play, type SoundName } from "cuelume";

const storageKey = "bob-room-sound";

export function createRoomSounds(root: HTMLElement, signal: AbortSignal) {
	const button = root.querySelector<HTMLButtonElement>("[data-sound]")!;
	let enabled = true;
	try {
		enabled = localStorage.getItem(storageKey) !== "off";
	} catch {
		// Sound controls still work when browser storage is unavailable.
	}
	button.disabled = false;
	button.setAttribute("aria-pressed", String(enabled));
	function cue(name: SoundName) {
		if (!enabled || signal.aborted) return;
		play(name, { volume: 0.3 });
	}
	button.addEventListener(
		"click",
		() => {
			enabled = !enabled;
			button.setAttribute("aria-pressed", String(enabled));
			try {
				localStorage.setItem(storageKey, enabled ? "on" : "off");
			} catch {
				// Keep the selected setting for this visit.
			}
			cue("toggle");
		},
		{ signal },
	);
	// Covers keyboard links, fallback navigation, and clicks forwarded from room objects.
	root.addEventListener(
		"click",
		(event) => {
			if (event.target instanceof Element && event.target.closest("a[href]")) cue("page");
		},
		{ signal },
	);
	return cue;
}
