"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { List, X } from "lucide-react";
import type { NavItem } from "@/data/privacy-sections";
import { cn } from "@/lib/utils";
import { scrollToSection } from "./hooks/useScrollSpy";

interface StickySectionNavProps {
	items: NavItem[];
	activeId: string;
}

function NavButton({
	item,
	isActive,
	onClick,
	className,
}: {
	item: NavItem;
	isActive: boolean;
	onClick: () => void;
	className?: string;
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-current={isActive ? "true" : undefined}
			className={cn(
				"relative w-full rounded-lg px-3 py-2 text-left text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy",
				isActive ? "font-semibold text-miley-burgundy" : "text-[#666666] hover:text-[#111111]",
				className,
			)}>
			{isActive && (
				<motion.span
					layoutId="privacy-nav-indicator"
					className="absolute inset-0 rounded-lg bg-miley-blush/70"
					transition={{ type: "spring", stiffness: 380, damping: 30 }}
				/>
			)}
			<span className="relative">{item.label}</span>
		</button>
	);
}

export function StickySectionNav({ items, activeId }: StickySectionNavProps) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const reducedMotion = useReducedMotion();

	const handleNavClick = (id: string) => {
		scrollToSection(id);
		setMobileOpen(false);
	};

	return (
		<>
			<nav aria-label="Privacy Policy sections" className="hidden lg:block">
				<div className="sticky top-28 rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_8px_32px_rgba(17,17,17,0.06)] backdrop-blur-xl">
					<p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-miley-burgundy">Privacy Policy</p>
					<ul className="space-y-1">
						{items.map((item) => (
							<li key={item.id}>
								<NavButton item={item} isActive={activeId === item.id} onClick={() => handleNavClick(item.id)} />
							</li>
						))}
					</ul>
				</div>
			</nav>

			<div className="fixed bottom-6 right-4 z-50 lg:hidden">
				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							initial={reducedMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 16, scale: 0.96 }}
							className="absolute bottom-16 right-0 w-[min(280px,calc(100vw-2rem))] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-[0_16px_48px_rgba(17,17,17,0.15)] backdrop-blur-xl">
							<p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-miley-burgundy">Sections</p>
							<ul className="max-h-[50vh] space-y-1 overflow-y-auto">
								{items.map((item) => (
									<li key={item.id}>
										<NavButton item={item} isActive={activeId === item.id} onClick={() => handleNavClick(item.id)} />
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>

				<button
					type="button"
					onClick={() => setMobileOpen((open) => !open)}
					aria-expanded={mobileOpen}
					aria-label={mobileOpen ? "Close section navigation" : "Open section navigation"}
					className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-miley-burgundy text-white shadow-[0_8px_32px_rgba(157,23,77,0.35)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy focus-visible:ring-offset-2">
					{mobileOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
				</button>
			</div>
		</>
	);
}
