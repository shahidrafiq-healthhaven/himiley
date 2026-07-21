"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "Online consultation", desc: "No in-person appointment is required. Patients complete a secure online health questionnaire from home." },
  { title: "Estrogen-free option", desc: "Phexx is a prescription hormone-free vaginal contraceptive gel used before intercourse instead of daily." },
  { title: "Discreet delivery", desc: "Approved prescriptions are shipped in plain packaging directly to the patient's home." },
  { title: "Licensed clinician review", desc: "Every consultation is reviewed by a U.S.-based healthcare provider before any prescription is issued." },
];

const TESTIMONIALS = [
  { quote: "I specifically wanted birth control without estrogen because of migraines. The process through Miley Health was easy and professional.", name: "Amanda R." },
  { quote: "I appreciated being able to complete everything online instead of scheduling another clinic appointment.", name: "Lauren T." },
  { quote: "The delivery was discreet, and I liked having a hormone-free option that fit my lifestyle better.", name: "Nicole M." },
];

const WHY_ESTROGEN_FREE = [
  { title: "Fewer Estrogen-Related Side Effects", desc: "Some women experience nausea, headaches, breast tenderness, or mood shifts while using estrogen-based birth control. Choosing contraception without estrogen removes exposure to that hormone and may help women avoid side effects specifically linked to estrogen-containing methods." },
  { title: "Medically Appropriate for More Women", desc: "Certain health conditions make estrogen-containing contraception unsuitable for some women. This may include a history of blood clots, certain migraines, smoking-related cardiovascular risks, or estrogen-sensitive diagnoses. Estrogen-free contraception may provide another option that a clinician can evaluate individually." },
  { title: "No Daily Commitment", desc: "Unlike daily birth control pills, Phexx is used shortly before intercourse rather than every day. Women looking for more flexibility may prefer an on-demand contraceptive option that does not require a recurring medication schedule." },
  { title: "Prescription-Grade Without the Hormones", desc: "Estrogen-free does not mean unregulated or ineffective. Phexx is FDA-approved, requires a licensed clinician review, and is prescribed through a regulated healthcare process designed around patient safety and appropriateness." },
];

const WHO_FOR = [
  { title: "Women With a Medical Reason to Avoid Estrogen", desc: "Some women are advised to avoid estrogen-based contraception because of medical conditions such as migraines with aura, prior blood clots (VTE), or estrogen-sensitive diagnoses. Miley Health's clinical review process helps determine whether Phexx may be appropriate based on individual health history." },
  { title: "Women Who Want to Opt Out of Estrogen-Based Birth Control", desc: "Some women simply decide the side effects of estrogen-containing contraception are no longer worth it. Exploring a prescription hormone-free contraceptive gel may feel like a better fit for their current goals and lifestyle." },
  { title: "Women Who Don't Want Daily Contraception", desc: "Daily pills do not work well for everyone. Women with changing schedules or inconsistent routines may prefer an on-demand contraceptive option used only before intercourse." },
  { title: "Women Who Want to Handle This Privately, From Home", desc: "Miley Health allows women to complete consultations online, communicate securely with licensed providers, and receive prescriptions discreetly at home without clinic visits or pharmacy lines." },
];

