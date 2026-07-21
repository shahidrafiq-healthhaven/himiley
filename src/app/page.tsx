"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

import { useMemo, useRef, useState } from "react";

function FAQItem({
  question,
  answer,
  open,
  onToggle,
  withBorder = true,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  withBorder?: boolean;
}) {
  return (
    <div
      className={`py-6 flex items-start gap-6 transition-colors duration-200 hover:bg-[#FAFAFA] rounded-sm px-2 -mx-2 ${
        withBorder ? "border-b border-[#E0E0E0]" : ""
      }`}
    >
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold text-[#111111]">{question}</h3>
        <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
          <p className="text-[14px] text-[#555555] overflow-hidden">{answer}</p>
        </div>
      </div>
      <div className="mt-1">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="w-7 h-7 rounded-full border border-[#111111] flex items-center justify-center text-[18px] leading-none transition-all duration-300 ease-out hover:scale-110 hover:border-[#9D174D] hover:text-[#9D174D]"
        >
          <span className={`inline-block transition-transform duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`}>
            {open ? "–" : "+"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number>(0);
  const [hasFrequentUTI, setHasFrequentUTI] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submitInFlightRef = useRef(false);

  const { dobMax, dobMin } = useMemo(() => {
    const today = new Date();
    const max = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const min = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    return {
      dobMax: max.toISOString().split("T")[0],
      dobMin: min.toISOString().split("T")[0],
    };
  }, []);

  function validate(form: FormData) {
    const e: Record<string, string> = {};
    const requiredText = ["firstName", "lastName", "address", "city", "state", "zip", "country", "email", "phone"];
    for (const key of requiredText) {
      const v = (form.get(key) as string | null)?.trim() ?? "";
      if (!v) e[key] = "This field is required.";
    }
    const dob = form.get("dob") as string | null;
    if (!dob) {
      e.dob = "Date of birth is required.";
    } else if (dob > dobMax) {
      e.dob = "You must be at least 18 years old to use this service.";
    } else if (dob < dobMin) {
      e.dob = "Please enter a valid date of birth.";
    }
    const lastPeriodDate = form.get("lastPeriodDate") as string | null;
    if (!lastPeriodDate) e.lastPeriodDate = "This date is required.";
    const email = (form.get("email") as string | null) ?? "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    const phone = (form.get("phone") as string | null) ?? "";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) e.phone = "Enter a valid phone number.";
    const zip = (form.get("zip") as string | null) ?? "";
    if (!/^\d{4,10}$/.test(zip)) e.zip = "Enter a valid postal code.";
    const sex = form.get("sex") as string | null;
    if (!sex) e.sex = "Please select an option.";
    const monthly = form.get("monthlyIntercourse") as string | null;
    if (!monthly) e.monthlyIntercourse = "Please select an option.";
    if (hasFrequentUTI === true) {
      const proceedRisk = form.get("proceedRisk") as string | null;
      if (!proceedRisk) e.proceedRisk = "Please select an option.";
    }
    return e;
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (submitInFlightRef.current) return;
    submitInFlightRef.current = true;
    setSubmitStatus("idle");
    setSubmitError(null);
    const formEl = ev.currentTarget;
    const form = new FormData(formEl);
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      submitInFlightRef.current = false;
      const firstErrorField = formEl.elements.namedItem(Object.keys(v)[0]);
      const firstErrorEl =
        firstErrorField instanceof RadioNodeList ? (firstErrorField[0] as HTMLElement) : (firstErrorField as HTMLElement | null);
      firstErrorEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      firstErrorEl?.focus?.();
      return;
    }
    setIsSubmitting(true);
    try {
      const payload: Record<string, unknown> = {};
      form.forEach((value, key) => {
        payload[key] = value;
      });
      const idempotencyKey =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Idempotency-Key": idempotencyKey },
        body: JSON.stringify(payload),
      });
      let success = res.status === 200;
      let serverError: string | null = null;
      try {
        const json: unknown = await res.json();
        const isObj = (v: unknown): v is { ok?: unknown; emailSent?: unknown; error?: unknown; errors?: unknown } =>
          typeof v === "object" && v !== null;
        if (isObj(json)) {
          const okFalse = json.ok === false || json.ok === "false";
          const emailFalse = json.emailSent === false || json.emailSent === "false";
          if (okFalse || emailFalse) success = false;
          if (!success) {
            if (Array.isArray(json.errors) && json.errors.length > 0) {
              serverError = json.errors
                .map((d: unknown) =>
                  d && typeof d === "object" && "message" in d ? String((d as { message: unknown }).message) : null
                )
                .filter(Boolean)
                .join(" ");
            } else if (typeof json.error === "string") {
              serverError = json.error;
            }
          }
        }
      } catch {}
      if (success) {
        setSubmitStatus("success");
        setSubmitError(null);
        router.push("/thank-you");
      } else {
        setSubmitStatus("error");
        setSubmitError(serverError);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      submitInFlightRef.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col w-full font-inter overflow-x-clip">
      {/* Hero Section */}
      <section className="relative w-full bg-[#FCE8EB] overflow-hidden min-h-[560px] sm:min-h-[600px] lg:h-[650px] flex items-center">
        <div className="hidden sm:block absolute left-[-20%] top-[50%] -translate-y-1/2 w-[520px] h-[520px] lg:w-[750px] lg:h-[750px] z-[5] pointer-events-none">
          <Image src="/images/Ellipse 60 (2).png" alt="" fill className="object-contain" />
        </div>

        <div className="hidden md:block absolute left-[40%] top-[63%] w-[200px] h-[200px] lg:w-[230px] lg:h-[230px] z-[5] pointer-events-none">
          <Image src="/images/Isolation_Mode.png" alt="" fill className="object-contain" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full relative z-10 h-full">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <Reveal direction="up" className="w-full lg:w-[55%] flex flex-col space-y-6 sm:space-y-8 py-14 sm:py-20 lg:py-0 z-20">
              <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] leading-[1.05] font-semibold text-[#111111] tracking-tight">
                Hormone - Free <span className="text-[#9D174D]">Birth</span>
                <br />
                <span className="text-[#9D174D]">Control</span> On Your Terms
              </h1>

              <p className="text-[16px] sm:text-[19px] text-[#4A4A4A] max-w-[520px] leading-relaxed">
                Get access to Phexx, the hormone-free contraceptive gel prescribed online
                and delivered discreetly to your door.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2 sm:pt-4">
                <a href="#medical-information-form" className="btn-interactive group w-full sm:w-auto justify-center bg-[#9D174D] text-white px-8 sm:px-9 py-4 rounded-sm font-semibold text-[15px] flex items-center gap-2 hover:bg-[#83103F] shadow-md">
                  Start Consultation
                  <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>

                <a href="#about-phexx" className="btn-interactive w-full sm:w-auto justify-center bg-white text-[#111111] px-8 sm:px-11 py-4 rounded-sm font-semibold text-[15px] border border-gray-100 shadow-sm hover:border-gray-200">
                  Learn more
                </a>
              </div>
            </Reveal>

            <Reveal
              direction="scale"
              delay={0.15}
              className="w-full lg:w-[45%] h-[360px] sm:h-[500px] lg:h-[650px] relative flex items-end justify-center overflow-hidden lg:overflow-visible"
            >
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[620px] lg:h-[620px] z-0 pointer-events-none">
                <Image src="/images/Summertime Sadness.png" alt="" fill className="object-contain" />
              </div>

              <div className="relative w-full h-full z-10">
                <Image
                  src="/images/Frame 1171277263.png"
                  alt="A young woman with curly hair smiling and wearing a white tank top."
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="w-full bg-[#FCE8EB] border-t border-white/20 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <StaggerGroup className="flex flex-wrap items-center justify-center lg:justify-between gap-y-4">
            <StaggerItem className="flex items-center gap-3 px-5 sm:px-6 lg:px-10 py-2 lg:py-0 lg:border-r border-gray-400 lg:last:border-0">
              <div className="relative w-5 h-5">
                <Image src="/images/Vector.png" alt="" fill className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-[#111111] whitespace-nowrap uppercase tracking-wide">FDA-Approved Birth Control</span>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3 px-5 sm:px-6 lg:px-10 py-2 lg:py-0 lg:border-r border-gray-400 lg:last:border-0">
              <div className="relative w-12 h-5">
                <Image src="/images/Group 1171276448.png" alt="" fill className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-[#111111] whitespace-nowrap uppercase tracking-wide ml-[-8px]">Licensed Medical Providers</span>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3 px-5 sm:px-6 lg:px-10 py-2 lg:py-0 lg:border-r border-gray-400 lg:last:border-0">
              <div className="relative w-5 h-5">
                <Image src="/images/Vector (1).png" alt="" fill className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-[#111111] whitespace-nowrap tracking-wide">SECURE & CONFIDENTIAL</span>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3 px-5 sm:px-6 lg:px-10 py-2 lg:py-0 lg:border-r border-gray-400 lg:last:border-0">
              <div className="relative w-6 h-5">
                <Image src="/images/Group 1171276449.png" alt="" fill className="object-contain" />
              </div>
              <span className="text-[13px] font-medium text-[#111111] whitespace-nowrap uppercase tracking-wide">Discreet Home Delivery</span>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* How to Get Phexx Section */}
      <section id="how-it-works" className="w-full py-14 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#111111] tracking-tight">How to Get Phexx Rx</h2>
            <p className="text-[15px] sm:text-[18px] text-[#666666]">Getting Phexx is simple</p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <StaggerGroup className="relative pl-0 sm:pl-12 space-y-10 sm:space-y-16 lg:space-y-24">
              <div className="hidden sm:block absolute left-[19px] top-4 bottom-4 w-[1px] bg-gray-200 z-0" />

              <StaggerItem className="relative z-10 flex gap-4 sm:block">
                <div className="shrink-0 sm:absolute sm:left-[-45px] sm:top-0 w-10 h-10 rounded-full bg-[#D81B60] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-pink-100">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#111111]">Complete a quick online questionnaire</h3>
                  <p className="text-[16px] text-[#555555] leading-relaxed max-w-[400px]">
                    Answer a few medical questions to determine if Phexx is right for you.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="relative z-10 flex gap-4 sm:block">
                <div className="shrink-0 sm:absolute sm:left-[-45px] sm:top-0 w-10 h-10 rounded-full bg-[#00BCD4] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-cyan-100">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#111111]">Licensed provider review</h3>
                  <p className="text-[16px] text-[#555555] leading-relaxed max-w-[400px]">
                    A clinician reviews your information and writes your prescription if appropriate.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="relative z-10 flex gap-4 sm:block">
                <div className="shrink-0 sm:absolute sm:left-[-45px] sm:top-0 w-10 h-10 rounded-full bg-[#E91E63] flex items-center justify-center text-white text-sm font-bold shadow-md shadow-pink-100">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-[20px] font-bold text-[#111111]">Fast and discreet delivery</h3>
                  <p className="text-[16px] text-[#555555] leading-relaxed max-w-[400px]">
                    Your prescription is shipped directly to your door.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem className="pt-10">
                <a href="#medical-information-form" className="btn-interactive w-full sm:w-auto justify-center bg-[#9D174D] text-white px-10 py-4 rounded-sm font-semibold text-[15px] flex items-center gap-3 hover:bg-[#83103F] shadow-lg shadow-pink-50">
                  Request Phexx Prescription
                  <span className="text-xl">→</span>
                </a>
              </StaggerItem>
            </StaggerGroup>

            <Reveal direction="scale" className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] flex items-center justify-center lg:justify-end lg:pr-10">
              <div className="flex flex-col items-center gap-6 sm:gap-8 lg:hidden">
                <div className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]">
                  <div className="absolute inset-0 bg-[#E8E8FF] rounded-2xl" />
                  <div className="relative w-full h-full p-6">
                    <Image src="/images/3d cartoon style document with green tick icon 1.png" alt="Questionnaire" fill className="object-contain" />
                  </div>
                </div>

                <div className="relative w-[220px] h-[220px] sm:w-[240px] sm:h-[240px]">
                  <div className="absolute inset-0 bg-[#FFDDE2] rounded-2xl" />
                  <div className="relative w-full h-full p-4">
                    <Image src="/images/doctor 1.png" alt="Licensed Doctor" fill className="object-contain" />
                  </div>
                </div>

                <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]">
                  <div className="absolute inset-0 bg-[#F13A8E] rounded-full" />
                  <div className="relative w-full h-full p-6">
                    <Image src="/images/Group 1171276451.png" alt="Fast delivery" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="hidden lg:block relative w-full h-full">
                <div className="absolute top-0 right-[250px] w-[180px] h-[180px] z-10">
                  <div className="absolute inset-0 bg-[#E8E8FF] rounded-2xl z-0" />
                  <div className="relative w-full h-full z-10 p-6">
                    <Image src="/images/3d cartoon style document with green tick icon 1.png" alt="Questionnaire" fill className="object-contain" />
                  </div>
                </div>

                <div className="absolute top-[80px] right-[180px] w-[80px] h-[80px] rotate-[10deg] opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[1.5]">
                    <path d="M10,10 Q50,5 90,50" />
                    <path d="M85,40 L90,50 L75,52" />
                  </svg>
                </div>

                <div className="absolute top-[180px] right-0 w-[240px] h-[240px] z-20">
                  <div className="absolute inset-0 bg-[#FFDDE2] rounded-2xl z-0" />
                  <div className="relative w-full h-full z-10 p-4">
                    <Image src="/images/doctor 1.png" alt="Licensed Doctor" fill className="object-contain" />
                  </div>
                </div>

                <div className="absolute bottom-[150px] right-[180px] w-[80px] h-[80px] rotate-[160deg] opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-black stroke-[1.5]">
                    <path d="M10,10 Q50,5 90,50" />
                    <path d="M85,40 L90,50 L75,52" />
                  </svg>
                </div>

                <div className="absolute bottom-0 right-[220px] w-[200px] h-[200px] z-10">
                  <div className="absolute inset-0 bg-[#F13A8E] rounded-full z-0" />
                  <div className="relative w-full h-full z-10 p-6">
                    <Image src="/images/Group 1171276451.png" alt="Fast delivery" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is Phexx Section */}
      <section id="about-phexx" className="w-full py-14 sm:py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal
              direction="left"
              className="relative order-2 lg:order-1 min-h-[480px] sm:min-h-[560px] lg:min-h-[650px] w-full flex items-center justify-center lg:justify-start lg:pl-20 overflow-visible pt-16 sm:pt-20"
            >
              <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] overflow-visible bg-[#4793AF]">
                <Image src="/images/Rectangle 34624309.png" alt="" fill className="object-cover rounded-sm" />

                <div className="absolute top-[-140px] sm:top-[-180px] bottom-[-80px] sm:bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[240px] sm:w-[300px] lg:w-[400px] z-40 overflow-visible">
                  <Image
                    src="/images/Applicator_with_Gel_version01_00000 1.png"
                    alt="Phexx Applicator"
                    fill
                    className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.3)]"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="order-1 lg:order-2 flex flex-col space-y-8">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-[#111111] tracking-tight">What is Phexx?</h2>

              <div className="space-y-6">
                <p className="text-[16px] sm:text-[18px] text-[#4A4A4A] leading-relaxed max-w-[500px]">
                  Phexx is a hormone-free birth control gel used right before sex.
                  It works by maintaining vaginal pH levels that make it difficult for
                  sperm to reach the egg.
                </p>

                <ul className="space-y-5 pt-4">
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D81B60] fill-[#D81B60]/10" />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#111111]">Hormone-free contraception</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BCD4] fill-[#00BCD4]/10" />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#111111]">Used only when needed</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#D81B60] fill-[#D81B60]/10" />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#111111]">Prescription required</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BCD4] fill-[#00BCD4]/10" />
                    <span className="text-[16px] sm:text-[18px] font-medium text-[#111111]">FDA approved</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Women Choose Phexx Section */}
      <section className="w-full relative overflow-hidden">
        <Image src="/images/Rectangle 34624311.png" alt="" fill className="object-cover" />

        <div className="relative z-10 max-w-[1200px] mx-auto min-h-[600px]">
          <div className="w-full lg:w-[58%] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
            <div className="w-full max-w-[640px]">
              <Reveal direction="up" as="div">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold text-white tracking-tight mb-8 text-center">
                  Why Women Choose Phexx ?
                </h2>
              </Reveal>

              <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/images/icon-hormone 2.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Hormone-Free</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">No daily hormones or systemic exposure.</p>
                </StaggerItem>

                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/images/Group 788.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Use Only When Needed</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">Use right before sex instead of taking daily medication.</p>
                </StaggerItem>

                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/images/icon-woman-controlled 1.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Non-Systemic</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">Works locally without affecting your natural hormones.</p>
                </StaggerItem>

                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/WWWE.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Doctor Prescribed Online</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">Licensed providers review your consultation.</p>
                </StaggerItem>

                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/EEE.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Easy to use</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">Simple applicator designed for comfort.</p>
                </StaggerItem>

                <StaggerItem className="card-interactive bg-white rounded-md p-5 flex flex-col items-center text-center space-y-2 min-h-[150px] justify-center">
                  <div className="relative w-10 h-10 mb-1">
                    <Image src="/EEE22.png" alt="" fill className="object-contain" />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#111111] leading-tight">Discreet Delivery</h3>
                  <p className="text-[11px] text-[#888888] leading-snug">Shipped privately to your door.</p>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[42%] z-20">
            <Image
              src="/images/Gemini_Generated_Image_61ju2w61ju2w61ju (1) 1.png"
              alt="Woman holding Phexx applicator"
              fill
              className="object-contain object-bottom object-right"
            />
            <div className="absolute bottom-[18%] left-[25%] w-[90px] h-[280px] z-30" style={{ transform: "rotate(-25deg)" }}>
              <Image src="/images/Applicator_with_Gel_version01_00029 1.png" alt="Phexx Applicator" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* How Phexx Works Section */}
      <section className="w-full py-14 sm:py-20 bg-[#F5F5F5]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="text-center mb-14 space-y-3">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#111111] tracking-tight">How Phexx Works</h2>
            <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-[#555555]">
              Phexx is applied right before sex or up to 1 hour before.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 items-start">
            <StaggerItem className="flex flex-col items-center text-center space-y-4">
              <div className="card-interactive relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden">
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
                  <Image src="/images/prep 1.png" alt="Prep applicator" fill className="object-contain" />
                </div>
              </div>
              <div className="space-y-2 max-w-[260px]">
                <h3 className="text-[16px] font-semibold text-[#111111]">1. Prep</h3>
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  Insert the plunger rod into the applicator and remove the cap.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center text-center space-y-4">
              <div className="card-interactive relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden">
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
                  <Image src="/images/push 1.png" alt="Apply Phexx" fill className="object-contain" />
                </div>
              </div>
              <div className="space-y-2 max-w-[260px]">
                <h3 className="text-[16px] font-semibold text-[#111111]">2. Apply</h3>
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  Gently insert the applicator and press the plunger to release the gel.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center text-center space-y-4">
              <div className="card-interactive relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden">
                <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]">
                  <Image src="/images/prevent 1.png" alt="Protect with Phexx" fill className="object-contain" />
                </div>
              </div>
              <div className="space-y-2 max-w-[260px]">
                <h3 className="text-[16px] font-semibold text-[#111111]">3. Protect</h3>
                <p className="text-[14px] text-[#666666] leading-relaxed">
                  Remove the applicator. Phexx works by maintaining vaginal pH levels that
                  reduce sperm mobility.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-14 sm:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-semibold text-[#111111]">Frequently asked questions</h2>
            <a href="#medical-information-form" className="btn-interactive w-full sm:w-auto ml-0 sm:ml-auto justify-center bg-[#9D174D] text-white px-6 py-3 text-sm font-semibold rounded-sm flex items-center gap-2 hover:bg-[#7E0F3E]">
              Request Phexx (Non-hormonal birth control) <span className="text-base">→</span>
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="border-t border-[#E0E0E0]">
            <FAQItem
              question="What is Phexx?"
              answer="Phexx is a prescription, hormone-free contraceptive gel used before sex."
              open={faqOpenIndex === 0}
              onToggle={() => setFaqOpenIndex((i) => (i === 0 ? -1 : 0))}
            />
            <FAQItem
              question="Do I need a prescription?"
              answer="Yes. A licensed provider reviews your consultation before prescribing."
              open={faqOpenIndex === 1}
              onToggle={() => setFaqOpenIndex((i) => (i === 1 ? -1 : 1))}
            />
            <FAQItem
              question="How fast can I get Phexx?"
              answer="Most prescriptions are reviewed within 24 hours."
              open={faqOpenIndex === 2}
              onToggle={() => setFaqOpenIndex((i) => (i === 2 ? -1 : 2))}
            />
            <FAQItem
              question="Can I use Phexx with other types of birth control?"
              answer="Phexx doesn't have to be used alone. You can use it with other contraceptives including condoms or diaphragms, but not with a vaginal ring."
              open={faqOpenIndex === 3}
              onToggle={() => setFaqOpenIndex((i) => (i === 3 ? -1 : 3))}
            />
            <FAQItem
              question="Is Phexx hormone-free?"
              answer="Yes. Phexx works locally without hormones."
              open={faqOpenIndex === 4}
              onToggle={() => setFaqOpenIndex((i) => (i === 4 ? -1 : 4))}
              withBorder={false}
            />
          </Reveal>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <Reveal direction="scale" className="relative w-full h-[200px] sm:h-[240px] lg:h-[300px] overflow-hidden bg-[#F3F3F3]">
            <Image src="/images/Rectangle 34624318.png" alt="" fill className="object-cover grayscale" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="flex flex-col items-center">
                <div className="h-px bg-white/80 w-full max-w-[320px]" />
                <a
                  href="#medical-information-form"
                  className="btn-interactive inline-flex items-center justify-center w-full max-w-[320px] py-3 bg-[#FF2F92] text-white text-[12px] font-semibold tracking-[0.05em] shadow-md hover:opacity-95 mt-2 mb-2"
                >
                  Fill Medical information form
                </a>
                <div className="flex flex-col items-center">
                  <div className="h-px bg-white/80 w-full max-w-[320px]" />
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/80 mt-0" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Medical Information Form Section */}
      <section id="medical-information-form" className="w-full py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <Reveal direction="up" className="text-center mb-10 space-y-4">
            <h2 className="text-[30px] lg:text-[32px] font-semibold text-[#111111]">Medical information form</h2>
            <button className="inline-flex items-center justify-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.12em] rounded-full bg-[#FF2F92] text-white">
              To get your prescription
            </button>
            <p className="text-[14px] lg:text-[15px] text-[#555555] max-w-[560px] mx-auto">
              We&apos;d love to make this form shorter, but everything we ask is required to provide your prescription!
            </p>
            <p className="text-[12px] text-[#777777]">This is information is kept confidential to the doctor and pharmacist.</p>
          </Reveal>

          <Reveal direction="up" delay={0.1} as="div">
          <form className="space-y-10" onSubmit={handleSubmit} noValidate>
            <div>
              <h3 className="text-[15px] font-semibold text-[#111111] mb-4">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="text-[13px] font-medium text-[#111111]">
                    First Name<span className="text-[#FF2F92]">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className={`h-10 border ${errors.firstName ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                    placeholder="First name"
                  />
                  {errors.firstName && <p className="text-[12px] text-pink-500 animate-field-error">{errors.firstName}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName" className="text-[13px] font-medium text-[#111111]">
                    Last Name<span className="text-[#FF2F92]">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className={`h-10 border ${errors.lastName ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                    placeholder="Last name"
                  />
                  {errors.lastName && <p className="text-[12px] text-pink-500 animate-field-error">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="dob" className="text-[13px] font-medium text-[#111111]">
                    What&apos;s Your Date of Birth?<span className="text-[#FF2F92]">*</span>
                  </label>
                  <p className="text-[12px] text-pink-500">This service is for adults aged 18 and over.</p>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    min={dobMin}
                    max={dobMax}
                    className={`h-10 border ${errors.dob ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                  />
                  {errors.dob && <p className="text-[12px] text-pink-500 animate-field-error">{errors.dob}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-[13px] font-medium text-[#111111]">
                    Please provide a cell phone number for prescription confirmation.<span className="text-[#FF2F92]">*</span>
                  </label>
                  <p className="text-[12px] text-pink-500">We never spam or send any marketing texts.</p>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className={`h-10 border ${errors.phone ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                    placeholder="(555) 555-5555"
                  />
                  {errors.phone && <p className="text-[12px] text-pink-500 animate-field-error">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <label htmlFor="email" className="text-[13px] font-medium text-[#111111]">
                  Please provide an e-mail for prescription information.<span className="text-[#FF2F92]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`h-10 border ${errors.email ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                  placeholder="name@example.com"
                />
                {errors.email && <p className="text-[12px] text-pink-500 animate-field-error">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[15px] font-semibold text-[#111111]">Address</h3>

              <div className="flex flex-col gap-1">
                <label htmlFor="address" className="text-[13px] font-medium text-[#111111]">
                  Address<span className="text-[#FF2F92]">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className={`h-10 border ${errors.address ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                  placeholder="Street address"
                />
                {errors.address && <p className="text-[12px] text-pink-500 animate-field-error">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="address2" className="text-[13px] font-medium text-[#111111]">Address line 2</label>
                  <input id="address2" type="text" name="address2" className="h-10 border border-[#E0E0E0] focus:border-[#FF2F92] outline-none px-3 text-[13px]" placeholder="" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="city" className="text-[13px] font-medium text-[#111111]">
                    City/Town<span className="text-[#FF2F92]">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    className={`h-10 border ${errors.city ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                    placeholder=""
                  />
                  {errors.city && <p className="text-[12px] text-pink-500 animate-field-error">{errors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="state" className="text-[13px] font-medium text-[#111111]">
                    State<span className="text-[#FF2F92]">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    defaultValue=""
                    className={`h-10 border ${errors.state ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px] bg-white`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {US_STATES.map((s) => (
                      <option key={s.code} value={s.code}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p className="text-[12px] text-pink-500 animate-field-error">{errors.state}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="zip" className="text-[13px] font-medium text-[#111111]">
                    Zip code<span className="text-[#FF2F92]">*</span>
                  </label>
                  <input
                    id="zip"
                    type="text"
                    name="zip"
                    className={`h-10 border ${errors.zip ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                  />
                  {errors.zip && <p className="text-[12px] text-pink-500 animate-field-error">{errors.zip}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="country" className="text-[13px] font-medium text-[#111111]">
                    Country<span className="text-[#FF2F92]">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    defaultValue=""
                    className={`h-10 border ${errors.country ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px] bg-white`}
                  >
                    <option value="" disabled>
                      Select an country
                    </option>
                    <option value="United State">United State</option>
                  </select>
                  {errors.country && <p className="text-[12px] text-pink-500 animate-field-error">{errors.country}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="space-y-3">
                  <p className="text-[13px] font-medium text-[#111111]">What is your sex?</p>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="sex" value="Male" className="accent-[#FF2F92]" />
                      <span>Male</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="sex" value="Female" className="accent-[#FF2F92]" />
                      <span>Female</span>
                    </label>
                  </div>
                  {errors.sex && <p className="text-[12px] text-pink-500 animate-field-error">{errors.sex}</p>}
                </div>

                <div className="space-y-3">
                  <p className="text-[13px] font-medium text-[#111111]">Do you have frequent UTIs? (3 or more per year)*</p>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="uti" value="Yes" className="accent-[#FF2F92]" onChange={() => setHasFrequentUTI(true)} />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="uti" value="No" className="accent-[#FF2F92]" onChange={() => setHasFrequentUTI(false)} />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>

              {hasFrequentUTI === true && (
                <div className="space-y-4">
                  <p className="text-[13px] font-medium text-[#111111]">
                    According to the safety profile, Phexxi should be avoided in women with a history of recurrent urinary tract infections or with urinary tract
                    abnormalities (increasing the risk of ascending infections). Would you like to proceed despite these risks?
                  </p>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="proceedRisk" value="Yes" className="accent-[#FF2F92]" />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="proceedRisk" value="No" className="accent-[#FF2F92]" />
                      <span>No</span>
                    </label>
                  </div>
                  {errors.proceedRisk && <p className="text-[12px] text-pink-500 animate-field-error">{errors.proceedRisk}</p>}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="lastPeriodDate" className="text-[13px] font-medium text-[#111111]">What was the first day of your last period?*</label>
                  <p className="text-[12px] text-pink-500">Sorry, we are required to ask this!</p>
                  <input
                    id="lastPeriodDate"
                    type="date"
                    name="lastPeriodDate"
                    max={new Date().toISOString().split("T")[0]}
                    className={`h-10 border ${errors.lastPeriodDate ? "border-[#FF2F92]" : "border-[#E0E0E0]"} focus:border-[#FF2F92] outline-none px-3 text-[13px]`}
                  />
                  {errors.lastPeriodDate && <p className="text-[12px] text-pink-500 animate-field-error">{errors.lastPeriodDate}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-medium text-[#111111]">Do you have a history of urinary tract abnormalities?</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="utiHistory" value="Yes" className="accent-[#FF2F92]" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="utiHistory" value="No" className="accent-[#FF2F92]" />
                    <span>No</span>
                  </label>
                </div>
                {errors.utiHistory && <p className="text-[12px] text-pink-500 animate-field-error">{errors.utiHistory}</p>}
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-medium text-[#111111]">Approximately how many times do you have intercourse monthly?*</p>
                <div className="flex flex-col gap-2 text-[13px] text-[#111111]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="monthlyIntercourse" value="Less than 12 times a month" className="accent-[#FF2F92]" />
                    <span>Less than 12 times a month</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="monthlyIntercourse" value="12–24 times a month" className="accent-[#FF2F92]" />
                    <span>12–24 times a month</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="monthlyIntercourse" value="More than 24 times a month" className="accent-[#FF2F92]" />
                    <span>More than 24 times a month</span>
                  </label>
                </div>
                {errors.monthlyIntercourse && <p className="text-[12px] text-pink-500 animate-field-error">{errors.monthlyIntercourse}</p>}
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-medium text-[#111111]">
                  Have you had an adverse reaction to any form of birth control (e.g. irregular cycles/period, moodiness, breast tenderness, weight gain, acne, etc)?
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="adverseReaction" value="Yes" className="accent-[#FF2F92]" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="adverseReaction" value="No" className="accent-[#FF2F92]" />
                    <span>No</span>
                  </label>
                </div>
                {errors.adverseReaction && <p className="text-[12px] text-pink-500 animate-field-error">{errors.adverseReaction}</p>}
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="healthNotes" className="text-[13px] font-medium text-[#111111]">
                    Do you have any questions or is there anything else we should know about your health?
                  </label>
                  <textarea
                    id="healthNotes"
                    name="healthNotes"
                    className="min-h-[70px] border border-[#E0E0E0] focus:border-[#FF2F92] outline-none px-3 py-2 text-[13px] resize-y"
                    placeholder="Type your answer here..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="drugAllergies" className="text-[13px] font-medium text-[#111111]">Do you have any drug allergies? List below or type none.</label>
                  <textarea
                    id="drugAllergies"
                    name="drugAllergies"
                    className="min-h-[70px] border border-[#E0E0E0] focus:border-[#FF2F92] outline-none px-3 py-2 text-[13px] resize-y"
                    placeholder="List allergies or type none..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="medications" className="text-[13px] font-medium text-[#111111]">Please list any current medications you&apos;re taking for the Pharmacist.</label>
                  <textarea
                    id="medications"
                    name="medications"
                    className="min-h-[70px] border border-[#E0E0E0] focus:border-[#FF2F92] outline-none px-3 py-2 text-[13px] resize-y"
                    placeholder="Type your answer here..."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-[#111111]">Do you have prescription insurance?</span>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="hasInsurance" value="Yes" className="accent-[#FF2F92]" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="hasInsurance" value="No" className="accent-[#FF2F92]" />
                    <span>No</span>
                  </label>
                </div>
                {errors.hasInsurance && <p className="text-[12px] text-pink-500 animate-field-error">{errors.hasInsurance}</p>}
              </div>

              <div className="space-y-4">
                <p className="text-[13px] font-medium text-[#111111]">
                  Most insurance covers Phexxi. However, there is a chance your insurance may not cover Phexxi. We will notify you. Would you like to proceed?
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[13px] text-[#111111]">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="proceedInsurance" value="Yes" className="accent-[#FF2F92]" />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="proceedInsurance" value="No" className="accent-[#FF2F92]" />
                    <span>No</span>
                  </label>
                </div>
                {errors.proceedInsurance && <p className="text-[12px] text-pink-500 animate-field-error">{errors.proceedInsurance}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button
                  type="submit"
                  id="submit_form"
                  disabled={isSubmitting}
                  className="btn-interactive w-full py-3 bg-[#9D174D] text-white text-[13px] font-semibold tracking-wide uppercase border border-[#9D174D] hover:bg-[#7E0F3E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D174D] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
                      Submitting…
                    </span>
                  ) : (
                    "Submit Form"
                  )}
                </button>
                <button
                  type="reset"
                  className="btn-interactive w-full py-3 bg-white text-[#FF2F92] text-[13px] font-semibold tracking-wide uppercase border border-[#FF2F92] hover:bg-[#FFF0F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2F92]"
                >
                  Reset
                </button>
              </div>
              {submitStatus === "success" && (
                <div className="text-[13px] text-green-600 animate-field-error">Thank you! Your information was sent successfully.</div>
              )}
              {submitStatus === "error" && (
                <div className="text-[13px] text-pink-600 animate-field-error">
                  {submitError || "Submission failed. Please try again."}
                </div>
              )}
            </div>
          </form>
          </Reveal>
        </div>
      </section>

      <Reveal direction="up">
        <Footer variant="home" />
      </Reveal>
    </div>
  );
}

const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
] as const;
