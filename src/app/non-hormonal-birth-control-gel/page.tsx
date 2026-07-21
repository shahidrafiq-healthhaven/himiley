import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
const EXPLORE_ITEMS = [
  { title: "Online consultation", desc: "Complete a secure intake form covering your medical history, medications, and contraception preferences from home." },
  { title: "Hormone-free gel", desc: "Phexx is a prescription vaginal contraceptive gel used shortly before intercourse instead of daily." },
  { title: "Clinician review", desc: "A licensed U.S. healthcare provider reviews each consultation and determines whether treatment is appropriate." },
  { title: "Discreet delivery", desc: "Approved prescriptions are shipped in plain packaging directly to your home for added privacy." },
];

const TESTIMONIALS = [
  { quote: "I wanted something hormone-free that didn't require an appointment in person. The process was simple, and everything arrived discreetly.", name: "Ashley M." },
  { quote: "The clinician review felt professional and easy. I appreciated having a non-invasive option without daily pills.", name: "Lauren T." },
  { quote: "I liked being able to complete everything online from home. Shipping was fast, and the packaging was very private.", name: "Nicole R." },
];

const WHY_CHOOSE = [
  { title: "No Hormones, No Systemic Side Effects", desc: "Because Phexx does not contain estrogen or progestin, it avoids systemic hormonal exposure. Many women specifically seek hormone-free birth control to avoid side effects such as mood swings, weight fluctuation, headaches, or reduced libido associated with hormonal contraception." },
  { title: "Use It Only When You Need It", desc: "Phexx is applied shortly before intercourse rather than taken daily. This on-demand approach may appeal to women who want contraception without committing to a continuous daily medication routine." },
  { title: "Non-Invasive and Self-Applied", desc: "Unlike IUDs, implants, or injections, a vaginal contraceptive gel does not require an insertion procedure, office visit, or implanted device. Women apply the gel themselves as needed." },
  { title: "Quick to Start, Easy to Stop", desc: "Women can begin or stop using Phexx on their own schedule. Since it is hormone-free, there is no hormonal adjustment period associated with starting or discontinuing use." },
];

const RIGHT_FOR_YOU = [
  { title: "Women Who Don't Want a Daily Pill", desc: "Some women prefer birth control that fits around their lifestyle rather than a daily routine. A prescription contraceptive gel like Phexx offers flexibility without requiring a daily pill or implanted device." },
  { title: "Women Who Have Had Negative Experiences With Hormones", desc: "Hormonal contraception can cause side effects for some women, including mood changes, headaches, breast tenderness, or reduced libido. A hormone-free gel avoids systemic hormonal exposure." },
  { title: "Women Who Want a Non-Invasive Option", desc: "Not every woman wants an IUD insertion, implant placement, or injection. A self-applied vaginal contraceptive gel may feel like a more comfortable and manageable alternative." },
  { title: "Women Who Value Privacy and Convenience", desc: "With Miley Health, women can complete a secure intake form online, connect with a licensed clinician, and receive discreet delivery directly to their home." },
];

const FAQS = [
  { q: "What is a non-hormonal birth control gel?", a: "A non-hormonal birth control gel is a vaginal contraceptive gel used to help prevent pregnancy without hormones like estrogen or progestin. Phexx is one example of a prescription hormone-free contraceptive gel." },
  { q: "What is Phexx?", a: "Phexxi, now also referred to as Phexx, is a prescription vaginal contraceptive gel designed for use shortly before intercourse." },
  { q: "How does Phexx work as a non-hormonal contraceptive?", a: "Phexx works locally within the vagina rather than changing hormone levels throughout the body. It is used shortly before intercourse according to prescribing instructions." },
  { q: "How effective is a non-hormonal birth control gel?", a: "Effectiveness depends on consistent and correct use. Your healthcare provider can discuss typical-use and perfect-use effectiveness rates during your consultation." },
  { q: "When do I apply the gel during sex?", a: "Phexx should be applied shortly before intercourse according to the instructions provided by your clinician and pharmacy labeling." },
  { q: "Does a non-hormonal birth control gel have side effects?", a: "Like any medication, Phexx may cause side effects in some users. Commonly reported effects can include vaginal irritation, itching, burning, or discomfort." },
  { q: "Can I get a non-hormonal birth control gel online?", a: "Yes. Telehealth platforms like Miley Health allow licensed clinicians to review online consultations and prescribe treatment if appropriate." },
  { q: "How much does a non-hormonal birth control gel cost through Miley Health?", a: "Pricing can vary depending on insurance coverage, pharmacy fulfillment, and eligibility. Patients can review available options during the consultation process." },
  { q: "Is Phexx used every day?", a: "No. Phexx is considered an on-demand contraceptive method and is typically used shortly before intercourse rather than daily." },
  { q: "Can I use Phexx with condoms?", a: "Yes. Phexx may be used with condoms and certain barrier methods. Combining contraceptive methods may improve pregnancy prevention effectiveness." },
  { q: "Who should not use a non-hormonal birth control gel?", a: "Certain medical conditions or sensitivities may affect whether Phexx is appropriate. A licensed healthcare provider reviews each patient's medical history before prescribing treatment." },
  { q: "Is a non-hormonal birth control gel invasive?", a: "No. Phexx is self-applied and does not require a procedure, implanted device, or office insertion." },
  { q: "Can I stop using Phexx anytime?", a: "Yes. Since Phexx is hormone-free and used only before intercourse, women can discontinue use whenever they choose." },
  { q: "Do I need an in-person doctor appointment?", a: "In many cases, no in-person appointment is necessary. Licensed clinicians review consultations online and determine whether treatment is appropriate based on your health history." },
  { q: "Is non-hormonal contraception better for women sensitive to hormones?", a: "Some women prefer hormone-free contraception because they previously experienced unwanted side effects with hormonal methods. A healthcare provider can help determine whether this approach fits your needs." },
];

export default function NonHormonalBirthControlGelPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#FCE8EB] to-[#FDEDE3] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="up">
            <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-[#111111] tracking-tight mb-5">
              Request and Get a Non-Hormonal Birth Control Gel Online
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              Phexx, formerly known as Phexxi, is a prescription hormone-free vaginal contraceptive gel designed for use shortly before
              intercourse rather than as a daily pill. Through Miley Health, licensed clinicians review every consultation before
              prescribing treatment, and approved prescriptions are delivered discreetly to your home in plain packaging.
            </p>
            <Cta>Get Started</Cta>
          </Reveal>
          <Reveal direction="right" className="relative w-full h-[360px] sm:h-[460px] img-zoom">
            <Image src="/images/nhbc-hero-box.png" alt="Miley delivery box with Phexx applicator" fill className="object-contain object-center" />
          </Reveal>
        </div>
      </section>

      {/* Looking for a Birth Control That Skips the Hormones */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight">
              Looking for a Birth Control That Skips the Hormones?
            </h2>
          </Reveal>
          <Reveal direction="right" className="space-y-4 text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            <p>
              Many women start exploring non-hormonal birth control after dealing with frustrating side effects from traditional
              contraception. Mood changes, headaches, weight fluctuation, reduced libido, and nausea can make hormonal birth control feel
              like more of a burden than a solution. Others may not feel comfortable with long-term methods like IUDs, implants, or
              injections and instead want a method they can use only when needed.
            </p>
            <p>
              For many women, the decision is also about control and flexibility. Some simply want a birth control option they can apply
              themselves without committing to a daily medication or an implanted device. Wanting a non-invasive, hormone-free method
              that fits your lifestyle and can be started or stopped on your own terms is a completely valid preference.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A Prescription Gel You Control */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#111111] tracking-tight">
              A Prescription Gel You Control, Delivered to Your Door
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Miley Health is a telehealth platform that connects women with licensed clinicians who review health history and
              contraception goals online. If appropriate, clinicians may prescribe Phexx, a hormone-free vaginal contraceptive gel
              designed for use shortly before intercourse.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              Instead of requiring a daily pill or long-term implanted device, Phexx offers an on-demand contraceptive option that women
              can use when needed. Approved prescriptions are shipped discreetly through a licensed pharmacy directly to the
              patient&rsquo;s home.
            </p>

            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-3">Why Women Explore Non-Hormonal Birth Control Gels</h3>
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
        <Reveal direction="up" className="max-w-[900px] mx-auto px-6 lg:px-0 text-center mb-10">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight">How It Works</h2>
        </Reveal>
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <StaggerGroup className="space-y-8">
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 1. Tell Us About You</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Complete a short, secure intake form that takes only a few minutes. The form covers health history, medications, and
                contraception goals.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 2. Clinician Review</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                A licensed healthcare provider reviews your submission and may follow up if additional information is needed. If
                appropriate, they may prescribe Phexx online.
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#9D174D] mb-2">Step 3. Delivered to Your Door</h3>
              <p className="text-[14px] sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                Approved prescriptions are shipped from a licensed partner pharmacy in discreet packaging directly to your home.
              </p>
            </StaggerItem>
          </StaggerGroup>
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

      {/* Why Choose */}
      <section className="w-full bg-[#FCE8EB] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal direction="up">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-8">
                Why Choose a Non-Hormonal Birth Control Gel?
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
              Is a Non-Hormonal Birth Control Gel Right for You?
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
          <Reveal direction="left">
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight">
              Start Your Online Consultation Today
            </h2>
          </Reveal>
          <Reveal direction="right">
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-6">
              Explore a more flexible and private way to request a non-hormonal birth control gel online through Miley Health. Licensed
              clinicians review every consultation, and approved prescriptions are shipped discreetly to your door.
            </p>
            <Cta>Request Prescription for Non-Hormonal Birth Control Gel</Cta>
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
