"use client";
import { NAV_ITEMS } from "@/config/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import SendForm  from "./SendForm";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const dropdownRef = useRef(null);
  const menuRef = useRef(null); 
  const pathname = usePathname();
   const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 640) return;
      
 
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <div className={`header-padding fixed z-50 backdrop-blur-3xl w-screen flex justify-between items-center
        ${pathname === "/" || "/about_us" ? "bg-white sm:bg-transparent sm:bg-gradient-to-t sm:to-black/30" : "sm:bg-transparent bg-white"}`}>
        
        {/* Логотип */}
        <div>
          <Logo />
        </div>

        {/* Ссылки */}
        <div className="flex items-center gap-[4rem] 3xl:gap-[6.25rem]">
          <nav className="text-white hidden 2xl:block">
            <ul className={`${pathname === "/" || "/about-us" ? "text-white" : "text-black"}
              flex gap-[3.125rem] text-[1.125rem] font-normal leading-[130%] tracking-[0.08rem]`}>
              {NAV_ITEMS.map((i) => (
                <li key={i.title}>
                  <Link className="group relative" href={i.link}>
                    {i.title}
                    <span className={`absolute bottom-0 left-0 h-[2px] bg-red transition-all duration-300 ease-out
                      ${pathname === i.link ? "w-full" : "w-0"} group-hover:w-full`} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

       
          <div className="flex gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              ref={dropdownRef}
              className="2xl:hidden flex items-center bg-white rounded-[0.375rem] gap-5 px-0 sm:px-4 relative cursor-pointer"
            >
           
              {isOpen ? (
                <svg width="25" height="20" viewBox="0 0 30 30" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.732233 0.732233C1.70854 -0.244078 3.29146 -0.244078 4.26777 0.732233L15 11.4645L25.7322 0.732233C26.7085 -0.244078 28.2915 -0.244078 29.2678 0.732233C30.2441 1.70854 30.2441 3.29146 29.2678 4.26777L18.5355 15L29.2678 25.7322C30.2441 26.7085 30.2441 28.2915 29.2678 29.2678C28.2915 30.2441 26.7085 30.2441 25.7322 29.2678L15 18.5355L4.26777 29.2678C3.29146 30.2441 1.70854 30.2441 0.732233 29.2678C-0.244078 28.2915 -0.244078 26.7085 0.732233 25.7322L11.4645 15L0.732233 4.26777C-0.244078 3.29146 -0.244078 1.70854 0.732233 0.732233Z" fill="#FF3C00" />
                </svg>
              ) : (
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path d="M2 2H22M2 9.79487H22M2 18H22" stroke="#FF3C00" strokeWidth="4" strokeLinecap="round" />
                </svg>
              )}
              <span className="hidden sm:block uppercase font-extrabold text-[1.125rem]">Меню</span>
            </button>

            <button 
             onClick={() => setIsModalOpen(true)}
            className="hidden sm:block btn-orange py-[0.875rem] px-[1.125rem]">
              Обсудить задачу
            </button>

           {/* Здесь поменялись отступы у выпадающего меню */}
            <div
              ref={menuRef}
              className={`absolute top-full mt-4 sm:-mt-8 2xl:right-[10rem] z-50 sm:right-58 right-4
                bg-red rounded-md px-[36px] py-[39px] sm:p-[30px]
                w-[340px] sm:w-[220px] text-white
                transition-all duration-300 ease-in
                ${isOpen ? "max-h-[517px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}
              `}
            >
              {/* ^^^^^^^ */}
              <nav>
                <ul className="flex flex-col sm:gap-[18px] gap-[22px] items-start">
                  {NAV_ITEMS.map((e) => (
                    <li
                      className="text-[30px] md:text-[20px] font-normal md:font-medium"
                      key={e.title}
                    >
                      <Link 
                        href={e.link} 
                        onClick={() => setIsOpen(false)}
                        className="text-[30px] md:text-[20px] font-normal md:font-medium"
                      >
                        {e.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

        {isModalOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-md z-50 cursor-not-allowed bg-black/80"
          onClick={closeModal} 
        ></div>
      )}

      {/* Модалка */}
      <div className={`${isModalOpen ? "fixed inset-0 flex justify-center items-center z-50" : "hidden"}`}>
        <div className="relative bg-white p-6 rounded-lg shadow-lg">
          <SendForm closeModal={closeModal} />
          <button 
            onClick={closeModal} 
            className="absolute -top-2 right-2 text-black text-xl text-[40px] p-5 cursor-pointer">
            &times;
          </button>
        </div>
      </div>
    </header>
  );
}