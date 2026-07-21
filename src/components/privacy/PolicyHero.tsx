import { Reveal } from "@/components/motion/Reveal";

interface PolicyHeroProps {
	accentLabel: string;
	title: string;
}

export function PolicyHero({ accentLabel, title }: PolicyHeroProps) {
	return (
		<section className="relative w-full overflow-hidden border-b border-white/60 bg-gradient-to-br from-miley-blush via-[#FDF2F4] to-white py-16 sm:py-24">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(157,23,77,0.08),transparent_50%)]" />
			<div className="relative mx-auto w-full max-w-[1400px] px-6 text-center">
				<Reveal direction="up" duration={0.3}>
					<p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-miley-burgundy">{accentLabel}</p>
				</Reveal>
				<Reveal direction="up" delay={0.1} duration={0.4}>
					<h1 className="text-[32px] font-semibold tracking-tight text-[#111111] sm:text-[48px] lg:text-[52px]">{title}</h1>
				</Reveal>
				<div className="mx-auto mt-8 h-[3px] w-24 bg-gradient-to-r from-miley-burgundy to-miley-pink" />
			</div>
		</section>
	);
}
