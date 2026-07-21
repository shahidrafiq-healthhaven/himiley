import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "Online consultation", desc: "No clinic visit is required. Patients complete a short online health questionnaire from home." },
  { title: "Prescription vaginal gel", desc: "Phexx is applied before intercourse rather than taken daily." },
  { title: "Discreet delivery", desc: "Approved prescriptions are shipped in plain packaging directly to the patient's door." },
  { title: "Licensed clinician review", desc: "Every consultation is reviewed by a U.S.-based healthcare provider before a prescription is issued" },
];

const TESTIMONIALS = [
  { quote: "I wanted a birth control option without hormones or a daily pill. The Miley Health process was simple, professional, and discreet", name: "Rachel M." },
  { quote: "The clinician answered my questions quickly, and I appreciated being able to complete everything online", name: "Taylor S." },
  { quote: "Delivery was fast, and I liked not having to schedule an in-person appointment or wait at a pharmacy.", name: "Nicole R." },
];

const WHY_CHOOSE = [
  { title: "No Hormones Involved", desc: "Phexx works without estrogen or progestin, making it a hormone-free contraceptive option. Because it does not alter hormone levels throughout the body, many women explore it as an alternative to hormonal birth control methods." },
  { title: "Applied Only When Needed", desc: "Unlike daily birth control pills, Phexx is used before intercourse rather than on a continuous schedule. This on-demand approach may appeal to women who prefer more flexibility." },
  { title: "Prescription-Strength Protection", desc: "Phexx is an FDA-approved prescription medication reviewed by licensed healthcare providers. For women seeking evidence-based contraception, clinician oversight may provide additional reassurance compared to over-the-counter options." },
  { title: "Works at the Site of Action", desc: "Phexx works locally in the vagina rather than systemically throughout the body. According to official prescribing information, it helps maintain vaginal pH in a range that reduces sperm motility. Because it works locally, it does not involve systemic hormones." },
];

const WHO_FOR = [
  { title: "Women Who Want Hormone-Free Contraception", desc: "Some women prefer to avoid estrogen or progestin for personal, medical, or lifestyle reasons. Phexx offers a prescription contraceptive option without hormones." },
  { title: "Women Who Prefer Not to Take Something Every Day", desc: "Daily pills are not ideal for everyone. Women with changing schedules or inconsistent routines may prefer a contraceptive method used only before intercourse." },
  { title: "Women Exploring Alternatives After Hormonal Birth Control", desc: "Some women have previously used hormonal birth control and are now looking for a different approach. Exploring a non-hormonal contraceptive gel may feel like a better fit for their current needs." },
  { title: "Women Who Want a Private, At-Home Solution", desc: "Miley Health allows women to complete consultations online, communicate securely with licensed clinicians, and receive discreet home delivery without clinic visits or pharmacy lines." },
];

const FAQS = [
  { q: "What is a vaginal contraceptive gel and how does it work?", a: "A vaginal contraceptive gel is a prescription birth control method applied before intercourse. Phexxi works locally in the vagina by maintaining vaginal pH in a range that reduces sperm motility." },
  { q: "Is Phexx the only prescription vaginal contraceptive gel available?", a: "Phexx is currently the primary FDA-approved prescription hormone-free vaginal contraceptive gel available in the United States." },
  { q: "Does Phexx contain hormones?", a: "No. Phexx does not contain estrogen or progestin, making it a hormone-free contraceptive option." },
  { q: "How effective is Phexx as birth control?", a: "According to official prescribing information, Phexx is approximately 86% effective with typical use and approximately 93% effective with perfect use when used as directed." },
  { q: "When do I apply Phexx before sex?", a: "Phexx should be applied vaginally immediately before or up to one hour before each act of intercourse according to prescribing instructions." },
  { q: "Does vaginal contraceptive gel have side effects?", a: "Like any prescription medication, Phexx may cause side effects. Commonly reported effects include vaginal burning, itching, discomfort, urinary tract infections, or yeast infections." },
  { q: "Does Phexx protect against STIs?", a: "No. Phexx does not protect against sexually transmitted infections. Condoms remain important for STI prevention." },
  { q: "Can I get a prescription for vaginal contraceptive gel online?", a: "Yes. Through Miley Health, women can complete a secure online consultation reviewed by a licensed healthcare provider." },
  { q: "What happens during the Miley Health consultation?", a: "Patients complete an online intake form covering medical history, medications, and contraception preferences. A licensed clinician reviews the information and may follow up with additional questions before prescribing treatment if appropriate." },
  { q: "Is an in-person doctor visit required?", a: "In many cases, no in-person visit is necessary. Licensed clinicians can review consultations online and determine whether treatment is clinically appropriate." },
  { q: "Is Phexx covered by insurance?", a: "Coverage may vary depending on the patient's insurance plan. During the consultation process, patients can review pharmacy and payment options available to them." },
  { q: "Can I use Phexx with condoms?", a: "Yes. Phexx may be used alongside condoms and certain barrier methods. Combining methods may improve pregnancy prevention effectiveness." },
  { q: "Is vaginal contraceptive gel used every day?", a: "No. Phexx is an on-demand contraceptive method used before intercourse rather than daily." },
  { q: "Who may not be a good candidate for Phexx?", a: "Certain medical conditions or recurrent urinary tract infections may affect whether Phexx is appropriate. A licensed healthcare provider reviews each patient's medical history before prescribing treatment." },
  { q: "Can I stop using Phexx anytime?", a: "Yes. Since Phexx is used only before intercourse and does not contain hormones, women can stop using it whenever they choose." },
];

export default function VaginalContraceptiveGelPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-hidden">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#CFE0EF] to-[#FDEDE3] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#111111] tracking-tight mb-5">
                Get Your Vaginal Contraceptive Gel Online
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
                Phexx, formerly known as Phexxi, is a prescription vaginal contraceptive gel designed for use before intercourse, not a
                daily pill or hormonal birth control method. Through Miley Health, women can complete an online consultation reviewed by a
                licensed clinician and receive approved prescriptions delivered discreetly to their home.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <Cta>Get Started</Cta>
            </Reveal>
          </div>
          <Reveal direction="right" className="relative w-full h-[260px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* The Pill Isn't the Only Way */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0 text-center">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#9D174D] tracking-tight mb-8">
              The Pill Isn&rsquo;t the Only Way
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1} className="text-left space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              Many women eventually reach a point where they want something different from traditional birth control. Most well-known
              contraceptive options are either hormonal or require a procedure, such as an IUD insertion or implant placement. What many
              women do not realize is that vaginal contraceptive gel is another prescription option available today. Just because it is
              discussed less often does not mean it is not worth considering.
            </p>
            <p>
              For women looking for a non-daily, hormone-free contraceptive option, exploring alternatives is a practical and informed
              decision. Some women simply want a method that works differently from what they have tried before. Others want birth
              control that fits their schedule and lifestyle without long-term hormones or procedures. That is where Phexx and Miley
              Health come together to offer a more flexible option.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Phexx: A Prescription Vaginal Contraceptive Gel */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight mb-6">
              Phexx: A Prescription Vaginal Contraceptive Gel
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Phexxi, now also referred to as Phexx, is an FDA-approved prescription vaginal contraceptive gel used shortly before
              intercourse. Unlike daily birth control pills, Phexx is designed as an on-demand contraceptive option and does not contain
              estrogen or progestin. Miley Health is a telehealth platform focused on women&rsquo;s sexual and reproductive health.
              Through the platform, licensed U.S.-based clinicians review each patient&rsquo;s medical history and contraception goals to
              determine whether Phexx may be an appropriate option. Approved prescriptions are shipped discreetly through a licensed
              pharmacy directly to the patient&rsquo;s home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore Vaginal Contraceptive Gel</h3>
            <ul className="space-y-2 text-[14px] sm:text-[15px] text-[#4A4A4A]">
              {EXPLORE_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#111111]">{item.title}</span> — {item.desc}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="right" className="relative w-full h-[220px] hidden lg:block img-zoom">
            <Image src="/images/bcwe-woman-icon.png" alt="Hand holding Phexx applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#9D174D] tracking-tight text-center mb-10">
              How It Works
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
            <Reveal direction="left" className="space-y-8">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Complete Your Intake Form</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  Fill out a brief, secure online questionnaire covering your medical history, medications, and contraception goals.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. Clinician Review</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  A licensed U.S.-based clinician reviews your information and may follow up through secure messaging. Prescriptions are
                  only issued if clinically appropriate.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Discreet Home Delivery</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  Approved prescriptions are sent to a partner pharmacy and shipped directly to your home in plain packaging for privacy
                  and convenience.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" className="relative w-full h-[300px] sm:h-[360px] img-zoom">
              <Image src="/images/odbc-delivery.png" alt="Delivery to your door" fill className="object-contain" />
            </Reveal>
          </div>
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
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <StaggerItem
                key={t.name}
                className="card-interactive aspect-square rounded-full bg-[#9D174D] flex flex-col items-center justify-center text-center p-8"
              >
                <p className="text-[13px] text-white leading-snug mb-3">{t.quote}</p>
                <p className="text-[12px] text-white/80">— {t.name}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Choose */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#9D174D] tracking-tight text-center mb-10">
              Why Choose a Vaginal Contraceptive Gel?
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
      </section>

      {/* Who Is This For */}
      <section className="w-full py-14 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#9D174D] tracking-tight text-center mb-10">
              Who Is This For?
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-6">
            {WHO_FOR.map((item) => (
              <StaggerItem key={item.title}>
                <h3 className="text-[16px] sm:text-[18px] font-bold text-[#111111] text-center mb-2">{item.title}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed text-center max-w-[700px] mx-auto">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Image CTA Banner */}
      <section className="w-full relative h-[380px] sm:h-[440px] lg:h-[500px] overflow-hidden">
        <Image src="/images/Rectangle 34624318.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <Reveal direction="up" className="relative z-10 max-w-[1200px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-end justify-between gap-6 pb-12 sm:pb-16">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight max-w-[420px]">
            Start Your Consultation Today
          </h2>
          <div className="max-w-[440px]">
            <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed mb-6">
              Requesting a prescription vaginal contraceptive gel through Miley Health is designed to be simple, private, and entirely
              online. Licensed clinicians review every consultation before treatment is prescribed.
            </p>
            <Cta>Request Your Vaginal Contraceptive Gel Prescription</Cta>
          </div>
        </Reveal>
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
