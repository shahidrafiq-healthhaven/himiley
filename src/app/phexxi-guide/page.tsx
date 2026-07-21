import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
const FAQS = [
  {
    q: "What is Phexxi?",
    a: "Phexxi, now called Phexx, is a hormone-free vaginal gel birth control used before intercourse. It is an on-demand contraceptive method rather than a daily pill or long-term device.",
  },
  {
    q: "How does Phexxi work?",
    a: "Phexxi works by maintaining vaginal pH in a way that makes it harder for sperm to move effectively toward an egg. It is used before intercourse and starts working immediately after insertion.",
  },
  {
    q: "How do I use Phexxi?",
    a: "Phexxi is inserted into the vagina using a prefilled applicator. One dose is used before intercourse, and a new dose is needed for each act of vaginal sex.",
  },
  {
    q: "When do I use Phexxi?",
    a: "Phexxi should be used immediately before or up to one hour before vaginal intercourse. If more than one hour passes, another dose is needed before sex.",
  },
  {
    q: "How often do I need to apply Phexxi?",
    a: "You should use one applicator before each act of vaginal intercourse. A new dose is required every time.",
  },
  { q: "Is Phexxi hormone free?", a: "Yes. Phexxi is a hormone-free birth control option. It does not contain estrogen or progestin." },
  {
    q: "Who is Phexxi best suited for?",
    a: "Phexxi may be suited for women seeking non hormonal contraception, flexibility, and an alternative to daily or long-term birth control methods.",
  },
  {
    q: "Does Phexxi protect against STIs?",
    a: "No. Phexxi does not protect against sexually transmitted infections. Condoms may be used for additional protection.",
  },
  {
    q: "Do I need a prescription for Phexxi?",
    a: "Yes. Phexxi is a prescription birth control option. A licensed clinician reviews your medical history before prescribing.",
  },
  {
    q: "Can I get Phexxi online?",
    a: "Yes. You can complete an online birth control consultation through Miley Health. A licensed provider reviews your information and prescribes Phexxi if appropriate.",
  },
];

