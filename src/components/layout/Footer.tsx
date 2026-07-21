import Image from "next/image";
import Link from "next/link";

type FooterVariant = "home" | "subpage";

interface FooterProps {
	variant?: FooterVariant;
}

function navHref(variant: FooterVariant, anchor: string) {
	return variant === "home" ? `#${anchor}` : `/#${anchor}`;
}

const linkClass = "hover:text-white hover:underline underline-offset-4 transition-colors duration-200";

export default function Footer({ variant = "home" }: FooterProps) {
	return (
		<section className="w-full bg-white border-t border-[#E0E0E0]">
			<div className="w-full h-[3px] bg-[#FF2F92]" />

			<div id="safety" className="w-full bg-[#333333]">
				<div className="max-w-[900px] mx-auto px-6 lg:px-0 pb-14 pt-8 text-center text-[12px] text-[#E5E5E5] space-y-6">
					<div className="space-y-3">
						<p>
							Miley is a women&apos;s health platform powered by
							<br />
							Haven Rx licensed pharmacy infrastructure.
						</p>
						<button className="inline-flex items-center justify-center px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-full bg-[#FF2F92] text-white hover:bg-[#E0217F] hover:scale-[1.05] active:scale-[0.97] transition-all duration-200">
							Important Safety Information
						</button>
					</div>

					<div className="space-y-2 leading-relaxed">
						<p>
							Rare cases (0.36%) of bladder and kidney infections have been reported. If you have a history of urinary tract infections that keep coming back, talk to your doctor about Phexxi.
						</p>
						<p>
							Contact your healthcare provider if you are experiencing genitourinary side effects such as: vaginal burning, itching, dysuria, genital discomfort including vulvar or perineal pain,
							yeast infections, urinary tract infection or bacterial vaginosis.
						</p>
						<p>Phexxi does not protect against sexually transmitted infections, including HIV. Avoid using Phexxi with a vaginal ring.</p>
						<p>
							Avoid Phexxi if you or your sexual partner is allergic to lactic acid, citric acid, potassium bitartrate, or any of the ingredients in Phexxi. Stop using Phexxi if you develop an
							allergic reaction.
						</p>
					</div>

					<div className="border-t border-[#555555] pt-8" />

					<div className="flex items-center justify-center gap-6">
						<a
							href="https://www.instagram.com/miley_health?igsh=MXBmeW9iaDUwZWhxYg%3D%3D&utm_source=qr"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="relative w-5 h-5 transition-transform duration-200 hover:scale-[1.2]">
							<Image src="/images/Vector (3).png" alt="Instagram" fill className="object-contain" />
						</a>
						<a
							href="https://www.tiktok.com/@miley_health"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="TikTok"
							className="relative w-5 h-5 transition-transform duration-200 hover:scale-[1.2]">
							<Image src="/images/Vector (4).png" alt="TikTok" fill className="object-contain" />
						</a>
						<a
							href="https://www.facebook.com/share/1DUTBzdZjB/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"
							className="relative w-5 h-5 transition-transform duration-200 hover:scale-[1.2]">
							<Image src="/images/Vector (6).png" alt="Facebook" fill className="object-contain" />
						</a>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#E5E5E5]">
						<Link href={navHref(variant, "how-it-works")} className={linkClass}>
							How it Works
						</Link>
						<Link href={navHref(variant, "about-phexx")} className={linkClass}>
							About Phexx
						</Link>
						<Link href={navHref(variant, "safety")} className={linkClass}>
							Safety
						</Link>
						<Link href={navHref(variant, "faq")} className={linkClass}>
							FAQ
						</Link>
						<Link href="/terms" className={linkClass}>
							Terms &amp; Conditions
						</Link>
						<Link href={navHref(variant, "safety")} className={linkClass}>
							Safety Information
						</Link>
						<Link href="/privacy" className={linkClass}>
							Privacy Policy
						</Link>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#E5E5E5]">
						<Link href="/phexxibirthcontrol" className={linkClass}>
							Phexxi Birth Control
						</Link>
						<Link href="/phexxi-cost" className={linkClass}>
							Phexxi Cost
						</Link>
						<Link href="/phexxi-guide" className={linkClass}>
							Phexxi Guide
						</Link>
						<Link href="/phexxi-side-effects" className={linkClass}>
							Phexxi Side Effects
						</Link>
					</div>

					<div className="pt-2 text-[11px] text-[#CCCCCC] space-x-2">
						<span>© 2026 Haven Rx, Inc.•</span>
						<a href="https://miley.healthhavenrx.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
							Miley.healthheaven
						</a>
						<span>•</span>
						<span>January 2026</span>
					</div>

					<div className="flex items-center justify-between pt-6 w-full">
						<a
							href="https://www.legitscript.com/websites/?checker_keywords=healthhavenrx.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Verify LegitScript Approval for www.healthhavenrx.com"
							className="inline-flex transition-transform duration-200 hover:scale-[1.06]">
							<Image src="/images/legitscript-certified.webp" alt="LegitScript Certified" width={73} height={79} />
						</a>
						<div className="flex items-center justify-center gap-3">
							<div className="relative w-[100px] h-[38px]">
								<Image src="/images/lg.png" alt="Miley" fill className="object-contain object-right" />
							</div>

							<div className="h-[32px] w-px bg-[#E5E5E5]/60" />

							<div className="flex flex-col items-start gap-0.5">
								<div className="relative w-[62px] h-[14px]">
									<Image src="/images/Powered by.png" alt="Powered by" fill className="object-contain object-left" />
								</div>
								<div className="relative w-[80px] h-[16px]">
									<Image src="/images/Group 1171276431.png" alt="Haven Rx" fill className="object-contain object-left" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
