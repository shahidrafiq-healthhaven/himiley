import type { LucideIcon } from "lucide-react";

export type PolicyAnimation = "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "blurReveal";

export type PolicySubsection = {
	title: string;
	intro?: string;
	paragraphs?: string[];
	listItems?: string[];
};

export type PolicySection = {
	id: string;
	label: string;
	title: string;
	icon: LucideIcon;
	animation: PolicyAnimation;
	paragraphs?: string[];
	listIntro?: string;
	listItems?: string[];
	subsections?: PolicySubsection[];
	linkParagraph?: string;
};

export type ContactSectionData = {
	id: string;
	label: string;
	title: string;
	animation: PolicyAnimation;
	company: string;
	careOf: string;
	address: string;
	city: string;
	email: string;
	closingParagraph?: string;
};
