'use client'
import { NAV_ITEMS } from "@/Items/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";


export default function Header() {
  const pathname = usePathname()
  return(
    <header>
      <div
      className={`header-padding fixed z-50 backdrop-blur-3xl w-full flex justify-between items-center
      ${pathname === '/' || isAboutusPage ? 'bg-white sm:bg-transparent sm:bg-gradient-to-t sm:to-black/30' : 'sm:bg-transparent bg-white'}`}>

        {/* Логотип */}
        <div>
          <Logo />
        </div>

        {/* Ссылки */}
         <nav className="text-white">
          <ul
          className={`
          ${pathname === "/" || "/about-us" ? "text-white" : "text-black"}
          flex gap-[3.125rem] text-[1.125rem] font-normal leading-[130%] tracking-[0.08rem]`}>
            {NAV_ITEMS.map((i, index) => (
              <li key={index}>
                <Link 
                className="group relative"
                href={i.link}>
                  {i.title}
                   <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-red
                      transition-all duration-300 ease-out
                      ${pathname === i.link ? "w-full" : "w-0"}
                      group-hover:w-full
                    `}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопки */}
        <div
        className="flex">
          <button
          className="btn-orange">Обсудить задачу</button>
        </div>

      </div>
    </header>
  )
}