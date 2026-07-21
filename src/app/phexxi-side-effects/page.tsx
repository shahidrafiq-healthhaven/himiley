import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";

const FAQS = [
  {
    q: "What are the most common side effects of Phexxi?",
    a: "Common Phexxi side effects include vaginal burning, itching, discharge, yeast infection, urinary tract infection, and bacterial vaginosis. These symptoms are typically mild and occur locally in the vaginal area.",
  },
  {
    q: "Can Phexxi cause burning or itching?",
    a: "Yes. Vaginal burning or itching are among the most commonly reported side effects of Phexxi. These symptoms are usually mild and temporary but should be discussed with a healthcare provider if persistent.",
  },
  {
    q: "Can Phexxi affect a male partner?",
    a: "Some male partners may experience mild genital discomfort during intercourse after Phexxi is used. This is typically temporary and not experienced by everyone.",
  },
  {
    q: "Can Phexxi cause urinary tract infections?",
    a: "Urinary tract infections have been reported with Phexxi use. Rare cases of bladder or kidney infections have also occurred. Contact a healthcare provider if you experience symptoms such as burning with urination or pelvic pain.",
  },
  {
    q: "Can Phexxi cause yeast infections?",
    a: "Yes. Yeast infections are a reported side effect of Phexxi. Symptoms may include itching, irritation, or unusual discharge. A healthcare provider can help determine whether symptoms are related to the gel.",
  },
  {
    q: "When should I contact a healthcare provider about side effects?",
    a: "Contact a healthcare provider if symptoms are persistent, worsening, or uncomfortable. Seek prompt care if you experience signs of infection, allergic reaction, or severe irritation.",
  },
  {
    q: "Who should avoid using Phexxi?",
    a: "Individuals with recurrent urinary tract infections, allergies to ingredients, or those using vaginal ring contraceptives should avoid Phexxi. A licensed clinician reviews eligibility before prescribing.",
  },
  {
    q: "Does Phexxi protect against STIs?",
    a: "No. Phexxi does not protect against sexually transmitted infections. Condoms may be used alongside Phexxi for additional protection.",
  },
  {
    q: "Are Phexxi side effects permanent?",
    a: "Most Phexxi side effects are temporary and resolve after stopping use. If symptoms continue, a clinician can evaluate whether another birth control option is more appropriate.",
  },
  {
    q: "Is Phexxi safe for long term use?",
    a: "Phexxi is designed for on-demand use rather than daily use. A healthcare provider can help determine whether long-term use is appropriate based on your medical history.",
  },
];

