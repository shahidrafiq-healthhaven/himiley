import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "Online consultation", desc: "Complete a secure online intake form without scheduling an in-person clinic appointment." },
  { title: "Hormone-free option", desc: "Phexx is a prescription vaginal contraceptive gel used only before intercourse rather than every day." },
  { title: "Discreet delivery", desc: "Approved prescriptions are shipped in plain packaging directly to your door for added privacy." },
  { title: "Licensed clinician review", desc: "Every consultation is reviewed by a U.S.-based healthcare provider before treatment is prescribed." },
];

const TESTIMONIALS = [
  { quote: "I wanted birth control without hormones and appreciated being able to handle everything online.", name: "Ashley T." },
  { quote: "The process through Miley Health felt simple, private, and professional from start to finish.", name: "Nicole R." },
  { quote: "I liked having an option that worked around my schedule instead of taking something every day.", name: "Lauren M." },
];

const WHY_CHOOSE = [
  { title: "No Hormonal Side Effects", desc: "Hormone-free contraceptive methods avoid systemic hormonal exposure. Many women explore non-hormonal birth control to avoid side effects such as mood changes, weight fluctuation, headaches, or reduced libido associated with hormonal contraception." },
  { title: "On-Demand Use", desc: "Phexx is applied shortly before intercourse rather than taken daily. This on-demand approach may appeal to women who want contraception that fits naturally around their schedule and lifestyle." },
  { title: "Prescription-Strength Protection", desc: "Phexx is an FDA-approved prescription contraceptive gel reviewed by licensed healthcare providers. For women seeking evidence-based, clinician-reviewed contraception without hormones, this can provide additional reassurance." },
  { title: "Flexibility and Control", desc: "Non-hormonal birth control options can often be started or stopped without ongoing hormonal exposure or adjustment periods. This flexibility may fit women whose routines, relationships, or contraceptive needs change over time." },
];

const RIGHT_FOR_YOU = [
  { title: "Women Who Have Experienced Side Effects From Hormonal Contraception", desc: "Some women experience mood changes, weight fluctuation, breast tenderness, or reduced libido while using hormonal birth control. A hormone-free option like Phexx may be worth discussing with a healthcare provider." },
  { title: "Women Who Prefer On-Demand Contraception", desc: "Phexx is used before intercourse rather than daily, making it a practical option for women who want contraception that works around their schedule instead of requiring a daily routine." },
  { title: "Women Who Value Privacy and Convenience", desc: "Through Miley Health, women can complete a secure online intake form, communicate with licensed providers, and receive prescriptions in discreet packaging without clinic visits or pharmacy lines." },
  { title: "Women Who Prefer to Avoid Hormones", desc: "Some women simply choose not to use hormonal contraception because of personal preference, medical history, or lifestyle considerations. Miley Health helps determine whether Phexx may be an appropriate hormone-free option." },
];

const FAQS = [
  { q: "What is non-hormonal birth control?", a: "Non-hormonal birth control refers to contraceptive methods that prevent pregnancy without using hormones like estrogen or progestin. Phexx is one example of a prescription hormone-free vaginal contraceptive gel." },
  { q: "What is Phexx and how does it work?", a: "Phexxi, now also referred to as Phexx, is a prescription vaginal contraceptive gel used before intercourse. According to official prescribing information, it works locally in the vagina by maintaining vaginal pH in a range that reduces sperm motility." },
  { q: "Does Phexx contain hormones?", a: "No. Phexx does not contain estrogen or progestin, making it a hormone-free contraceptive option." },
  { q: "How effective is non-hormonal birth control?", a: "Effectiveness depends on the specific contraceptive method and how consistently it is used. According to official prescribing information, Phexx is approximately 86% effective with typical use and approximately 93% effective with perfect use." },
  { q: "When do I use Phexx?", a: "Phexx should be applied vaginally immediately before or up to one hour before intercourse according to prescribing instructions." },
  { q: "Does non-hormonal birth control have side effects?", a: "Yes. Even hormone-free contraceptive methods may cause side effects. Commonly reported side effects with Phexx include vaginal burning, itching, discomfort, urinary tract infections, or yeast infections" },
  { q: "Does Phexx protect against sexually transmitted infections?", a: "No. Phexx does not protect against sexually transmitted infections. Condoms remain important for STI prevention." },
  { q: "Can I get non-hormonal birth control online?", a: "Yes. Through Miley Health, women can complete a secure online consultation reviewed by a licensed healthcare provider." },
  { q: "How does Miley Health's consultation process work?", a: "Patients complete an online intake form covering medical history, medications, and contraception goals. A licensed clinician reviews the information and may follow up through secure messaging before prescribing treatment if appropriate." },
  { q: "Is an in-person appointment required?", a: "In many cases, no in-person visit is necessary. Licensed providers can evaluate consultations online and determine whether treatment is clinically appropriate." },
  { q: "Is non-hormonal birth control right for everyone?", a: "Not necessarily. Every contraceptive option has benefits and risks, and not every method fits every patient. A licensed healthcare provider reviews medical history to determine whether Phexx may be appropriate." },
  { q: "Is Phexx covered by insurance?", a: "Coverage varies depending on the patient's insurance plan. During the consultation process, patients can review available pharmacy and payment options." },
  { q: "Can I use Phexx with condoms?", a: "Yes. Phexx may be used alongside condoms and certain barrier methods. Combining contraceptive methods may help improve pregnancy prevention effectiveness." },
  { q: "Is Phexx a daily birth control method?", a: "No. Phexx is an on-demand contraceptive option used before intercourse rather than taken daily." },
  { q: "Can I stop using Phexx anytime?", a: "Yes. Since Phexx does not involve ongoing hormonal exposure and is used only before intercourse, women can discontinue use whenever they choose." },
];

