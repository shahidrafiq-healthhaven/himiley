"use client";

import { useState } from "react";
import { Building2, Check, Copy, Mail, MapPin } from "lucide-react";
import type { ContactSectionData, PolicyAnimation } from "@/types/policy";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface ContactCardProps {
	contact: ContactSectionData;
}

const ANIMATION_TO_DIRECTION: Record<PolicyAnimation, "up" | "left" | "right" | "scale"> = {
	fadeUp: "up",
	slideLeft: "left",
	slideRight: "right",
	scaleIn: "scale",
	blurReveal: "up",
};

async function copyText(text: string) {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}

export function ContactCard({ contact }: ContactCardProps) {
	const [copiedField, setCopiedField] = useState<string | null>(null);

	const fullAddress = `${contact.address}, ${contact.city}`;

	const handleCopy = async (field: string, text: string) => {
		const success = await copyText(text);
		if (success) {
			setCopiedField(field);
			window.setTimeout(() => setCopiedField(null), 2000);
		}
	};

	return (
		<Reveal
			as="section"
			id={contact.id}
			direction={ANIMATION_TO_DIRECTION[contact.animation]}
			className={cn(
				"card-interactive group relative scroll-mt-[120px] overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_8px_40px_rgba(17,17,17,0.06)] sm:p-8 lg:p-10",
				"hover:border-miley-burgundy/20",
			)}>
			<div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-miley-pink/10 blur-2xl" />

			<div className="relative space-y-6">
				<div className="space-y-3">
					<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-miley-burgundy">{contact.label}</p>
					<h2 className="text-[28px] font-bold text-[#111111] sm:text-[36px]">{contact.title}</h2>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className="card-interactive flex items-start gap-4 rounded-xl border border-white/80 bg-white/60 p-4">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-miley-blush/60 text-miley-burgundy">
							<Building2 className="h-5 w-5" />
						</div>
						<div>
							<p className="text-[13px] font-semibold uppercase tracking-wide text-[#888888]">Company</p>
							<p className="mt-1 text-[16px] text-[#333333]">{contact.company}</p>
							<p className="text-[15px] text-[#555555]">{contact.careOf}</p>
						</div>
					</div>

					<div className="card-interactive flex items-start gap-4 rounded-xl border border-white/80 bg-white/60 p-4">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-miley-blush/60 text-miley-burgundy">
							<MapPin className="h-5 w-5" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-[13px] font-semibold uppercase tracking-wide text-[#888888]">Address</p>
							<p className="mt-1 text-[16px] text-[#333333]">{contact.address}</p>
							<p className="text-[15px] text-[#555555]">{contact.city}</p>
						</div>
						<button
							type="button"
							onClick={() => handleCopy("address", fullAddress)}
							aria-label="Copy address"
							className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E0E0E0] text-[#666666] transition-colors hover:border-miley-burgundy/30 hover:text-miley-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy">
							{copiedField === "address" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
						</button>
					</div>

					<div className="card-interactive flex items-start gap-4 rounded-xl border border-white/80 bg-white/60 p-4 lg:col-span-1">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-miley-blush/60 text-miley-burgundy">
							<Mail className="h-5 w-5" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-[13px] font-semibold uppercase tracking-wide text-[#888888]">Email</p>
							<a
								href={`mailto:${contact.email}`}
								className="mt-1 inline-block text-[16px] text-miley-burgundy underline underline-offset-2 transition-colors hover:text-[#83103F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy">
								{contact.email}
							</a>
						</div>
						<button
							type="button"
							onClick={() => handleCopy("email", contact.email)}
							aria-label="Copy email"
							className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E0E0E0] text-[#666666] transition-colors hover:border-miley-burgundy/30 hover:text-miley-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-miley-burgundy">
							{copiedField === "email" ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
						</button>
					</div>
				</div>

				{contact.closingParagraph && <p className="w-full text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">{contact.closingParagraph}</p>}

				{copiedField && (
					<p className="text-[13px] font-medium text-miley-burgundy" role="status">
						Copied to clipboard
					</p>
				)}
			</div>
		</Reveal>
	);
}