const FAQS = [
  { q: "What does “birth control without estrogen” actually mean?", a: "Birth control without estrogen refers to contraceptive methods that do not contain estrogen hormones. Some options are hormone-free entirely, while others may contain only progestin. Phexx is a hormone-free prescription vaginal contraceptive gel." },
  { q: "Who should consider estrogen-free birth control?", a: "Women who experience estrogen-related side effects or have medical reasons to avoid estrogen may consider estrogen-free contraception. A licensed healthcare provider can help determine which options are appropriate based on medical history." },
  { q: "What is Phexx, and how is it different from the pill?", a: "Phexxi, now also referred to as Phexx, is a prescription vaginal contraceptive gel used before intercourse. Unlike birth control pills, it does not contain estrogen or progestin and is not taken daily." },
  { q: "Does Phexx contain hormones?", a: "No. Phexx is considered a hormone-free contraceptive option because it contains neither estrogen nor progestin." },
  { q: "How effective is estrogen-free birth control?", a: "Effectiveness depends on the specific contraceptive method and how consistently it is used. According to official prescribing information, Phexx is approximately 86% effective with typical use and approximately 93% effective with perfect use." },
  { q: "When is Phexx used?", a: "Phexx is typically applied vaginally immediately before or up to one hour before intercourse according to prescribing instructions." },
  { q: "Are there side effects to birth control without estrogen?", a: "Yes. Even hormone-free contraceptive methods may cause side effects. Commonly reported side effects with Phexx include vaginal burning, itching, discomfort, urinary tract infections, or yeast infections." },
  { q: "Does Phexx protect against sexually transmitted infections?", a: "No. Phexx does not protect against sexually transmitted infections. Condoms remain important for STI prevention." },
  { q: "Can I get an estrogen-free birth control prescription online?", a: "Yes. Through Miley Health, women can complete a secure online consultation reviewed by a licensed healthcare provider." },
  { q: "What happens during the Miley Health consultation?", a: "Patients complete an online intake form covering medical history, medications, and contraception goals. A licensed clinician reviews the information and may follow up securely before prescribing treatment if appropriate." },
  { q: "Is an in-person appointment required?", a: "In many cases, no in-person appointment is necessary. Licensed providers can review consultations online and determine whether treatment is clinically appropriate." },
  { q: "Does Miley Health accept insurance for Phexx?", a: "Insurance coverage varies depending on the patient's plan. During the consultation process, patients can review available pharmacy and payment options." },
  { q: "Can women with migraines use estrogen-free contraception?", a: "Some women with migraines, especially migraines with aura, may be advised to avoid estrogen-containing birth control. A licensed healthcare provider can evaluate whether hormone-free contraception may be appropriate." },
  { q: "Is estrogen-free contraception less effective?", a: "Not necessarily. Different contraceptive methods have different effectiveness rates. Patients should discuss effectiveness, consistency of use, and lifestyle preferences with a healthcare provider." },
  { q: "Can I stop using Phexx anytime?", a: "Yes. Since Phexx is used only before intercourse and does not involve ongoing hormonal exposure, women can stop using it whenever they choose." },
];

