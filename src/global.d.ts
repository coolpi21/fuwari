import type { AstroIntegration } from "@swup/astro";

declare global {
	interface Window {
		// type from '@swup/astro' is incorrect
		swup: AstroIntegration;
	}

	interface Window {
		plausible: (
			event: string,
			options?: { props: Record<string, string> },
		) => void;
	}
}