export default function PhexxiGuidePage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#CFE0EF] via-[#E7EEF3] to-[#FBEFE9] py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-[#111111] tracking-tight mb-6">What Is Phexxi?</h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-[14px] sm:text-[16px] text-[#333333] leading-relaxed max-w-[820px] mb-4">
              Phexxi, now called Phexx, is{" "}
              <span className="font-semibold">the first and only hormone-free prescription birth control gel</span> used on demand before
              sex. Unlike daily pills or long-term devices, Phexx is{" "}
              <span className="font-semibold">used only when needed</span>, offering a flexible option for women exploring non-hormonal
              contraception.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-[14px] sm:text-[16px] text-[#333333] leading-relaxed max-w-[820px]">
              This guide explains what Phexxi is, how it works, who it may suit, and how to get started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-8">
              Who Is It For?
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
              Phexxi is an <span className="text-[#9D174D] font-semibold">on-demand birth control method</span> used right before
              intercourse. It works by <span className="text-[#9D174D] font-semibold">maintaining vaginal pH</span> in a way that makes
              it harder for sperm to move toward an egg.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
              This mechanism helps reduce the chances of pregnancy without using hormones.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-2">Here is how Phexx works in practice:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-4">
              <li>
                It is inserted into the vagina using a <span className="text-[#9D174D] font-semibold">prefilled applicator</span>
              </li>
              <li>
                It can be used <span className="text-[#9D174D] font-semibold">up to 1 hour before intercourse</span>
              </li>
              <li>
                It <span className="text-[#9D174D] font-semibold">starts working immediately</span> after insertion
              </li>
              <li>
                <span className="text-[#9D174D] font-semibold">It does not work if used after sex</span>
              </li>
              <li>
                A <span className="text-[#9D174D] font-semibold">new dose is required</span> before each act of vaginal sex
              </li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
              Because Phexx is used only when needed, it may appeal to women who prefer flexibility over daily or long-term
              contraception.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-2">Many women consider Phexx because:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-4">
              <li>There is no daily pill to remember</li>
              <li>There is no long-term device</li>
              <li>It is used only when needed</li>
              <li>It is a hormone-free prescription option</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
              This format offers a different approach compared to traditional birth control methods.
            </p>
          </Reveal>

          <Reveal direction="right" className="hidden lg:flex flex-col gap-6 items-center">
            <div className="relative w-[140px] h-[140px]">
              <Image src="/images/prep 1.png" alt="Insert applicator" fill className="object-contain" />
            </div>
            <div className="relative w-[140px] h-[140px]">
              <Image src="/images/push 1.png" alt="Apply gel" fill className="object-contain" />
            </div>
            <div className="relative w-[140px] h-[140px]">
              <Image src="/images/prevent 1.png" alt="Remove applicator" fill className="object-contain" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Second Who Is It For block (pink) — duplicated heading preserved as on the live site */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="right">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight">Who Is It For?</h2>
          </Reveal>
          <Reveal direction="left" className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed space-y-3">
            <p>
              Phexxi may be a good option for women who want{" "}
              <span className="text-[#9D174D] font-semibold">more flexibility and control</span> over their contraception.
            </p>
            <p>It may appeal to women looking for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A hormone-free birth control option</li>
              <li>An alternative to daily birth control pills</li>
              <li>A non-permanent option instead of a long-term device</li>
              <li>More flexibility around when birth control is used</li>
              <li>A prescription method used right before sex</li>
            </ul>
            <p>
              However, Phexxi is not right for everyone. Women with a{" "}
              <span className="text-[#9D174D] font-semibold">history of recurrent urinary tract infections</span> or certain urinary
              tract abnormalities may need to avoid it.
            </p>
            <p>
              Before prescribing Phexx, a{" "}
              <span className="text-[#9D174D] font-semibold">licensed Miley Health clinician reviews each patient&rsquo;s consultation and medical history</span>
              . This helps determine whether Phexx is appropriate for individual needs
            </p>
          </Reveal>
        </div>
      </section>

      {/* Step by step guide */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left" className="flex flex-col items-center">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-6 self-start">
              How to Use Phexxi: A Step-by-Step Guide
            </h2>
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
              <Image src="/images/guide-woman-questions.png" alt="Woman holding two Phexx applicators" fill className="object-contain" />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] mb-6">Using Phexxi is straightforward. Follow these steps:</p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] mb-3">Step-by-Step Instructions</h3>
            <ol className="list-decimal pl-5 space-y-1 text-[14px] sm:text-[15px] text-[#4A4A4A] mb-6">
              <li>Wash your hands before use</li>
              <li>Remove the prefilled applicator and plunger from the pouch</li>
              <li>Insert the plunger into the applicator</li>
              <li>Remove the cap from the applicator</li>
              <li>Gently insert the applicator into the vagina as far as comfortable</li>
              <li>Push the plunger to release the gel</li>
              <li>Remove and discard the used applicator</li>
            </ol>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] mb-3">Timing and Dosing Rules</h3>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[15px] text-[#4A4A4A] mb-6">
              <li>
                Use <span className="text-[#9D174D] font-semibold">one dose immediately before or up to 1 hour before sex</span>
              </li>
              <li>Phexx works right away after insertion</li>
              <li>
                <span className="text-[#9D174D] font-semibold">It does not work if used after sex</span>
              </li>
              <li>A new applicator is needed for each act of vaginal sex</li>
              <li>
                If one hour passes before sex, <span className="text-[#9D174D] font-semibold">use a new dose</span>
              </li>
            </ul>
            <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
              These instructions help ensure Phexx is used effectively and as intended.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
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
        <Reveal direction="up" className="relative z-10 max-w-[1200px] mx-auto lg:h-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 py-12 pb-16 sm:pb-16 lg:py-0 lg:pb-16">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight max-w-[420px]">
            How to Get Phexxi Through Miley Health
          </h2>
          <div className="max-w-[440px]">
            <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed mb-6">
              Getting Phexx through Miley Health is simple and private. Start by completing a short online medical questionnaire. A
              licensed provider reviews your consultation and determines whether Phexx is appropriate.
              <br />
              If approved, a prescription is issued and sent for fulfillment. The process is secure, confidential, and convenient, with
              direct delivery to your door when available.
              <br />
              Get started today with Miley Health to see if Phexx is right for you.
            </p>
            <Cta />
          </div>
        </Reveal>
      </section>

      <Footer variant="subpage" />
    </div>
  );
}
