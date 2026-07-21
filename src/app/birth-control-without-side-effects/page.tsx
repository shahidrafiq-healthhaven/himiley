import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "No hormonal side effects", desc: "Since Phexx does not contain hormones, it avoids the systemic hormonal exposure associated with estrogen- or progestin-based contraception." },
  { title: "Used only when needed", desc: "Phexx is applied shortly before intercourse rather than taken daily, helping women avoid ongoing hormonal exposure." },
  { title: "Online consultation", desc: "A licensed clinician reviews each patient's health history to determine whether hormone-free contraception is appropriate." },
  { title: "Discreet delivery", desc: "Prescriptions are shipped in plain packaging for privacy and convenience." },
];

const TESTIMONIALS = [
  { quote: "After trying multiple birth control pills, I finally wanted something without hormones. The online process was simple, and delivery was completely discreet.", name: "Amanda R." },
  { quote: "I struggled with headaches and mood swings on hormonal birth control. Phexx felt like a better fit for me.", name: "Jasmine T." },
  { quote: "I liked that I didn't need a doctor's office appointment. Everything was reviewed online, and shipping was fast.", name: "Nicole M." },
];

const WHAT_CHANGES = [
  { title: "It Works Locally, Not Systemically", desc: "Hormonal birth control circulates through the bloodstream, which is why side effects can affect mood, energy, libido, or other parts of the body. A vaginal contraceptive gel works locally where it is applied rather than altering hormone levels throughout the body." },
  { title: "Your Natural Hormonal Cycle Remains Intact", desc: "Hormonal contraception changes the body's hormone balance to prevent pregnancy. A hormone-free contraceptive gel does not contain estrogen or progestin, allowing the body's natural hormonal cycle to continue without added hormones." },
  { title: "No Buildup Over Time", desc: "Daily hormonal contraceptives create ongoing exposure that can continue even after stopping treatment. Phexx is only used before intercourse, meaning there is no continuous hormonal buildup or adjustment period related to hormone exposure." },
  { title: "A Useful Option for Women Who Cannot Take Estrogen", desc: "Some women are advised to avoid estrogen due to migraines with aura, clotting history, or estrogen-sensitive conditions. A hormone-free prescription option may provide an alternative that a licensed clinician can evaluate individually." },
];

const WHO_FOR = [
  { title: "Women Who've Already Tried Switching Pills and Still Feel Off", desc: "Many women move between multiple birth control pills hoping side effects improve, only to continue feeling unlike themselves. A hormone-free option may be worth discussing with a clinician." },
  { title: "Women Coming Off Long-Term Hormonal Use", desc: "Some women want to better understand how they feel without years of hormonal contraception. A non-hormonal contraceptive option allows pregnancy prevention without restarting systemic hormone exposure." },
  { title: "Women With Medical Reasons to Avoid Estrogen", desc: "Conditions like migraines with aura, prior blood clots, or estrogen-sensitive diagnoses may make estrogen-containing contraception unsuitable. A licensed provider can review whether hormone-free contraception is appropriate." },
  { title: "Women Who Want Birth Control Without the Mental Load", desc: "Daily pills, pharmacy refills, and hormone-related concerns can feel exhausting. Some women prefer an on-demand contraceptive option used only when needed rather than maintaining a daily medication routine" },
];

const FAQS = [
  { q: "Is there really a birth control without side effects?", a: "No birth control is completely free of side effects. However, hormone-free birth control options like Phexx avoid the systemic hormonal side effects many women experience with estrogen- or progestin-based contraception." },
  { q: "Can I get birth control without hormonal side effects online?", a: "Yes. Telehealth platforms like Miley Health allow licensed clinicians to review your medical history online and prescribe hormone-free birth control if appropriate." },
  { q: "What is Phexx?", a: "Phexxi, now also referred to as Phexx, is a prescription vaginal contraceptive gel designed for use shortly before intercourse to help prevent pregnancy without hormones." },
  { q: "Does Phexx contain hormones?", a: "No. Phexx is a non-hormonal contraceptive gel and does not contain estrogen or progestin." },
  { q: "Does Phexx have side effects?", a: "Like any prescription medication, Phexx may cause side effects in some users. Commonly reported effects can include vaginal irritation, burning, itching, or discomfort. A clinician can discuss potential risks and benefits during your consultation." },
  { q: "How effective is hormone-free birth control?", a: "Effectiveness varies depending on the method and how consistently it is used. Phexx has different effectiveness rates for typical use versus perfect use, which your healthcare provider can explain during your consultation." },
  { q: "When do I apply Phexx before sex?", a: "Phexx is typically applied vaginally shortly before intercourse according to prescribing instructions. Patients should carefully follow the directions provided by their clinician and pharmacy labeling." },
  { q: "Can I use Phexx with condoms?", a: "Yes. Phexx may be used alongside condoms, diaphragms, or other barrier methods. Combining methods may help improve pregnancy prevention effectiveness." },
  { q: "How quickly do hormonal side effects go away after stopping birth control?", a: "The timeline varies from person to person. Some women notice changes within weeks, while others may take several months to feel fully adjusted after stopping hormonal contraception." },
  { q: "Is hormone-free birth control safer?", a: "Different birth control options carry different risks and benefits. Hormone-free contraception may be preferable for some women, especially those advised to avoid estrogen, but every treatment decision should be individualized." },
  { q: "Can women with migraines use hormone-free contraception?", a: "Some women with migraines, especially migraines with aura, may be advised to avoid estrogen-containing contraception. A hormone-free option may be appropriate depending on individual medical history." },
  { q: "Can I get prescription birth control delivered discreetly?", a: "Yes. Approved prescriptions through Miley Health are shipped in discreet packaging to help protect patient privacy." },
  { q: "Do I need an in-person appointment?", a: "In many cases, no in-person appointment is required. Licensed clinicians review consultations online and determine whether treatment is appropriate based on medical history and symptoms." },
  { q: "Is Phexx used every day?", a: "No. Unlike daily birth control pills, Phexx is used shortly before intercourse rather than taken continuously each day." },
  { q: "How much does hormone-free birth control cost online?", a: "Pricing varies depending on insurance coverage, pharmacy fulfillment, and eligibility. Patients can review available options during the online consultation process." },
];

export default function BirthControlWithoutSideEffectsPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-hidden">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#9D174D] to-[#D8386C] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-tight mb-5">
                Looking for Birth Control Without the Hormonal Side Effects?
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed mb-4">
                No birth control is completely free of side effects, but many women are specifically looking to avoid the systemic
                hormonal side effects that can come with pills, patches, injections, or rings. Phexx, formerly known as Phexxi, is a
                prescription hormone-free vaginal gel used shortly before intercourse and may be an option worth exploring.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/90 leading-relaxed mb-8">
                Through Miley Health, licensed clinicians review every consultation before prescribing treatment, and approved
                prescriptions are delivered discreetly to your home.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <Cta>Get Started</Cta>
            </Reveal>
          </div>
          <Reveal direction="right" className="relative w-full h-[300px] sm:h-[400px] img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain" />
          </Reveal>
        </div>
      </section>

      {/* When Birth Control Causes More Problems */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight">
              When Birth Control Causes More Problems Than It Solves
            </h2>
          </Reveal>
          <Reveal direction="right" className="space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              For many women, hormonal birth control can feel like a tradeoff. While it helps prevent pregnancy, it may also come with
              side effects that affect everyday life. Mood changes, headaches, nausea, breast tenderness, weight fluctuation, and reduced
              libido are some of the most common reasons women start searching for alternatives. These experiences can impact
              relationships, energy levels, confidence, and overall well-being.
            </p>
            <p>
              For others, avoiding hormones is not just about comfort, it is medically important. Women with migraines with aura, a
              history of blood clots, certain cardiovascular risks, or estrogen-sensitive conditions may not be ideal candidates for
              estrogen-containing contraception. In those situations, a hormone-free birth control option may offer another path that a
              licensed clinician can evaluate based on individual health history.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A Birth Control Option Without Hormonal Side Effects */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-start">
          <Reveal direction="left" className="relative w-[200px] h-[220px] sm:w-[220px] sm:h-[240px] mx-auto lg:mx-0 img-zoom">
            <Image src="/images/bcwe-woman-icon.png" alt="Hand holding Phexx applicator" fill className="object-contain" />
          </Reveal>

          <Reveal direction="right">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight mb-6">
              A Birth Control Option Without the Hormonal Side Effects You&rsquo;re Tired Of
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Miley Health connects women with licensed clinicians who review medical history and contraception goals online. If
              appropriate, a clinician may prescribe Phexx, a hormone-free vaginal contraceptive gel designed for use shortly before
              intercourse.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Because Phexx contains no estrogen or progestin, it may appeal to women who want birth control without the hormonal side
              effects they previously experienced with traditional contraceptives. Approved prescriptions are shipped discreetly from a
              licensed pharmacy directly to the patient&rsquo;s home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore Phexx</h3>
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
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">How It Works</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Tell Us About You</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  Complete a short, secure online intake form that covers your medical history, current medications, and contraception
                  preferences.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. Clinician Review</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  A licensed healthcare provider reviews your information and may follow up with additional questions. If appropriate,
                  they can prescribe Phexx online.
                </p>
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Delivered to Your Door</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  Approved prescriptions are shipped through a licensed partner pharmacy in discreet packaging directly to your home.
                </p>
              </div>
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

      {/* What Changes */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              What Changes When You Switch to a Non-Hormonal Option
            </h2>
          </Reveal>
          <StaggerGroup className="space-y-6">
            {WHAT_CHANGES.map((item) => (
              <StaggerItem key={item.title}>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#9D174D] mb-1">{item.title}</h3>
                <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Is It Right For You */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight text-center mb-10">
              Is Hormone-Free Birth Control Right for You?
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
      <section className="w-full bg-gradient-to-br from-[#9D174D] to-[#D8386C] py-14 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal direction="up">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight">
              Say Goodbye to Hormonal Side Effects
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6">
              Explore a more private and convenient way to request hormone-free birth control online through Miley Health. Licensed
              clinicians review every consultation, and approved prescriptions ship discreetly to your door.
            </p>
            <Cta>Request Prescription for Birth Control Without Hormonal Side Effects</Cta>
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
