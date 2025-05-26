import { DIRECTIONS_ITEMS } from "@/Items/WorkDirections";
import MobileAccordeon from "./MobileAccordeon";
import Link from "next/link";

export default function WorkDirections() {
  

  const borderStyles = `
  relative z-0 

  before:content-[''] before:absolute before:pointer-events-none before:z-[-1]
  before:border before:border-[#DADADA] before:border-l-0 before:border-r-0 
  before:left-[20px] before:right-[20px] before:top-0 before:bottom-0 before:border-[1px]

  after:content-[''] after:absolute after:pointer-events-none after:z-[-1]
  after:border after:border-[#DADADA] after:border-t-0 after:border-b-0 
  after:top-[20px] after:bottom-[20px] after:left-0 after:right-0 after:border-[1px]
  [&:nth-child(2)]:after:border-l-0
  [&:nth-child(3)]:after:border-l-0
  [&:nth-child(5)]:after:border-l-0
  [&:nth-child(6)]:after:border-l-0
  [&:nth-child(4)]:before:border-t-0
  [&:nth-child(5)]:before:border-t-0
  [&:nth-child(6)]:before:border-t-0

`

  const mediumBorderStyles = `
  relative z-0 

  before:content-[''] before:absolute before:pointer-events-none before:z-[-1]
  before:border before:border-[#DADADA] before:border-l-0 before:border-r-0 
  before:left-[20px] before:right-[20px] before:top-0 before:bottom-0 before:border-[1px]

  after:content-[''] after:absolute after:pointer-events-none after:z-[-1]
  after:border after:border-[#DADADA] after:border-t-0 after:border-b-0 
  after:top-[20px] after:bottom-[20px] after:left-0 after:right-0 after:border-[1px]
  [&:nth-child(3)]:after:border-r-0
  [&:nth-child(1)]:after:border-r-0
  [&:nth-child(5)]:after:border-r-0
  [&:nth-child(3)]:before:border-t-0
  [&:nth-child(4)]:before:border-t-0
  [&:nth-child(5)]:before:border-t-0
  [&:nth-child(6)]:before:border-t-0

  
`;



  return (
    <section className="px-main">
      <div className="flex justify-between items-center mb-10 md:mb-[70px]">
        <h2 className="sm:inline hidden">Направления работы</h2>
        <h2 className="sm:hidden inline">
          Направления
          <br />
          работы
        </h2>
        <Link href="/projects" className="btn-orange hidden sm:block">
          <span>Подробнее</span>
        </Link>
      </div>

      {/* Десктопная версия */}
      <div className="hidden 3xl:grid 2xl:grid-cols-3 grid-cols-2 2xl:grid-rows-2 grid-rows-3">
        {DIRECTIONS_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`${borderStyles}  flex flex-col gap-6 p-10 md:py-[50px] md:px-[70px]`}
          >
            <div className="flex flex-col sm:items-start gap-4">
              <div className="shrink-0">{item.icon}</div>
              <span className="text-xl font-semibold">{item.title}</span>
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="hidden 3xl:hidden sm:grid 2xl:grid-cols-3 grid-cols-2 2xl:grid-rows-2 grid-rows-3">
        {DIRECTIONS_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`${mediumBorderStyles}  flex flex-col gap-6 p-10 md:py-[50px] md:px-[70px]`}
          >
            <div className="flex flex-col sm:items-start gap-4">
              <div className="shrink-0">{item.icon}</div>
              <span className="text-xl font-semibold">{item.title}</span>
            </div>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Мобильная версия (аккордеон) */}
      <MobileAccordeon />
    </section>
  );
}
