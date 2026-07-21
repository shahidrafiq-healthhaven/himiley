"use client";

import Footer from "@/components/layout/Footer";
import type { ContactSectionData, PolicySection } from "@/types/policy";
import { ContactCard } from "./ContactCard";
import { PolicyHero } from "./PolicyHero";
import { PolicySectionCard } from "./PolicySectionCard";
import { PrivacyBackground } from "./PrivacyBackground";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { SectionDivider } from "./SectionDivider";

interface PolicyPageExperienceProps {
	accentLabel: string;
	title: string;
	sections: PolicySection[];
	contact: ContactSectionData;
	trailingParagraphs?: Record<string, string[]>;
}

export function PolicyPageExperience({ accentLabel, title, sections, contact, trailingParagraphs = {} }: PolicyPageExperienceProps) {
	return (
		<div className="relative flex w-full flex-col overflow-x-clip font-inter">
			<PrivacyBackground />
			<ReadingProgressBar />
			<PolicyHero accentLabel={accentLabel} title={title} />

			<div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-10">
				<main className="w-full space-y-8">
					{sections.map((section, index) => (
						<div key={section.id} className="space-y-8">
							<PolicySectionCard section={section} trailingParagraphs={trailingParagraphs} />
							{index < sections.length - 1 && <SectionDivider variant={index % 2 === 0 ? "gradient" : "fade"} />}
						</div>
					))}

					<SectionDivider variant="gradient" />
					<ContactCard contact={contact} />
				</main>
			</div>

			<Footer variant="subpage" />
		</div>
	);
}
