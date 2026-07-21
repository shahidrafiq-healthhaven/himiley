"use client";

import { useEffect, useRef } from "react";

export function ReadingProgressBar() {
	const barRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let rafId = 0;

		const update = () => {
			const bar = barRef.current;
			if (!bar) return;

			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const value = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
			bar.style.transform = `scaleX(${value})`;
		};

		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", update);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", update);
		};
	}, []);

	return (
		<div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-[#E0E0E0]/40">
			<div
				ref={barRef}
				className="h-full origin-left bg-gradient-to-r from-miley-burgundy to-miley-pink will-change-transform"
				style={{ transform: "scaleX(0)" }}
			/>
		</div>
	);
}