export default function PhexxiSideEffectsPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#FCE8EB] to-[#FDEDE3] py-14 sm:py-20 border-b-2 border-dashed border-[#9D174D]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal direction="up">
            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#111111] tracking-tight mb-5">
              Common Side Effects of Phexxi
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Phexxi, now called <span className="font-semibold">Phexx</span>, is a prescription, hormone-free vaginal gel used before
              intercourse to help prevent pregnancy. Like any medication, it may cause side effects in some individuals. Most side
              effects are <span className="font-semibold">mild to moderate</span> and occur locally in the vaginal area.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] mb-2">Commonly reported Phexxi side effects include:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-4">
              <li>Vaginal burning or itching</li>
              <li>Vaginal discharge</li>
              <li>Genital discomfort, including in male partners</li>
              <li>Yeast infection</li>
              <li>Urinary tract infection</li>
              <li>Bacterial vaginosis</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Some users may also experience mild irritation or discomfort shortly after using the gel. These symptoms are typically
              temporary and may resolve on their own.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Urinary tract infections have also been reported. In rare cases,{" "}
              <span className="font-semibold">bladder or kidney infections (approximately 0.36%)</span> have occurred. While these are
              uncommon, it is important to recognize symptoms early and contact a healthcare provider if they develop.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Not everyone experiences side effects. Many individuals tolerate Phexx well, especially when used as directed.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              If you experience side effects or are unsure whether Phexx is a good fit for you, a{" "}
              <span className="font-semibold">licensed Miley Health clinician</span> can help evaluate your symptoms and recommend next
              steps
            </p>
            <Cta />
          </Reveal>

          <Reveal direction="right" className="relative w-full h-[360px] lg:h-[500px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain object-center" />
          </Reveal>
        </div>
      </section>

      {/* Who Should Not Use */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 text-center">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
              Who Should Not Use Phexxi
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="text-left space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              Phexxi may not be appropriate for everyone. Certain individuals should avoid using this medication due to increased risk
              of side effects or potential complications.
            </p>
            <p>You should not use Phexx if you have:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                A history of <span className="text-[#9D174D] font-semibold">recurrent urinary tract infections</span>
              </li>
              <li>
                Known allergy to <span className="text-[#9D174D] font-semibold">lactic acid, citric acid, potassium bitartrate</span>, or
                other ingredients in the gel
              </li>
              <li>
                Current use of a <span className="text-[#9D174D] font-semibold">vaginal ring contraceptive</span>
              </li>
            </ul>
            <p>Using Phexx alongside a vaginal ring has not been studied and is not recommended.</p>
            <p>
              It is important not to self-diagnose eligibility. Personal health history, symptoms, and risk factors all play a role in
              determining whether Phexx is appropriate.
            </p>
            <p>
              A <span className="text-[#9D174D] font-semibold">licensed Miley Health clinician</span> reviews each patient&rsquo;s
              consultation details and health history before prescribing Phexx. This ensures the medication is both safe and appropriate
              for your individual needs.
            </p>
          </Reveal>
          <div className="flex justify-center mt-8">
            <Cta />
          </div>
        </div>
      </section>

      {/* How to Manage Side Effects */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-6">
              How to Manage Side Effects
            </h2>
            <div className="img-zoom relative w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] mx-auto">
              <Image src="/images/Frame 1171277263.png" alt="Woman smiling" fill className="object-cover object-top rounded-sm" />
            </div>
          </Reveal>

          <Reveal direction="right" className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed space-y-3">
            <p>If you experience side effects while using Phexx, there are a few practical steps you can take.</p>
            <p>General guidance includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Monitor symptoms and note whether they are mild or worsening</li>
              <li>Contact a healthcare provider if symptoms persist or become bothersome</li>
              <li>
                Watch for signs of urinary tract infection, such as:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>Burning with urination</li>
                  <li>Cloudy urine</li>
                  <li>Pelvic pain</li>
                  <li>Back pain</li>
                </ul>
              </li>
              <li>Stop using the gel and seek medical advice if you experience signs of an allergic reaction</li>
              <li>Avoid using the gel for any condition it was not prescribed for</li>
            </ul>
            <p>
              If symptoms develop, a Miley Health clinician can help determine whether Phexx remains appropriate or whether another
              birth control option may be a better fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal direction="right">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight">
              Safety Considerations Beyond Side Effects
            </h2>
          </Reveal>
          <Reveal direction="left" className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed space-y-4">
            <p>In addition to potential side effects, there are a few important safety considerations to understand before using Phexx.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Phexx <span className="font-semibold text-[#111111]">does not protect against sexually transmitted infections</span>,
                including HIV
              </li>
              <li>
                It must be <span className="font-semibold text-[#111111]">used before intercourse</span> to be effective
              </li>
              <li>
                It <span className="font-semibold text-[#111111]">does not work if used after sex</span>
              </li>
              <li>
                It should <span className="font-semibold text-[#111111]">not be used with a vaginal ring</span>
              </li>
            </ul>
            <p>Understanding these safety points can help ensure proper use and set realistic expectations.</p>
            <Cta />
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
            <FaqAccordion items={FAQS} />
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
              Getting Phexx through Miley Health is simple and convenient. Start by completing a secure online medical questionnaire. A
              licensed clinician then reviews your consultation details and health history to determine whether Phexx is appropriate.
              <br />
              If approved, your prescription can be sent to a pharmacy for fulfillment.
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
