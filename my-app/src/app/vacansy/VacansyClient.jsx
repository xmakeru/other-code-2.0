"use client";

import { useState, useRef, useEffect } from "react";

function AccordionItem({ item, isOpen, onToggle, classNameTitle, classNameItem, classNameChildren }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.offsetHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li>
      <div
        role="button"
        onClick={onToggle}
        className={`${classNameItem} ${isOpen ? "border-b-0" : "border-b-[1px] border-[#DADADA]"}`}
      >
        <h3 className={classNameTitle}>{item.title}</h3>

        <div className="px-[30px] hidden sm:block">
          {isOpen ? (
            <svg width="34" height="34" viewBox="0 0 22 2" fill="none">
              <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
              <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
        </div>

        <div className="block sm:hidden">
          {isOpen ? (
            <svg width="23" height="23" viewBox="0 0 22 2" fill="none">
              <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="23" height="23" viewBox="0 0 34 34" fill="none">
              <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
              <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </div>

      <div
        className="transition-all duration-300"
        style={{
          maxHeight: `${height}px`,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s, opacity 0.3s",
        }}
      >
        <div
          ref={ref}
          className={`${classNameChildren} ${isOpen ? "border-b-[1px] border-[#DADADA]" : "border-b-0"}`}
        >
          {item.desc}
        </div>
      </div>
    </li>
  );
}

export default function VacansyClient({ vacansyItems, articlesReasons }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section>
        <h2 className="mb-10 lg:mb-[70px]">Мы ждём в команду:</h2>
        <ul className="border-t-[1px] border-[#DADADA] cursor-pointer">
          {vacansyItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              classNameTitle="text-xl sm:text-2xl lg:text-4xl"
              classNameItem="py-4 sm:py-7 flex items-center justify-between"
              classNameChildren="sm:py-7 py-4"
            />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="md:mt-[150px] sm:mt-[100px] mb-[70px] mt-20">5 причин присоединиться к нам</h2>

        <article>
          <ul className="hidden sm:grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-5 gap-8 lg:gap-[42px]">
            {articlesReasons.map((e) => (
              <li key={e.id} className="border-t-[2px] border-[#FF3C00] flex flex-col gap-3 py-3">
                <span className="text-[#FF3C00] font-medium text-xl">{e.num}</span>
                <h4 className="text-2xl font-medium">{e.title}</h4>
                <p className="text-base leading-5">{e.desc}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="block sm:hidden">
          <div className="flex flex-col">
            {articlesReasons.map((e) => (
              <li
                key={e.id}
                className="border-t-[2px] border-red flex-1 min-w-0 flex flex-col gap-3 py-3 overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <span className="text-red md:text-[20px] text-[16px]">{e.num}</span>
                  <h4 className="md:text-[24px] text-[20px]">{e.title}</h4>
                </div>
                <p className="text-base leading-5">{e.desc}</p>
              </li>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
