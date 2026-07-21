import type { Metadata } from "next";
import { PrivacyPolicyExperience } from "@/components/privacy/PrivacyPolicyExperience";

export const metadata: Metadata = {
	title: "Privacy Policy | Miley Health",
	description:
		"Learn how Miley Health collects, uses, and protects your personal and health information when you use our healthcare and telehealth services.",
};

export default function PrivacyPage() {
	return <PrivacyPolicyExperience />;
}
