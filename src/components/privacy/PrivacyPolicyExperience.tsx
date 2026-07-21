"use client";

import { contactSection, privacySections, trailingParagraphs } from "@/data/privacy-sections";
import { PolicyPageExperience } from "./PolicyPageExperience";

export function PrivacyPolicyExperience() {
	return (
		<PolicyPageExperience
			accentLabel="Legal & Privacy"
			title="Privacy Policy"
			sections={privacySections}
			contact={contactSection}
			trailingParagraphs={trailingParagraphs}
		/>
	);
}
