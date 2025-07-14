import Link from "next/link";
import Logo from "./Logo";
import { NAV_ITEMS } from "@/config/constants/Links";

export default function Footer() {
  return (
   <footer className="bg-[#646363] py-[85px] sm:p-10 md:py-[80px] md:px-[100px] px-[93px] flex justify-center">
      <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-[45px] mlg:gap-24 lg:gap-40 xl:gap-0 w-auto sm:w-full">
        <div className="w-full pr-0 xl:pr-10 3xl:pr-20 5xl:pr-[137px] flex-1 flex flex-col gap-12">
          <Logo />
          <p className="text-grey font-normal text-[16px] items-end mt-5 sm:mt-0 text-nowrap">
            &copy; 2024 Все права защищены.
            <br />
            Политика конфиденциальности
          </p>
        </div>
        <div className="w-full px-0 xl:px-10 3xl:px-20 5xl:px-[137px] flex-1 xl:border-l-[1px] border-grey">
          <h4 className="font-extrabold text-grey text-nowrap text-[18px]">
            ООО «ДругойКод»
          </h4>
          <p className="text-grey font-light text-[18px] pb-3">
            Ставрополь, ул. Мира, 319 <br />
            <a href="mailto:info@othercode.ru">info@othercode.ru</a>
          </p>
          <a href="tel:+79196549289" 
          className="text-grey font-extrabold text-[20px] text-nowrap">
            +7 919 654-92-89
          </a>
        </div>
        <nav className="gap-[65px] w-full px-0 xl:px-10 3xl:px-20 5xl:px-[137px] flex-1 xl:border-l-[1px] border-grey hidden xl:grid grid-cols-2">
          <ul className="grid grid-rows-3 h-full">
            {NAV_ITEMS.slice(0, Math.ceil(NAV_ITEMS.length / 2)).map(
              (e, index) => (
                <Link key={index} href={e.link}>
                 <li className="text-grey text-lg whitespace-nowrap group inline-block relative">
                  {e.title}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] bg-grey transition-all duration-300 ease-out w-0 group-hover:w-full"
                  ></span>
                </li>
                </Link>
              ),
            )}
          </ul>

          <ul className="grid grid-rows-3 h-full">
            {NAV_ITEMS.slice(Math.ceil(NAV_ITEMS.length / 2)).map(
              (e, index) => (
                <Link key={index} href={e.link}>
                  <li className="text-grey text-lg whitespace-nowrap group inline-block relative">
                  {e.title}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] bg-grey transition-all duration-300 ease-out w-0 group-hover:w-full"
                  ></span>
                </li>
                </Link>
              ),
            )}
          </ul>
        </nav>

        <div className="flex-1 w-full pl-0 xl:pl-10 3xl:pl-20 5xl:pl-[137px] xl:border-l-[1px] border-grey flex flex-col md:gap-0 gap-4 md:justify-between items-start xl:items-end">
          <h4 className="md:block sm:hidden block text-grey text-[18px] text-right text-nowrap">
            Мы в социальных сетях
          </h4>
          <h4 className="md:hidden sm:block hidden text-grey text-[18px] text-right">
            Социальные сети
          </h4>
          <div className="flex sm:w-auto w-full gap-[30px]">
            <div className="flex gap-[30px]">
              <div className="text-grey hover:text-dark-grey ease-in duration-200 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.71323 0 0 6.71419 0 15C0 23.2858 6.71419 30 15 30C23.2868 30 30 23.2858 30 15C30 6.71419 23.2858 0 15 0ZM22.3674 10.2765L19.9055 21.8777C19.7235 22.7003 19.2339 22.8997 18.5506 22.5126L14.8006 19.7487L12.9919 21.4906C12.7926 21.69 12.6232 21.8594 12.2361 21.8594L12.5023 18.0426L19.4516 11.7639C19.7545 11.4977 19.3848 11.3468 18.9852 11.6129L10.3965 17.0197L6.69484 15.8642C5.89065 15.6106 5.87226 15.06 6.86419 14.6729L21.3261 9.09581C21.9977 8.85387 22.5842 9.25935 22.3665 10.2755L22.3674 10.2765Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="text-grey hover:text-dark-grey ease-in duration-200 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.1 2.1C3.97364e-07 4.22 0 7.61 0 14.4V15.6C0 22.38 3.97364e-07 25.77 2.1 27.9C4.22 30 7.61 30 14.4 30H15.6C22.38 30 25.77 30 27.9 27.9C30 25.78 30 22.39 30 15.6V14.4C30 7.62 30 4.23 27.9 2.1C25.78 3.97364e-07 22.39 0 15.6 0H14.4C7.62 0 4.23 3.97364e-07 2.1 2.1ZM5.06 9.13H8.5C8.61 14.85 11.13 17.27 13.13 17.77V9.13H16.36V14.06C18.33 13.85 20.41 11.6 21.11 9.12H24.33C24.0673 10.4037 23.5427 11.6194 22.7891 12.6914C22.0355 13.7633 21.069 14.6683 19.95 15.35C21.1991 15.9714 22.3021 16.8507 23.1864 17.9298C24.0707 19.0089 24.7161 20.2632 25.08 21.61H21.53C20.77 19.24 18.87 17.4 16.36 17.15V21.61H15.96C9.12 21.61 5.22 16.93 5.06 9.13Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="text-grey hover:text-dark-grey ease-in duration-200 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6667 0C27.5507 0 28.3986 0.351189 29.0237 0.976311C29.6488 1.60143 30 2.44928 30 3.33333V26.6667C30 27.5507 29.6488 28.3986 29.0237 29.0237C28.3986 29.6488 27.5507 30 26.6667 30H3.33333C2.44928 30 1.60143 29.6488 0.976311 29.0237C0.351189 28.3986 0 27.5507 0 26.6667V3.33333C0 2.44928 0.351189 1.60143 0.976311 0.976311C1.60143 0.351189 2.44928 0 3.33333 0H26.6667ZM25.8333 25.8333V17C25.8333 15.559 25.2609 14.177 24.2419 13.1581C23.223 12.1391 21.841 11.5667 20.4 11.5667C18.9833 11.5667 17.3333 12.4333 16.5333 13.7333V11.8833H11.8833V25.8333H16.5333V17.6167C16.5333 16.3333 17.5667 15.2833 18.85 15.2833C19.4688 15.2833 20.0623 15.5292 20.4999 15.9668C20.9375 16.4043 21.1833 16.9978 21.1833 17.6167V25.8333H25.8333ZM6.46667 9.26667C7.20927 9.26667 7.92146 8.97167 8.44657 8.44657C8.97167 7.92146 9.26667 7.20927 9.26667 6.46667C9.26667 4.91667 8.01667 3.65 6.46667 3.65C5.71964 3.65 5.00321 3.94675 4.47498 4.47498C3.94675 5.00321 3.65 5.71964 3.65 6.46667C3.65 8.01667 4.91667 9.26667 6.46667 9.26667ZM8.78333 25.8333V11.8833H4.16667V25.8333H8.78333Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
