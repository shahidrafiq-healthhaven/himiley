"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Magnetic } from "@/components/motion/Interactive";

const NAV_LINK_CLASS =
  "relative text-[14px] font-medium text-[#111111] hover:text-gray-500 transition-colors whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#9D174D] after:transition-all after:duration-300 hover:after:w-full";

const PHEXXI_LINKS = [
  { href: "/phexxibirthcontrol", label: "Phexxi Birth Control" },
  { href: "/phexxi-cost", label: "Phexxi Cost" },
  { href: "/phexxi-guide", label: "Phexxi Guide" },
  { href: "/phexxi-side-effects", label: "Phexxi Side Effects" },
  { href: "/birth-control-without-estrogen", label: "Birth Control Without Estrogen" },
  { href: "/birth-control-without-side-effects", label: "Birth Control Without Side Effects | Miley Health" },
  { href: "/non-hormonal-birth-control", label: "Non-Hormonal Birth Control | Miley Health" },
  { href: "/non-hormonal-birth-control-gel", label: "Non-Hormonal Birth Control Gel | Miley Health" },
  { href: "/on-demand-birth-control", label: "On-Demand Birth Control | Miley Health" },
  { href: "/vaginal-contraceptive-gel", label: "Vaginal Contraceptive Gel | Miley Health" },
];

const Header = () => {
  const [phexxiOpen, setPhexxiOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-shadow duration-300 ease-out ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      <div className="w-full bg-black text-white text-center text-[12px] py-2">
        Hormone-Free Birth Control Option Available Online
      </div>
      <div
        className={`max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between transition-[height,padding] duration-300 ease-out py-3 ${scrolled ? "sm:h-[70px]" : "sm:h-[85px]"} sm:py-0`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="block transition-transform duration-200 hover:scale-[1.03]">
            <div className="relative h-[48px] sm:h-[55px] w-[160px] sm:w-[180px]">
              <Image
                src="/images/Group 1171276437.png"
                alt="Miley"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation and Button Section */}
        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex items-center gap-10">
            <Link href="/#how-it-works" className={NAV_LINK_CLASS}>
              How It Works
            </Link>
            <Link href="/#about-phexx" className={NAV_LINK_CLASS}>
              About Phexx
            </Link>
            <Link href="/#safety" className={NAV_LINK_CLASS}>
              Safety
            </Link>
            <Link href="/#faq" className={NAV_LINK_CLASS}>
              FAQ
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setPhexxiOpen(true)}
              onMouseLeave={() => setPhexxiOpen(false)}
            >
              <button
                type="button"
                onClick={() => setPhexxiOpen((v) => !v)}
                aria-expanded={phexxiOpen}
                className={`flex items-center gap-1 ${NAV_LINK_CLASS}`}
              >
                Phexxi/Phexx
                <span className={`text-[10px] transition-transform duration-200 ${phexxiOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              <AnimatePresence>
                {phexxiOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-full pt-3 w-[280px] z-50"
                  >
                    <div className="bg-white border border-gray-100 rounded-sm shadow-lg py-2">
                      {PHEXXI_LINKS.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="block px-4 py-2 text-[13px] text-[#111111] hover:bg-gray-50 hover:text-gray-500 hover:pl-5 transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <Magnetic strength={0.15}>
            <Link
              href="/#medical-information-form"
              className="inline-flex items-center justify-center px-7 py-2.5 border border-[#333333] rounded-sm text-[14px] leading-tight font-medium text-[#111111] hover:bg-black hover:text-white hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-out whitespace-nowrap min-w-[140px]"
            >
              Request Phexx Prescription
            </Link>
          </Magnetic>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex flex-col items-center justify-center gap-1.5 w-8 h-8"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
        >
          <span className={`block w-6 h-[2px] bg-black transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden w-full bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link
                href="/#how-it-works"
                className="text-[15px] font-medium text-[#111111] hover:text-[#9D174D] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#about-phexx"
                className="text-[15px] font-medium text-[#111111] hover:text-[#9D174D] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                About Phexx
              </Link>
              <Link
                href="/#safety"
                className="text-[15px] font-medium text-[#111111] hover:text-[#9D174D] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Safety
              </Link>
              <Link
                href="/#faq"
                className="text-[15px] font-medium text-[#111111] hover:text-[#9D174D] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
              <div className="pt-2 border-t border-gray-100">
                <p className="text-[13px] font-semibold text-[#888888] mb-2">Phexxi/Phexx</p>
                <div className="flex flex-col gap-3 pl-2">
                  {PHEXXI_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] text-[#111111] hover:text-[#9D174D] hover:pl-1 transition-all duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/#medical-information-form"
                className="inline-flex items-center justify-center w-full px-4 py-3 border border-[#333333] rounded-sm text-[14px] font-medium text-[#111111] hover:bg-black hover:text-white active:scale-[0.98] transition-all duration-200 mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Request Phexx Prescription
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
