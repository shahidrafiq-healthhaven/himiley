import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AutoRedirectHome from "./AutoRedirectHome";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

export default async function ThankYouPage() {
	const cookieStore = await cookies();
	const hasAccess = cookieStore.get("thank_you_access")?.value === "1";
	if (!hasAccess) {
		redirect("/");
	}

	return (
		<div className="flex flex-col w-full font-inter overflow-x-clip bg-white">
			<AutoRedirectHome />
			<section className="w-full bg-[#FCE8EB] py-20 sm:py-24">
				<div className="max-w-[900px] mx-auto px-6 text-center space-y-6">
					<Reveal direction="scale">
						<h1 className="text-[34px] sm:text-[46px] font-semibold text-[#111111] tracking-tight">Thank you!</h1>
					</Reveal>
					<Reveal direction="up" delay={0.1}>
						<p className="text-[16px] sm:text-[18px] text-[#555555] leading-relaxed max-w-[640px] mx-auto">
							Your form was submitted successfully. Care team will review your information and reach out soon.
						</p>
					</Reveal>
					<Reveal direction="up" delay={0.15}>
						<p className="text-[14px] text-[#7A7A7A]">You will be redirected to the home page in 10 seconds.</p>
					</Reveal>
					<Reveal direction="up" delay={0.2} className="pt-2">
						<Link
							href="/"
							className="btn-interactive inline-flex items-center justify-center bg-[#9D174D] text-white px-8 py-3 rounded-sm font-semibold text-[14px] hover:bg-[#7E0F3E]"
						>
							Back to Home
						</Link>
					</Reveal>
				</div>
			</section>

			<Footer variant="subpage" />
		</div>
	);
}
