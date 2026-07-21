import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const COMPARISON = [
  { option: "Phexxi (Phexx)", upfront: "Varies ($0–$435 per box)", ongoing: "per use", hormoneFree: "Yes", useType: "On-demand" },
  { option: "Birth Control Pill", upfront: "Low to moderate", ongoing: "Monthly", hormoneFree: "Usually no", useType: "Daily" },
  { option: "Condoms / Spermicide", upfront: "Low", ongoing: "per use", hormoneFree: "Yes", useType: "On-demand" },
  { option: "Copper IUD", upfront: "Higher upfront", ongoing: "Minimal after placement", hormoneFree: "Yes", useType: "Long-term" },
];

const FAQS = [
  {
    q: "What does Phexxi cost without insurance?",
    a: "Without insurance, Phexxi may cost approximately $375 to $435 per box, depending on the pharmacy. Each box contains 12 prefilled applicators. Pricing may vary based on location and available discounts.",
  },
  {
    q: "Does Medicaid cover Phexxi?",
    a: "Coverage may vary. Manufacturer savings offers are not valid for Medicaid or other federal or state healthcare programs.",
  },
  {
    q: "Is Phexxi covered by insurance?",
    a: "Many commercial insurance plans cover Phexxi. Some patients may qualify for $0 copay coverage, depending on their insurance plan and eligibility.",
  },
  {
    q: "Does Miley Health check insurance coverage?",
    a: "Yes. Miley Health helps check insurance coverage upfront, giving patients a clearer idea of expected costs before receiving a prescription.",
  },
  {
    q: "How much is Phexxi with insurance?",
    a: "With insurance, Phexxi cost may be significantly lower. Some patients pay $0, while others may pay a copay depending on coverage and deductible requirements.",
  },
  {
    q: "Does pharmacy choice affect Phexxi cost?",
    a: "Yes. Retail pharmacies, specialty pharmacies, and mail-order pharmacies may have different pricing for Phexxi.",
  },
  {
    q: "Are there savings programs available for Phexxi?",
    a: "Yes. Manufacturer savings programs may help reduce Phexxi cost for eligible patients. Some uninsured patients may qualify for $0 first prescription and reduced refill pricing.",
  },
  {
    q: "Is Phexxi more expensive than other birth control?",
    a: "It depends. Some methods have lower monthly costs, while others have higher upfront costs. Phexxi offers on-demand, hormone-free contraception, which may influence cost comparisons.",
  },
  {
    q: "Is Phexxi free with insurance?",
    a: "Some commercially insured patients may receive Phexxi at $0 copay, depending on plan coverage and eligibility",
  },
  {
    q: "Can uninsured patients still get Phexxi?",
    a: "Yes. Uninsured patients may qualify for manufacturer savings programs that reduce Phexxi cost, including reduced refill pricing.",
  },
];

