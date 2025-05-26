"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { DIRECTIONS_ITEMS } from "@/Items/WorkDirections";

export default function MobileAccordeon() {
  const [selected, setSelected] = useState(null);

  const mobileBorderStyles = `
    relative flex flex-col before:content-[''] before:absolute before:border
    before:border-[#DADADA] before:left-[10px] before:right-[10px] 
    before:top-0 before:bottom-0 before:border-l-0 before:border-r-0 
    after:content-[''] after:absolute after:border after:border-[#DADADA] 
    after:top-[10px] after:bottom-[10px] after:left-0 after:right-0
    after:border-t-0 after:border-b-0 bg-white
    [&:nth-child(2)]:before:border-t-0
    [&:nth-child(3)]:before:border-t-0
    [&:nth-child(4)]:before:border-t-0
    [&:nth-child(5)]:before:border-t-0
    [&:nth-child(6)]:before:border-t-0
    
  `;
  return (
    <div className="sm:hidden flex flex-col gap-10">
      <ul className="w-full cursor-pointer">
        {DIRECTIONS_ITEMS.map((item, index) => {
          const open = selected === index;
          const ref = useRef(null);

          return (
            <li
              key={`item-${index}`}
              className={`${mobileBorderStyles} ${open && index === DIRECTIONS_ITEMS.length - 1 ? "last-item" : ""}`}
            >
              {/* Заголовок */}
              <div
                role="button"
                onClick={() => setSelected(open ? null : index)}
                className="flex justify-between items-center font-medium relative z-10"
              >
                <div className="flex items-center gap-0 xs:gap-4">
                  <div className="items-center p-[25px] border-r-[1px] border-grey mr-3 relative z-30">
                    <span className="after:content-[''] after:absolute after:p-2 after:rounded-full after:bg-white after:-top-2 after:-right-2 after:z-10" />
                    <span className="before:content-[''] before:absolute before:p-2 before:rounded-full before:bg-white before:top-18 before:-right-2 before:z-10" />
                    {item.icon}
                  </div>
                  <span className="font-medium text-2xl relative ">
                    {item.title}
                  </span>
                </div>

                <div
                  className="px-2 mt-8 flex items-end"
                  style={{
                    transform: open ? "rotate(0deg)" : "rotate(-45deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.30762 10.5L10.5 19.6924M10.5 19.6924L19.6924 10.5M10.5 19.6924V1.30761"
                      stroke="#FF3C00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Контент */}
              <div
                className={`
                ${mobileBorderStyles}
                transition-all duration-300
                ${open ? "border-t border-[#DADADA]" : ""}
              `}
                style={{
                  maxHeight: open ? ref.current?.offsetHeight || 0 : 0,
                  opacity: open ? 1 : 0,
                  overflow: "hidden",
                }}
              >
                <div ref={ref}>
                  <div>
                    <p className="px-8 py-6 flex items-center justify-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Link href="/projects" className="btn-orange max-w-[9.8125rem]">
        <span>Подробнее</span>
      </Link>
    </div>
  );
}
