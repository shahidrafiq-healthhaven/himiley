import type { Metadata } from "next";
import { TermsPageExperience } from "@/components/terms/TermsPageExperience";

export const metadata: Metadata = {
	title: "Terms of Use | Miley Health",
	description:
		"Read the Terms of Use and Telehealth Informed Consent governing your access to Miley Health services, telehealth consultations, and pharmacy offerings.",
};

export default function TermsPage() {
	return <TermsPageExperience />;
}