export default function PhexxiCostPage() {
  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero */}
      <section className="w-full bg-gradient-to-br from-[#FCE8EB] to-[#FDF3EE] py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal direction="up">
            <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold text-[#111111] tracking-tight max-w-[700px] mb-5">
              What Determines the Price You Pay for Phexxi?
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-4">
              Phexxi, now called Phexx, is a{" "}
              <span className="text-[#9D174D] font-semibold">prescription-only, hormone-free contraceptive gel</span>. Because it
              requires a prescription, the amount you pay can vary.{" "}
              <span className="text-[#9D174D] font-semibold">There is no single flat price for everyone.</span>
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              Several factors can influence the cost of Phexxi, including insurance coverage, pharmacy pricing, and eligibility for
              manufacturer savings programs.
            </p>

            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111111] mb-4">Insurance Coverage</h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
              Insurance plays one of the biggest roles in determining Phexxi cost. Many{" "}
              <span className="text-[#9D174D] font-semibold">commercial insurance plans cover Phexx at a $0 copay</span>, depending on
              plan benefits and eligibility.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-2">
              For patients without insurance, there may still be options. Some uninsured individuals may qualify for:
            </p>
            <ul className="space-y-1 text-[14px] sm:text-[16px] mb-3">
              <li className="text-[#9D174D] font-semibold">$0 for the first prescription</li>
              <li className="text-[#9D174D] font-semibold">As little as $25 for refills through a patient savings program</li>
              <li className="text-[#4A4A4A]">Reduced out-of-pocket costs depending on eligibility</li>
            </ul>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              It is important to note that{" "}
              <span className="text-[#9D174D] font-semibold">these offers are not valid for Medicaid or other federal or state healthcare programs</span>.
            </p>

            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111111] mb-4">Pharmacy Choice</h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
              The pharmacy you use can also impact the price. Retail pharmacy pricing may differ from{" "}
              <span className="text-[#9D174D] font-semibold">mail-order or specialty pharmacy pricing</span>. In some cases,
              delivery-based pharmacies may offer additional convenience or savings.
            </p>

            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#111111] mb-4">Manufacturer Savings Programs</h2>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
              Savings programs may help reduce out-of-pocket costs for eligible patients with commercial insurance. These programs can
              significantly lower the price, especially for individuals who would otherwise pay full retail cost.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
              Because several factors influence Phexxi price, it is helpful to check coverage and eligibility before starting treatment.
              This can help you understand your expected cost upfront.
            </p>
          </Reveal>

          <Reveal direction="right" className="relative w-full h-[360px] lg:h-[520px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-hero-applicator.png" alt="Phexx Applicator" fill className="object-contain object-center" />
          </Reveal>
        </div>
      </section>

      {/* Cash vs Insurance */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up" className="text-center mb-10">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-4">
            Breaking Down Phexxi Cost: Cash Price vs. Insurance
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#666666]">
            The out-of-pocket cost for Phexxi can vary widely depending on whether you pay cash or use insurance.
          </p>
          </Reveal>

          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] mb-3">Cash Price</h3>
          <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
            Without insurance, Phexxi can cost more. For example,{" "}
            <span className="text-[#9D174D] font-semibold">GoodRx currently lists one box of Phexx at approximately $375 to $435</span>,
            depending on the pharmacy location and pricing. Each box contains{" "}
            <span className="text-[#9D174D] font-semibold">12 prefilled applicators</span>.
          </p>
          <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-8">
            Because Phexx is used on demand, how long one box lasts depends on individual use patterns.
          </p>

          <Reveal direction="up">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111111] mb-3">Insurance Price</h3>
          <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-2">
            With insurance, many patients may pay <span className="text-[#9D174D] font-semibold">significantly less</span>. Some
            commercially insured patients may qualify for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[14px] sm:text-[16px] text-[#4A4A4A] mb-4">
            <li>$0 copay coverage</li>
            <li>Reduced copay pricing</li>
            <li>Manufacturer savings programs</li>
            <li>Discounted refill pricing</li>
          </ul>
          <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed mb-3">
            Coverage varies by insurance plan. Copays, deductibles, and pharmacy benefits can all affect final cost.
          </p>
          <p className="text-[14px] sm:text-[16px] text-[#4A4A4A] leading-relaxed">
            Miley Health helps simplify this process by{" "}
            <span className="text-[#9D174D] font-semibold">checking insurance coverage upfront</span>. This helps provide a clearer idea
            of cost before moving forward.
          </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          <div>
            <Reveal direction="up">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#111111] tracking-tight mb-10">
                Cost Comparison: Phexxi vs Other Birth Control Options
              </h2>
            </Reveal>

            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {COMPARISON.map((c) => (
                <StaggerItem key={c.option} className="card-interactive rounded-sm p-4 -m-4">
                  <p className="text-[18px] font-bold text-[#9D174D] border-b border-[#E0E0E0] pb-2 mb-3">Option</p>
                  <p className="text-[16px] font-semibold text-[#111111] mb-3">{c.option}</p>
                  <p className="text-[13px] font-bold text-[#9D174D] mb-1">Upfront Cost</p>
                  <p className="text-[14px] text-[#4A4A4A] mb-3">{c.upfront}</p>
                  <p className="text-[13px] font-bold text-[#9D174D] mb-1">Ongoing Cost</p>
                  <p className="text-[14px] text-[#4A4A4A] mb-3">{c.ongoing}</p>
                  <p className="text-[13px] font-bold text-[#9D174D] mb-1">Hormone-Free</p>
                  <p className="text-[14px] text-[#4A4A4A] mb-3">{c.hormoneFree}</p>
                  <p className="text-[13px] font-bold text-[#9D174D] mb-1">Use Type</p>
                  <p className="text-[14px] text-[#4A4A4A]">{c.useType}</p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal direction="right" className="relative w-full h-[360px] lg:h-[460px] hidden lg:block img-zoom">
            <Image src="/images/phexxi-cost-comparison-hand.jpg" alt="Birth control pill and condom" fill className="object-contain object-center" />
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
            <FaqAccordion items={FAQS} columns={2} />
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
