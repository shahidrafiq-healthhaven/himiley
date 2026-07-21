"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const FEATURES = [
  "No daily pill to remember",
  "On-demand flexibility",
  "Used only when needed",
  "Prescription, hormone-free option",
  "No long-term device or placement",
];

const FAQS = [
  {
    q: "What is Phexxi birth control?",
    a: "Phexxi birth control, now called Phexx, is a prescription hormone-free vaginal gel used before intercourse to help prevent pregnancy. It is an on-demand contraceptive option rather than a daily or long-term birth control method.",
  },
  {
    q: "Is Phexxi the same as Phexx?",
    a: "Yes. Phexxi is now called Phexx. The formulation, how it works, and how it is used remain the same. Only the name has changed.",
  },
  {
    q: "How does Phexxi birth control work?",
    a: "Phexx helps maintain an acidic vaginal environment. This makes it harder for sperm to move effectively and reach an egg. It is used before intercourse and works right away once inserted.",
  },
  {
    q: "Is Phexxi hormone free?",
    a: "Yes. Phexx is a hormone-free birth control option. It does not contain estrogen or progestin, which makes it appealing for women looking for birth control without hormones.",
  },
  {
    q: "When do you use Phexxi?",
    a: "Phexx is used right before vaginal intercourse, up to one hour beforehand. A new dose is required for each act of vaginal sex",
  },
  {
    q: "Is Phexxi effective?",
    a: "Phexx is about 86 percent effective with typical use. Effectiveness may increase when used consistently and when combined with condoms for added pregnancy protection.",
  },
  {
    q: "Can Phexxi be used with condoms?",
    a: "Yes. Phexx can be used with condoms. This may provide additional pregnancy prevention and protection against sexually transmitted infections.",
  },
  {
    q: "Do you need a prescription for Phexxi?",
    a: "Yes. Phexx is a prescription birth control option. A licensed clinician must review your medical history to determine whether it is appropriate.",
  },
  {
    q: "Can I get Phexxi online?",
    a: "Yes. You can complete an online birth control consultation through Miley Health. A licensed clinician reviews your information and can prescribe Phexx if appropriate.",
  },
  {
    q: "Who should not use Phexxi?",
    a: "Phexx may not be suitable for women with recurrent urinary tract infections or certain urinary conditions. A Miley Health clinician reviews each patient's medical history before prescribing.",
  },
];

const CTA_CLASS =
  "btn-interactive group inline-flex w-fit items-center justify-center gap-2 bg-[#9D174D] text-white px-8 py-4 rounded-sm font-semibold text-[15px] shadow-md hover:bg-[#83103F]";

function Cta({ children = "Request Phexx Prescription" }: { children?: string }) {
  return (
    <Link href="/#medical-information-form" className={CTA_CLASS}>
      {children}
      <span className="text-xl transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
    </Link>
  );
}

