"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({
  items,
  columns = 1,
  defaultOpenIndex = -1,
}: {
  items: FaqItem[];
  columns?: 1 | 2;
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex);

  if (columns === 2) {
    const left = items.filter((_, i) => i % 2 === 0);
    const right = items.filter((_, i) => i % 2 === 1);
    const renderCol = (col: FaqItem[], offset: number) => (
      <div className="border-t border-[#E0E0E0]">
        {col.map((item, i) => {
          const realIndex = offset + i * 2;
          const isLast = i === col.length - 1;
          const isOpen = openIndex === realIndex;
          return (
            <div
              key={item.q}
              className={`py-6 flex items-start gap-6 transition-colors duration-200 hover:bg-[#FAFAFA] rounded-sm px-2 -mx-2 ${!isLast ? "border-b border-[#E0E0E0]" : ""}`}
            >
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-[#111111]">{item.q}</h3>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="text-[13px] text-[#555555] overflow-hidden">{item.a}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenIndex((v) => (v === realIndex ? -1 : realIndex))}
                aria-expanded={isOpen}
                className="w-7 h-7 rounded-full border border-[#111111] flex items-center justify-center text-[18px] leading-none shrink-0 transition-all duration-300 ease-out hover:scale-110 hover:border-[#9D174D] hover:text-[#9D174D]"
              >
                <span className={`inline-block transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    );
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {renderCol(left, 0)}
        {renderCol(right, 1)}
      </div>
    );
  }

  return (
    <div className="border-t border-[#E0E0E0]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`py-6 flex items-start gap-6 transition-colors duration-200 hover:bg-[#FAFAFA] rounded-sm px-2 -mx-2 ${i < items.length - 1 ? "border-b border-[#E0E0E0]" : ""}`}
          >
            <div className="flex-1">
              <h3 className="text-[16px] font-semibold text-[#111111]">{item.q}</h3>
              <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="text-[14px] text-[#555555] overflow-hidden">{item.a}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenIndex((v) => (v === i ? -1 : i))}
              aria-expanded={isOpen}
              className="w-7 h-7 rounded-full border border-[#111111] flex items-center justify-center text-[18px] leading-none shrink-0 transition-all duration-300 ease-out hover:scale-110 hover:border-[#9D174D] hover:text-[#9D174D]"
            >
              <span className={`inline-block transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
                {isOpen ? "–" : "+"}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
