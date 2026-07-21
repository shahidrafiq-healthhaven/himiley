"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "Used only when needed", desc: "Phexx is applied shortly before intercourse rather than taken every day." },
  { title: "Hormone-free", desc: "The vaginal contraceptive gel works without estrogen or progestin, helping women avoid systemic hormonal exposure." },
  { title: "Online consultation", desc: "Patients complete a secure intake form that is reviewed by a licensed clinician before any prescription is issued." },
  { title: "Discreet delivery", desc: "Approved prescriptions are shipped in plain packaging directly to the patient's home." },
];

const TESTIMONIALS = [
  { quote: "I didn't want another daily pill, and this felt like a better fit for my lifestyle. The online process was fast and simple", name: "Rachel D." },
  { quote: "I travel often and my schedule changes constantly. I liked having birth control that I only use when needed.", name: "Melissa T." },
  { quote: "The discreet delivery was important to me. Everything arrived quickly, and the process felt very private.", name: "Kendra S." },
];

const WHY_CHOOSE = [
  { title: "No Daily Routine to Manage", desc: "On-demand contraception removes the pressure of remembering a pill every day. Since Phexx is used shortly before intercourse, it may fit women who want pregnancy prevention without maintaining a strict daily medication routine." },
  { title: "Hormone-Free Protection", desc: "Phexx works without hormones, making it appealing to women who want non-hormonal contraception. Some women specifically explore hormone-free birth control to avoid side effects like mood changes, breast tenderness, or reduced libido associated with hormonal methods." },
  { title: "Flexibility That Fits Real Life", desc: "Life does not always follow a predictable routine. Relationships, travel schedules, work demands, and sexual activity can all change over time. An on-demand contraceptive method offers flexibility without requiring a long-term contraceptive commitment." },
  { title: "Quick to Start, Easy to Stop", desc: "There is no procedure required to start using Phexx and no hormonal adjustment period associated with stopping hormones. Women can use the method on their own schedule without needing to plan around long-term contraception." },
];

const RIGHT_FOR_YOU = [
  { title: "Women Who Aren't Sexually Active on a Predictable Schedule", desc: "Some women experience changing schedules, travel frequently, or are in evolving relationships. For these women, taking a daily pill may feel unnecessary compared to an on-demand method used only when needed." },
  { title: "Women Who Struggle to Remember a Daily Pill", desc: "Daily routines are not easy for everyone. An on-demand contraceptive option removes the need to remember medication every single day." },
  { title: "Women Who Don't Want Hormonal Changes", desc: "Some women want a birth control option that is neither hormonal nor invasive. Phexx may appeal to women looking for hormone-free contraception without long-term devices or procedures." },
  { title: "Women Who Value Privacy and Convenience", desc: "Through Miley Health, women can complete an online consultation, connect with a licensed provider, and receive discreet home delivery without visiting a clinic in person." },
];

const FAQS = [
  { q: "What is on-demand birth control?", a: "On-demand birth control refers to contraception used only when needed rather than taken daily. Phexx is an example of an on-demand contraceptive gel used shortly before intercourse." },
  { q: "How is on-demand birth control different from the pill?", a: "Birth control pills are taken daily to maintain hormone levels. On-demand contraception is used only around the time of intercourse and does not require a daily medication routine." },
  { q: "What is Phexx?", a: "Phexxi, now also referred to as Phexx, is a prescription vaginal contraceptive gel designed for use shortly before sex to help prevent pregnancy without hormones." },
  { q: "Does Phexx contain hormones?", a: "No. Phexx is a hormone-free birth control option and does not contain estrogen or progestin." },
  { q: "How does Phexx work as an on-demand contraceptive?", a: "Phexx is a vaginal contraceptive gel used shortly before intercourse. It works locally within the vagina rather than changing hormone levels throughout the body." },
  { q: "How effective is on-demand birth control?", a: "Effectiveness depends on the specific contraceptive method and how consistently it is used. A licensed clinician can explain typical-use and perfect-use effectiveness during your consultation." },
  { q: "When do I apply Phexx during sex?", a: "Phexx should be applied shortly before intercourse according to the prescribing instructions provided by your clinician and pharmacy labeling." },
  { q: "Does on-demand birth control have side effects?", a: "Like any medication, Phexx may cause side effects in some users. Commonly reported effects can include vaginal irritation, burning, itching, or discomfort." },
  { q: "Can I get on-demand birth control online?", a: "Yes. Telehealth platforms like Miley Health allow women to complete secure online consultations reviewed by licensed clinicians." },
  { q: "How much does on-demand birth control cost through Miley Health?", a: "Pricing may vary depending on insurance coverage, pharmacy fulfillment, and eligibility. Patients can review available options during the consultation process." },
  { q: "Is on-demand contraception hormone-free?", a: "Some forms of on-demand contraception are hormone-free. Phexx specifically does not contain estrogen or progestin." },
  { q: "Can I use Phexx with condoms?", a: "Yes. Phexx may be used alongside condoms and certain barrier methods. Combining contraceptive methods may help improve pregnancy prevention effectiveness." },
  { q: "Is on-demand birth control good for irregular schedules?", a: "Many women with changing schedules or infrequent sexual activity prefer on-demand contraception because it is only used when needed rather than every day." },
  { q: "Do I need an in-person doctor visit?", a: "In many cases, no in-person appointment is required. Licensed clinicians review online consultations and determine whether treatment is appropriate based on medical history." },
  { q: "Can I stop using on-demand birth control anytime?", a: "Yes. Since Phexx is used only before intercourse and does not involve ongoing hormones, women can stop using it whenever they choose." },
];