export default function BirthControlWithoutEstrogenPage() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#FCE8EB] to-[#FDEDE3] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#111111] tracking-tight mb-5">
                Birth Control Without Estrogen, on Your Terms
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
                Estrogen-free birth control is now more accessible without needing to schedule an in-person clinic visit. Through Miley
                Health, licensed clinicians can review whether Phexx, formerly known as Phexxi, a prescription hormone-free vaginal
                contraceptive gel used before intercourse, may be an appropriate option for you, with approved prescriptions delivered
                discreetly to your home.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <Cta>Get Started</Cta>
            </Reveal>
          </div>
          <Reveal direction="right" className="relative w-full h-[320px] sm:h-[400px] mx-auto img-zoom">
            <Image src="/images/Frame 1171277263.png" alt="Woman smiling" fill className="object-contain object-bottom" />
          </Reveal>
        </div>
      </section>

      {/* Estrogen Isn't the Only Option */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 text-center">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
              Estrogen Isn&rsquo;t the Only Option
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="text-left space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              Many women arrive here because they are done dealing with estrogen-based birth control. Some have experienced side effects
              like headaches, nausea, breast tenderness, or mood changes that made daily hormonal contraception feel difficult to
              tolerate. Others were told by their healthcare provider that estrogen-based birth control may not be appropriate because of
              their medical history, including migraines with aura, prior blood clots, or estrogen-sensitive conditions.
            </p>
            <p>
              Wanting to avoid estrogen is a valid and informed healthcare decision. For some women, it is about comfort and quality of
              life. For others, it is medically necessary. Either way, there are prescription contraceptive alternatives worth
              understanding, including hormone-free options that work differently from traditional birth control pills.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hormone-Free Birth Control Accessible Online */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight mb-6">
              Hormone-Free Birth Control, Accessible Online
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Miley Health is a telehealth platform focused on women&rsquo;s sexual and reproductive health. Through the platform,
              licensed U.S.-based clinicians review each patient&rsquo;s medical history and contraception goals to determine whether
              Phexx may be an appropriate fit.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Phexxi, now also referred to as Phexx, is an FDA-approved prescription vaginal contraceptive gel used shortly before
              intercourse. Unlike birth control pills, Phexx does not contain estrogen or progestin and is designed as an on-demand
              contraceptive option rather than a daily medication. Approved prescriptions are shipped discreetly through a licensed
              pharmacy directly to the patient&rsquo;s home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore Estrogen-Free Birth Control</h3>
            <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4A4A4A]">
              {EXPLORE_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#111111]">{item.title}</span> {item.desc}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" className="relative w-full h-[320px] hidden lg:block img-zoom">
            <Image src="/images/bcwe-woman-icon.png" alt="Hand holding Phexx applicator" fill className="object-contain object-center" />
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              How It Works
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-8">
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Complete Your Intake Form</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Fill out a short and straightforward online questionnaire covering your medical history, medications, and contraception
                preferences.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. Clinician Review</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                A licensed U.S.-based provider reviews your submission and may follow up through secure messaging. Prescriptions are
                only issued if clinically appropriate.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Discreet Home Delivery</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Approved prescriptions are fulfilled by a partner pharmacy and shipped directly to your home in discreet packaging for
                added privacy and convenience.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              What People Are Saying About Phexx
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="grid grid-cols-1 sm:grid-cols-[1fr_240px] relative">
            <div className="relative bg-[#FCC9D3] px-10 sm:px-16 py-14 flex flex-col justify-center">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                aria-label="Previous testimonial"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
              >
                ←
              </button>
              <p className="text-[18px] sm:text-[22px] text-[#111111] leading-snug mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-[14px] text-[#666666] mb-6">— {t.name}</p>
              <button className="btn-interactive inline-flex items-center justify-center w-fit px-6 py-2 text-[12px] font-semibold uppercase tracking-wide bg-[#111111] text-white rounded-sm">
                Get Started
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
                aria-label="Next testimonial"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg"
              >
                →
              </button>
            </div>
            <div className="img-zoom relative hidden sm:block h-full min-h-[300px]">
              <Image src="/images/bcwe-testimonial-photo.jpg" alt="" fill className="object-cover grayscale" />
            </div>
          </Reveal>
          <p className="text-center text-[12px] text-[#999999] mt-4">
            Item {index + 1} of {TESTIMONIALS.length}
          </p>
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

      {/* Why Go Estrogen-Free */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
                Why Go Estrogen-Free?
              </h2>
            </Reveal>
            <StaggerGroup className="space-y-6">
              {WHY_ESTROGEN_FREE.map((item) => (
                <StaggerItem key={item.title}>
                  <h3 className="text-[17px] sm:text-[19px] font-bold text-[#9D174D] mb-1">{item.title}</h3>
                  <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal direction="right" className="relative w-full h-[300px] sm:h-[420px] hidden lg:block img-zoom">
            <Image src="/images/nhbc-woman-syringes.png" alt="Woman holding two Phexx applicators" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Who Is This For?
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-6">
            {WHO_FOR.map((item) => (
              <StaggerItem key={item.title}>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#9D174D] text-center mb-2">{item.title}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed text-center max-w-[700px] mx-auto">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full bg-gradient-to-br from-[#8A7A82] to-[#B99CA4] py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight">
              Take the First Step Without Estrogen Today
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6">
              Starting a consultation through Miley Health is designed to be simple, private, and entirely online. Licensed clinicians
              review every consultation before treatment is prescribed.
            </p>
            <Cta>Request Your Estrogen-Free Birth Control Prescription</Cta>
          </Reveal>
        </div>
      </section>

      <Footer variant="subpage" />
    </div>
  );
}
