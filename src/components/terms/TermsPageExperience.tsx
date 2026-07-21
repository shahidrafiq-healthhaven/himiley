"use client";

import { termsContactSection, termsSections, termsTrailingParagraphs } from "@/data/terms-sections";
import { PolicyPageExperience } from "@/components/privacy/PolicyPageExperience";

export function TermsPageExperience() {
	return (
		<PolicyPageExperience
			accentLabel="Legal & Terms"
			title="Terms of Use and Telehealth Informed Consent"
			sections={termsSections}
			contact={termsContactSection}
			trailingParagraphs={termsTrailingParagraphs}
		/>
	);
}
