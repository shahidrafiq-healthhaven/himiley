import type { PolicySection, PolicyAnimation } from "@/types/policy";
import { cn } from "@/lib/utils";
import { PolicyList } from "./PolicyList";
import { Reveal } from "@/components/motion/Reveal";

interface PolicySectionCardProps {
	section: PolicySection;
	trailingParagraphs: Record<string, string[]>;
}

const ANIMATION_TO_DIRECTION: Record<PolicyAnimation, "up" | "left" | "right" | "scale"> = {
	fadeUp: "up",
	slideLeft: "left",
	slideRight: "right",
	scaleIn: "scale",
	blurReveal: "up",
};

function renderLinkParagraph(text: string) {
	const parts = text.split("www.mbc.ca.gov");
	if (parts.length < 2) {
		return <p className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">{text}</p>;
	}

	return (
		<p className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
			{parts[0]}
			<a
				href="https://www.mbc.ca.gov"
				target="_blank"
				rel="noopener noreferrer"
				className="text-miley-burgundy underline underline-offset-2 transition-colors hover:text-[#83103F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy">
				www.mbc.ca.gov
			</a>
			{parts[1]}
		</p>
	);
}

export function PolicySectionCard({ section, trailingParagraphs }: PolicySectionCardProps) {
	const Icon = section.icon;
	const trailing = trailingParagraphs[section.id] ?? [];

	return (
		<Reveal
			as="section"
			id={section.id}
			direction={ANIMATION_TO_DIRECTION[section.animation]}
			className={cn(
				"card-interactive group relative scroll-mt-[120px] rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_8px_40px_rgba(17,17,17,0.06)] sm:p-8 lg:p-10",
				"hover:border-miley-burgundy/20 hover:bg-white",
			)}>
			<div className="relative">
				<div className="mb-6 flex items-start justify-between gap-4">
					<div className="space-y-3">
						<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-miley-burgundy">{section.label}</p>
						<h2 className="text-[28px] font-bold text-[#111111] sm:text-[36px]">{section.title}</h2>
						<div className="h-[2px] w-12 origin-left bg-gradient-to-r from-miley-burgundy to-miley-pink" />
					</div>
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-miley-burgundy/10 bg-miley-blush/50 text-miley-burgundy shadow-sm transition-[transform,background-color,color] duration-200 group-hover:scale-105 group-hover:bg-miley-burgundy group-hover:text-white">
						<Icon className="h-5 w-5" strokeWidth={1.75} />
					</div>
				</div>

				<div className="w-full space-y-5">
					{section.paragraphs && section.paragraphs.length > 0 && (
						<div className="space-y-4">
							{section.paragraphs.map((paragraph) => (
								<p key={paragraph} className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
									{paragraph}
								</p>
							))}
						</div>
					)}

					{section.linkParagraph && renderLinkParagraph(section.linkParagraph)}

					{section.listIntro && <p className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">{section.listIntro}</p>}

					{section.listItems && section.listItems.length > 0 && <PolicyList items={section.listItems} />}

					{section.subsections?.map((subsection) => (
						<div key={subsection.title} className="space-y-4 rounded-xl border border-miley-blush/80 bg-miley-blush/20 p-5 sm:p-6">
							<h3 className="text-[20px] font-semibold text-[#111111] sm:text-[22px]">{subsection.title}</h3>
							{subsection.intro && <p className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">{subsection.intro}</p>}
							{subsection.paragraphs?.map((paragraph) => (
								<p key={paragraph} className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
									{paragraph}
								</p>
							))}
							{subsection.listItems && subsection.listItems.length > 0 && <PolicyList items={subsection.listItems} />}
						</div>
					))}

					{trailing.length > 0 && (
						<div className="space-y-4">
							{trailing.map((paragraph) => (
								<p key={paragraph} className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
									{paragraph}
								</p>
							))}
						</div>
					)}
				</div>
			</div>
		</Reveal>
	);
}