export default function NonHormonalBirthControlPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-hidden">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#FCE8EB] to-[#FDEDE3] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#111111] tracking-tight mb-5">
                Get Non-Hormonal Birth Control Online
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
                Phexx, formerly known as Phexxi, is a prescription hormone-free vaginal contraceptive gel used before intercourse rather
                than as a daily pill. Through Miley Health, licensed clinicians review every consultation before prescribing treatment, and
                approved prescriptions are delivered discreetly to your home in plain packaging.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <Cta>Get Started</Cta>
            </Reveal>
          </div>
          <Reveal direction="right" className="relative w-full h-[280px] sm:h-[360px] img-zoom">
            <Image src="/images/nhbc-hero-box.png" alt="Miley delivery box with Phexx applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Tired of Hormonal Side Effects */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 text-center">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
              Tired of Hormonal Side Effects?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="text-left space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              For many women, hormonal birth control comes with tradeoffs. Mood changes, headaches, weight fluctuation, breast
              tenderness, and reduced libido are some of the reasons women begin searching for alternatives. These experiences can
              affect confidence, relationships, energy levels, and overall quality of life. For some women, the side effects simply
              outweigh the convenience of traditional hormonal contraception.
            </p>
            <p>
              Other women are not necessarily unhappy with hormonal birth control. They simply want more flexibility and control over
              when and how contraception is used. Some prefer an option that is not taken daily or one that does not involve ongoing
              hormonal exposure. Wanting a birth control method that better fits your lifestyle and preferences is a valid and informed
              choice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hormone-Free Birth Control Accessible Online */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          <Reveal direction="left" className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] mx-auto lg:mx-0 img-zoom">
            <Image src="/images/nhbc-woman-syringes.png" alt="Woman holding two Phexx applicators" fill className="object-contain" />
          </Reveal>

          <Reveal direction="right">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight mb-4">
              Hormone-Free Birth Control, Accessible Online
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Miley Health is a telehealth platform that connects women with licensed clinicians who can evaluate whether non-hormonal
              birth control options like Phexx may be appropriate. After reviewing a patient&rsquo;s medical history and contraception
              goals, clinicians can prescribe treatment online if clinically appropriate.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Phexxi, now also referred to as Phexx, is an FDA-approved prescription vaginal contraceptive gel used shortly before
              intercourse. Unlike daily birth control pills, Phexx does not contain estrogen or progestin and is designed for on-demand
              contraception rather than continuous hormonal use. Approved prescriptions are shipped discreetly through a licensed
              pharmacy directly to the patient&rsquo;s home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore Non-Hormonal Birth Control</h3>
            <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4A4A4A]">
              {EXPLORE_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#111111]">{item.title}</span> — {item.desc}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <Reveal direction="up" as="div" className="max-w-[900px] mx-auto px-6 lg:px-0 text-center mb-10">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight">How It Works</h2>
        </Reveal>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal direction="left" className="space-y-8">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Tell Us About You</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Fill out a secure online intake form covering your health history, medications, and interest in non-hormonal birth
                control.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. A Licensed Clinician Reviews Your Consultation</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                A U.S.-based healthcare provider reviews your information and may follow up through secure messaging. If clinically
                appropriate, they can prescribe Phexx online.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Delivered to Your Door</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Approved prescriptions are sent to a partner pharmacy and shipped directly to your home in discreet packaging.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" className="relative w-full h-[420px] sm:h-[520px] img-zoom">
            <Image src="/images/nhbc-how-it-works-steps.png" alt="How it works illustration" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Testimonials
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name} className="card-interactive bg-[#FCE8EB] rounded-sm p-6 flex flex-col justify-between min-h-[160px]">
                <p className="text-[14px] text-[#333333] italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[13px] font-semibold text-[#9D174D]">— {t.name}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Choose Non-Hormonal */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
              Why Choose Non-Hormonal Birth Control?
            </h2>
            <StaggerGroup className="space-y-6">
              {WHY_CHOOSE.map((item) => (
                <StaggerItem key={item.title}>
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-[#111111] mb-1">{item.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
          <Reveal direction="right" className="relative w-full h-[300px] sm:h-[420px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Is Hormone-Free Right for You */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Is Hormone-Free Birth Control Right for You?
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-6">
            {RIGHT_FOR_YOU.map((item) => (
              <StaggerItem key={item.title}>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#9D174D] text-center mb-2">{item.title}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed text-center max-w-[700px] mx-auto">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Dark CTA Banner */}
      <section className="w-full bg-[#8A7A82] py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal direction="up">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight">
              Start Your Online Consultation Today
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6">
              Requesting non-hormonal birth control through Miley Health is designed to be simple, private, and entirely online.
              Licensed clinicians review every consultation before prescribing treatment.
            </p>
            <Cta>Request Prescription for Non-Hormonal Birth Control</Cta>
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
            <FaqAccordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <Footer variant="subpage" />
    </div>
  );
}