export default function OnDemandBirthControlPage() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#E3E7EA] to-[#FDEDE3] py-14 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#111111] tracking-tight mb-5">
              Get On-Demand Birth Control Online
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              On-demand birth control is designed to be used only when needed, not every single day. Phexx, formerly known as Phexxi, is a
              prescription hormone-free vaginal gel applied shortly before intercourse and may be an option for women looking for flexible
              contraception without daily hormones.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              Through Miley Health, licensed clinicians review every consultation before prescribing treatment, and approved prescriptions
              are delivered discreetly to your home in plain packaging.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="flex justify-center">
            <Cta>Get Started</Cta>
          </Reveal>
        </div>
      </section>

      {/* Tired of taking */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight">
              Tired of Taking Birth Control Every Single Day?
            </h2>
          </Reveal>
          <Reveal direction="right" className="space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              For many women, daily birth control becomes another responsibility added to an already busy routine. Taking a pill at the
              same time every day, remembering refills, managing pharmacy pickups, and dealing with side effects that can build over
              time may start to feel exhausting. Others may feel that long-term methods like implants or IUDs are more commitment or
              invasiveness than they currently want.
            </p>
            <p>
              Not every woman needs contraception every day. Life changes. Schedules shift. Relationships evolve. For some women, taking
              a daily medication feels like more than their current situation calls for. Wanting birth control that fits naturally into
              your lifestyle rather than forcing your lifestyle around it is a completely reasonable preference.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Birth Control That Works on Your Demand */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#9D174D] tracking-tight mb-6">
              Birth Control That Works on Your Demand
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Miley Health is a telehealth platform that connects women with licensed clinicians who review medical history and
              contraception goals online. If appropriate, clinicians may prescribe Phexx, a hormone-free vaginal contraceptive gel
              designed for use shortly before intercourse.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Instead of requiring daily hormones or a long-term device, Phexx is used only when needed. Approved prescriptions are
              shipped discreetly through a licensed pharmacy directly to your home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore On-Demand Birth Control</h3>
            <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4A4A4A]">
              {EXPLORE_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#111111]">{item.title}</span> — {item.desc}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" className="relative w-full h-[300px] sm:h-[360px] hidden lg:block img-zoom">
            <Image src="/images/nhbc-hero-box.png" alt="Miley delivery box with Phexx applicator" fill className="object-contain object-center" />
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <Reveal direction="up" className="max-w-[900px] mx-auto px-6 lg:px-0 text-center mb-10">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight">How It Works</h2>
        </Reveal>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <StaggerGroup className="space-y-8">
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Tell Us About You</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Complete a short, secure intake form covering your health history, medications, and contraception preferences.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. Clinician Review</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                A licensed provider reviews your submission and may follow up with additional questions. If appropriate, they can
                prescribe Phexx online.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Delivered to Your Door</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Approved prescriptions are shipped through a licensed partner pharmacy in discreet packaging for privacy and convenience.
              </p>
            </StaggerItem>
          </StaggerGroup>
          <Reveal direction="right" className="relative w-full h-[320px] sm:h-[400px] img-zoom">
            <Image src="/images/odbc-delivery.png" alt="Delivery to your door" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Testimonials
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="relative bg-[#FCE8EB] rounded-sm px-16 py-14 text-center">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              aria-label="Previous testimonial"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg active:scale-95"
            >
              ←
            </button>
            <p className="text-[18px] sm:text-[22px] text-[#111111] leading-snug mb-4">{t.quote}</p>
            <p className="text-[14px] text-[#666666] mb-6">— {t.name}</p>
            <button className="btn-interactive inline-flex items-center justify-center px-6 py-2 text-[12px] font-semibold uppercase tracking-wide bg-[#111111] text-white rounded-sm">
              Make It
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg active:scale-95"
            >
              →
            </button>
          </Reveal>
          <p className="text-center text-[12px] text-[#999999] mt-4">
            Item {index + 1} of {TESTIMONIALS.length}
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
                Why Choose On-Demand Birth Control?
              </h2>
            </Reveal>
            <StaggerGroup className="space-y-6">
              {WHY_CHOOSE.map((item) => (
                <StaggerItem key={item.title}>
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-[#111111] mb-1">{item.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal direction="right" className="relative w-full h-[300px] sm:h-[420px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Is It Right For You */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Is On-Demand Birth Control Right for You?
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

      {/* CTA Banner */}
      <section className="w-full bg-gradient-to-br from-[#F5E7E0] to-[#FCE8EB] py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight">
              Get the Birth Control That Fits Your Schedule
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed mb-6">
              Explore a more flexible and private way to request on-demand birth control online through Miley Health. Licensed
              clinicians review every consultation, and approved prescriptions are shipped discreetly to your home.
            </p>
            <Cta>Request Prescription for On-Demand Birth Control</Cta>
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