export default function PhexxibirthcontrolPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-[#FCE8EB] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#111111] tracking-tight max-w-[820px] mb-6">
              What Is Phexxi Birth Control?
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-[15px] sm:text-[17px] text-[#4A4A4A] leading-relaxed max-w-[760px] mb-8">
              Phexxi birth control, now called Phexx, is a prescription, hormone-free vaginal gel used right before intercourse to help
              prevent pregnancy. It is not a pill, device, or long-term birth control method. Instead, it is an on-demand option used only
              when needed.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <Cta />
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 text-center">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">How It Works</h2>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="space-y-5 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed text-left sm:text-center">
            <p>
              Phexx, previously known as Phexxi birth control, is designed to be used right before sex, not every day. This makes it
              different from many traditional birth control options that require a daily routine or long-term commitment.
            </p>
            <p>
              Phexx works by helping maintain the vagina&rsquo;s{" "}
              <span className="text-[#9D174D] font-semibold">natural acidic environment</span>. This acidic environment makes it harder
              for sperm to move effectively, which reduces the chances of sperm reaching an egg and causing pregnancy.
            </p>
            <p>
              The gel is inserted into the vagina using a{" "}
              <span className="text-[#9D174D] font-semibold">prefilled applicator</span>. It can be used up to one hour before
              intercourse. Once inserted, it{" "}
              <span className="text-[#9D174D] font-semibold">starts working right away</span>. However, it must be used before sex, not
              after.
            </p>
            <p>
              If vaginal intercourse happens more than once, a{" "}
              <span className="text-[#9D174D] font-semibold">new dose must be used each time</span>. This is important because the
              protection only applies to each individual act of vaginal sex.
            </p>
            <p>
              Many women find this approach appealing because it offers flexibility and control. Instead of taking a pill daily or using
              a long-term device, Phexx is used only when needed.
            </p>
          </Reveal>

          <Reveal direction="up">
            <p className="text-[15px] sm:text-[16px] font-bold text-[#111111] mt-10 mb-6">Key features of Phexx birth control include:</p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {FEATURES.map((f) => (
              <StaggerItem
                key={f}
                className="card-interactive bg-[#FCE8EB] rounded-sm px-4 py-6 flex items-center justify-center text-center min-h-[90px]"
              >
                <span className="text-[13px] font-semibold text-[#111111]">{f}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal direction="up" className="space-y-5 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed text-left sm:text-center mt-10">
            <p>
              Because it does not contain hormones, Phexx may be a helpful option for women who prefer{" "}
              <span className="text-[#9D174D] font-semibold">birth control without hormones</span>. Some women choose hormone-free birth
              control due to personal preference, medical considerations, or concerns about hormonal side effects.
            </p>
            <p>
              Phexx is also different from over-the-counter spermicides. It does not contain{" "}
              <span className="text-[#9D174D] font-semibold">nonoxynol-9</span>, an ingredient that some individuals find irritating.
            </p>
            <p>
              This combination of{" "}
              <span className="text-[#9D174D] font-semibold">on-demand use, hormone-free formulation, and prescription access</span>{" "}
              makes Phexx a unique option in the birth control landscape.
            </p>
          </Reveal>

          <div className="flex justify-center mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-6">Who Is It For?</h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-5">
              Phexx birth control may be a good fit for women who want flexibility and control over when they use contraception.
            </p>
            <p className="text-[14px] sm:text-[16px] font-semibold text-[#9D174D] mb-2">This option may appeal to women looking for:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-5">
              <li>A hormone-free birth control option</li>
              <li>An alternative to daily birth control pills</li>
              <li>A non-device option</li>
              <li>A prescription used only when needed</li>
              <li>More control over when birth control is used</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-5">
              Phexx may also be helpful for women who do not want to commit to long-term methods such as intrauterine devices or
              implants.
            </p>
            <p className="text-[14px] sm:text-[16px] leading-relaxed mb-2">
              <span className="text-[#9D174D] font-semibold">However, Phexx is not right for everyone.</span> Some women should not use
              Phexx, including those with:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-6">
              <li>A history of recurrent urinary tract infections</li>
              <li>Certain urinary tract abnormalities</li>
              <li>Specific medical conditions identified by a clinician</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-2">
              Before prescribing Phexx, a licensed Miley Health clinician reviews each patient&rsquo;s consultation and medical history.
              This ensures that the medication is appropriate and safe for the individual.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              This clinical review helps patients make informed decisions and receive the right birth control option for their needs.
            </p>
            <Cta />
          </Reveal>

          <Reveal direction="right" className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full overflow-visible">
            <Image
              src="/images/Gemini_Generated_Image_61ju2w61ju2w61ju (1) 1.png"
              alt="Woman holding Phexx applicator"
              fill
              className="object-contain object-center"
            />
          </Reveal>
        </div>
      </section>

      {/* Where Phexx Fits */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-6">
              Where Phexx Fits in the Birth Control Landscape
            </h2>
            <div className="img-zoom relative w-full max-w-[340px] h-[340px] sm:h-[420px]">
              <Image src="/images/Group 1171276454.png" alt="Phexx applicator" fill className="object-contain rounded-sm" />
            </div>
          </Reveal>

          <Reveal direction="right" className="space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              Phexx is a distinct option within non-hormonal birth control. It is currently the{" "}
              <span className="text-[#9D174D] font-semibold">first and only hormone-free prescription birth control gel</span> used on
              demand before sex.
            </p>
            <p>Many birth control options fall into two main categories:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Daily or hormonal methods such as pills, patches, or rings</li>
              <li>Long-term methods such as IUDs or implants</li>
            </ul>
            <p>
              Phexx sits between these categories. It offers more flexibility than long-term methods and more clinical support than
              over-the-counter options.
            </p>
            <p>Here is how Phexx compares with other non-hormonal options:</p>

            <p className="font-bold text-[#9D174D] pt-2">Compared to Over the Counter Spermicides</p>
            <p>
              Phexx is more effective than traditional spermicides. Typical use effectiveness for Phexx is about 86 percent, compared to
              roughly 70 to 80 percent for many over-the-counter spermicides.
            </p>

            <p className="font-bold text-[#9D174D] pt-2">Compared to Condoms</p>
            <p>
              Phexx can be used with condoms for additional pregnancy protection. Condoms also help protect against sexually transmitted
              infections, which Phexx does not.
            </p>

            <p className="font-bold text-[#9D174D] pt-2">Compared to Copper IUD</p>
            <p>
              The copper IUD is more effective overall. However, Phexx offers greater control and flexibility since it is used only when
              needed rather than remaining in place for years.
            </p>

            <p className="font-bold text-[#9D174D] pt-2">Compared to Hormonal Methods</p>
            <p>
              Phexx does not contain hormones. This may appeal to women seeking non hormonal contraception or birth control without
              hormones.
            </p>

            <p>Because of this positioning, Phexx is often considered a middle-ground option. It provides:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>More flexibility than long-term birth control</li>
              <li>More structure than over-the-counter options</li>
              <li>A hormone-free prescription alternative</li>
            </ul>
            <p>
              For women seeking a vaginal gel birth control option that fits their lifestyle, Phexx offers a different approach.
            </p>

            <div className="pt-4">
              <Cta />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-semibold text-[#111111] text-center mb-8">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <FaqAccordion items={FAQS} defaultOpenIndex={0} />
          </Reveal>
        </div>
      </section>

      {/* Image CTA Banner */}
      <section className="w-full relative min-h-[420px] sm:min-h-[440px] lg:h-[500px] overflow-hidden">
        <Image src="/images/Rectangle 34624318.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <Reveal direction="up" className="relative z-10 max-w-[1200px] mx-auto lg:h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end py-12 pb-16 sm:pb-16 lg:py-0 lg:pb-16">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight max-w-[520px] mb-4">
            How to Get Phexxi Birth Control Through Miley Health
          </h2>
          <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed max-w-[480px] mb-6">
            Getting Phexx through Miley Health is simple and convenient. Start by completing a secure online medical questionnaire. A
            licensed clinician then reviews your consultation and medical history to determine whether Phexx is appropriate.
            <br />
            If approved, your prescription can be sent to a pharmacy for fulfillment.
            <br />
            Get started today with Miley Health and see if Phexx is right for you.
          </p>
          <Cta />
        </Reveal>
      </section>

      <Footer variant="subpage" />
    </div>
  );
}
