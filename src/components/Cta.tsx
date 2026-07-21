import Link from "next/link";

const CTA_CLASS =
  "btn-interactive group inline-flex w-full max-w-full sm:w-fit items-center justify-center gap-2 bg-[#9D174D] text-white px-5 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold text-[14px] sm:text-[15px] text-center shadow-md hover:bg-[#83103F]";

export default function Cta({ children = "Request Phexx Prescription" }: { children?: string }) {
  return (
    <Link href="/#medical-information-form" className={CTA_CLASS}>
      {children}
      <span className="text-xl shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
    </Link>
  );
}
