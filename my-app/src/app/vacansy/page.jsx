import CustomAccordeon, { AccordeonItem } from "../../components/ui/CustomAccordeon"
import { VACANSY_ITEMS } from "@/config/constants/Vacansy"
import { ARTICLES_REASONS } from "@/config/constants/Vacansy"

export const metadata = {
  title: "Other code | Вакансии",
  description: "dev",
}


export default function VacansyPage() {
  return(
    <main
    className="px-main pt-[166px] md:pt-[262px] sm:pt-[163px] mb-to-footer">

      <div
      className="flex flex-col w-full 3xl:w-1/2 gap-[35px] sm:gap-[30px] md:gap-[70px] mb-20 sm:mb-[100px]: md:mb-[150px]">
      <h1>Вакансии</h1>
        <p className="text-dark-grey">
        Клиенты обращаются к нам за экспертизой. Нам нужны специалисты, которые помогут создавать уникальные цифровые продукты, 
        поддерживать и развивать общие компетенции команды.
        </p>
      </div>
      <section>
        <h2
        className="mb-10 lg:mb-[70px]">Мы ждём в команду:</h2>
        <CustomAccordeon>
        <ul
        className="border-t-[1px] border-[#DADADA]">
          {VACANSY_ITEMS.map((e, index) => (
            <AccordeonItem
            key={e.id}
            value={index}
            trigger={e.title}
            classNameTitle="text-xl sm:text-2xl lg:text-4xl"
            classNameItem="py-4 sm:py-7  flex items-center justify-between cursor-pointer"
            classNameChildren="sm:py-7 py-4"
            >
              <div
              className="flex flex-col">
                <div>
                  {e.desc}
                </div>
              </div>
            </AccordeonItem>
          ))}
        </ul>
      </CustomAccordeon>
      </section>

      <section>
        <h2
        className="md:mt-[150px] sm:mt-[100px] mb-[70px] mt-20">5 причин присоединиться к нам</h2>
      <article
      className="">
        <ul
        className="hidden sm:grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-5 gap-8 lg:gap-[42px]">
          {ARTICLES_REASONS.map((e) => (
            <li
            key={e.id}
            className="border-t-[2px] border-[#FF3C00] flex flex-col gap-3 py-3">
              <span className="text-[#FF3C00] font-medium text-xl">{e.num}</span>
              <h4 className="text-2xl font-medium">{e.title}</h4>
              <p className="text-base leading-5">{e.desc}</p>
            </li>
          ))}
        </ul>  
        </article>

          <article
          className="block sm:hidden">
            <div
            className="flex flex-col">
              {ARTICLES_REASONS.map((e) => (
              <li
              key={e.id}
              className="border-t-[2px] border-red flex-1 min-w-0 flex flex-col gap-3 py-3 overflow-hidden">
                <div
                className="flex  items-center gap-4">
                  <span className="text-red md:text-[20px] text-[16px]">{e.num}</span>
                  <h4 className="md:text-[24px] text-[20px]">{e.title}</h4>
                </div>
                <p className="text-base leading-5">{e.desc}</p>
              </li>
            ))}
            </div>
          </article>

      </section>
      

    </main>
  )
}