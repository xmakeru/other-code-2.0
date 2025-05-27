'use client'
import "swiper/css";
import { US_ARTICLES_1, US_ARTICLES_2, US_ARTICLES_3 } from "../../Items/Uslugi"
import { PROJECTS_ITEMS } from "@/Items/Projects"
import CustomAccordeon, { AccordeonItem } from "@/components/ui/CustomAccordeon"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"


export default function WebDev() {
  return(
    <>
    {/* ПЕРВАЯ ТЕМА */}
    <section >
    <div className="w-full sm:w-3/4 3xl:w-1/2 flex flex-col md:gap-[35px] mb-[150px] ">
      <h2>Web-разработка</h2>
      <p 
      className="md:text-[36px] sm:text-[24px] text-[20px] font-light text-dark-grey">
      Проектируем, разрабатываем, развиваем и поддерживаем веб‑проекты</p>
    </div>

    <div
    className="flex flex-col 3xl:flex-row gap-[80px] 4xl:gap-[147px] mb-[50px]"> 

      <div className="flex w-full 3xl:w-1/2 flex-col">
        
        <div className="flex items-center gap-[30px]">
          <div className="">
            <svg width="65" height="15" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.7071 8.20711C65.0976 7.81658 65.0976 7.18342 64.7071 6.79289L58.3431 0.428932C57.9526 0.0384078 57.3195 0.0384078 56.9289 0.428932C56.5384 0.819457 56.5384 1.45262 56.9289 1.84315L62.5858 7.5L56.9289 13.1569C56.5384 13.5474 56.5384 14.1805 56.9289 14.5711C57.3195 14.9616 57.9526 14.9616 58.3431 14.5711L64.7071 8.20711ZM0 8.5L64 8.5V6.5L0 6.5L0 8.5Z" fill="#FF3C00"/>
            </svg>
          </div>
          <h3 className="text-[26px] md:text-[36px] sm:text-[28px] ">
            Разработка сайтов и сервисов
          </h3>
        </div>

          
          <div className="flex items-start mt-4 gap-[30px]">
            <span className="text-red text-[18px] font-light mt-14 whitespace-nowrap -rotate-90 -ml-13">#site #service</span>
            <p>
            Создаём продуманные сайты компаний, отражающие фирменный стиль и привлекающие клиентов. Внимательно собираем понятную структуру услуг и направлений, поддерживаем визуалом. 
            Воспринимаем сайт как инструмент и органично встраиваем в бизнес-процессы.
            </p>
          </div>
        </div>

      <article className="w-full 3xl:w-1/2 min-w-0"> 
        <ul className="hidden sm:flex gap-[42px] w-full min-w-0 flex-wrap"> 
          {US_ARTICLES_1.slice(0, 3).map((e) => (
            <li
              key={e.id}
              className="border-t-[2px] border-red flex-1 min-w-0 flex flex-col gap-3 py-3 "> 
              <span className="text-red md:text-[20px] text-[16px] ">{e.num}</span> 
              <h4 className="md:text-[24px] text-[20px] ">{e.title}</h4> 
              <p className="text-base leading-5 ">{e.desc}</p> 
            </li>
          ))}
        </ul>  
      </article>

    </div>

    <div className="flex flex-col 3xl:flex-row gap-0 sm:gap-[80px] 4xl:gap-[147px]"> 

      <div className="3xl:w-1/2 3xl:block sm:hidden block 3xl:-mx-0 -mx-5">
        <h3 className="md:hidden block mb-5 sm:mb-[25px] px-main text-[1.25rem]">Выполненные проекты в этой области</h3>
        <div className="w-full xl:max-w-[620px] 3-5xl:max-w-[660px] 4-25xl:max-w-[700px] 4-5xl:max-w-[745px] 5xl:max-w-[780px] overflow-hidden">
          <div className="relative w-full overflow-hidden">
          <Swiper
          loop={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
           
            pagination={{
              clickable: true,
              el: '.swiper-pagination-1',
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            speed={1000}
            className="w-full h-full"
          >
            {PROJECTS_ITEMS.filter((slide) => slide.tegs.includes("#web")).map((slide, index) => (
              <SwiperSlide key={slide.id} className="relative aspect-square overflow-hidden cursor-grab active:cursor-grabbing">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="p-[38px] h-full flex flex-col">
                    <h4 className={`text-[24px] 3xl:text-[36px] font-medium text-white`}>{slide.title}</h4>
                    {slide.tegs.length > 0 && (
                      <div className="flex flex-wrap gap-3 md:mt-6 mt-[22px]">
                        {slide.tegs.map((tag, index) => (
                          <div key={index} className="bg-white px-4 py-1 rounded-2xl font-medium text-black">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-1 absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-40" />
        </div>

      </div> 
      </div>

     
     

      <div className="w-full 3xl:w-1/2">
      <article className="w-full">
        <ul className="hidden sm:grid 5xl:grid-cols-3 3xl:grid-cols-2 grid-cols-3 gap-[42px]  w-full">
          {US_ARTICLES_1.slice(3, 5).map((e, index) => (
            <li
              key={e.id}
              className={`border-t-[2px] border-red flex flex-col gap-3 py-3 `}
            >
              <span className="text-red md:text-[20px] text-[16px]">{e.num}</span>
              <h4 className="md:text-[24px] text-[20px]">{e.title}</h4>
              <p className="text-base leading-5">{e.desc}</p>
            </li>
          ))}
        </ul>
      </article>

      </div>
      <div className="hidden sm:block 3xl:hidden">
        <h3 className="md:hidden block mb-5 sm:mb-[25px] text-[1.75rem]">Выполненные проекты в этой области</h3>
        <div className="w-full overflow-hidden">
        <Swiper
         loop={true} 
          spaceBetween={0}
          slidesPerView={2}  
          className="w-full h-full"
          speed={800}
          autoplay={false}
        >
          {PROJECTS_ITEMS.filter((slide) => slide.tegs.includes("#web")).map((slide) => (
            <SwiperSlide key={slide.id} className="relative aspect-square overflow-hidden cursor-grab active:cursor-grabbing">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="p-[38px] h-full flex flex-col">
                  <h4 className="text-[24px] font-medium text-white">{slide.title}</h4>
                  {slide.tegs.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-[22px] 4xl:mt-[35px] md:mt-6">
                      {slide.tegs.map((tag, index) => (
                        <div key={index} className="bg-white px-4 py-1 rounded-2xl font-medium text-black">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> 
      </div>
    </div>

    
   <div className="sm:hidden flex my-10">
    <span className="text-red -rotate-90 max-h-[50px] -ml-0.5 font-light">Этапы</span>
    <CustomAccordeon>
        <ul
        className="border-t-[1px] border-grey">
          {US_ARTICLES_1.map((e, index) => (
            <AccordeonItem
            key={index}
            value={index}
            trigger={e.title}
            classNameTitle="text-xl sm:text-2xl lg:text-4xl"
            classNameItem="py-4 sm:py-7  flex items-center justify-between cursor-pointer"
            classNameChildren="sm:py-7 py-4"
            iconTitle={e.num}
            >
              <div
              className="">
                <p>
                  {e.desc}
                </p>
              </div>
            </AccordeonItem>
          ))}
        </ul>
      </CustomAccordeon>
   </div>

  </section>

  {/* ВТОРАЯ ТЕМА */}
  <section>

    <div className="flex flex-col 3xl:flex-row gap-0 sm:gap-[80px] 4xl:gap-[147px] mb-0 sm:mb-[50px] mt-10 sm:mt-[100px] md:mt-[150px]">

    <div className="flex w-full 3xl:w-1/2 flex-col">
 
    <div className="flex items-center gap-[30px]">
      <div>
        <svg width="65" height="15" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64.7071 8.20711C65.0976 7.81658 65.0976 7.18342 64.7071 6.79289L58.3431 0.428932C57.9526 0.0384078 57.3195 0.0384078 56.9289 0.428932C56.5384 0.819457 56.5384 1.45262 56.9289 1.84315L62.5858 7.5L56.9289 13.1569C56.5384 13.5474 56.5384 14.1805 56.9289 14.5711C57.3195 14.9616 57.9526 14.9616 58.3431 14.5711L64.7071 8.20711ZM0 8.5L64 8.5V6.5L0 6.5L0 8.5Z" fill="#FF3C00"/>
        </svg>
      </div>
      <h3 className="text-[26px] sm:text-[28px] md:text-[36px]">
        Разработка чат-ботов
      </h3>
    </div>

    <div className="flex items-start mt-4 gap-[30px] relative">
      <span className="text-red text-[18px] font-light whitespace-nowrap -rotate-90 self-start absolute top-3 -left-3">
        #bot
      </span>
      <p className="pl-[96px]">
        Создаём чат-боты, которые упрощают и ускоряют взаимодействие с клиентами и работу внутри компании. 
        Помогаем не только с технической реализацией, продумываем точки контакта и проектируем сценарии работы. 
        Интегрируемся в Telegram, Slack, Whatsapp, FB Messenger и другие популярные мессенджеры.
      </p>
    </div>

    </div>

      <article className="w-full 3xl:w-1/2 min-w-0"> 
      <ul className="hidden sm:flex flex-wrap gap-[42px] w-full min-w-0">
        {US_ARTICLES_2.slice(0, 4).map((e, index) => (
          <li
            key={e.id}
            className={`
              border-t-[2px] border-red min-w-0 flex flex-col gap-3 py-3 overflow-hidden
              ${index === 3 ? 'w-full basis-full' : 'flex-1'}
            `}
          >
            <span className="text-red md:text-[20px] text-[16px] ">{e.num}</span>
            <h4 className="md:text-[24px] text-[20px] ">{e.title}</h4>
            <p className="text-base leading-5 ">{e.desc}</p>
          </li>
        ))}
        
      </ul>

      </article>
     
      <article className="3xl:hidden sm:block hidden w-full">
        <ul className="grid grid-cols-3 gap-[42px]  w-full">
          {US_ARTICLES_2.slice(4, 6).map((e, index) => (
            <li
              key={e.id}
              className={`border-t-[2px] border-red flex flex-col gap-3 py-3 `}
            >
              <span className="text-red md:text-[20px] text-[16px]">{e.num}</span>
              <h4 className="md:text-[24px] text-[20px]">{e.title}</h4>
              <p className="text-base leading-5">{e.desc}</p>
            </li>
          ))}
        </ul>
      </article>  


    </div>

    
    <div className="flex flex-col 3xl:flex-row gap-0 3xl:gap-[80px] 4xl:gap-[147px]"> 

    <div className="3xl:w-1/2 3xl:block block sm:hidden 3xl:-mx-0 -mx-5">
        <h3 className="md:hidden block my-5 sm:my-[25px] px-main text-[1.25rem] mt-10">Выполненные проекты в этой области</h3>
        <div className=" w-full xl:max-w-[620px] 3-5xl:max-w-[660px] 4-25xl:max-w-[700px] 4-5xl:max-w-[745px] 5xl:max-w-[780px] overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <Swiper
          loop={true}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
           
            pagination={{
              clickable: true,
              el: '.swiper-pagination-2',
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            speed={1000}
            className="w-full h-full"
          >
            {PROJECTS_ITEMS.filter((slide) => slide.tegs.includes("#tg bot")).map((slide) => (
              <SwiperSlide key={slide.id} className="relative aspect-square overflow-hidden cursor-grab active:cursor-grabbing">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="p-[38px] h-full flex flex-col">
                    <h4 className="text-[24px] 3xl:text-[36px] font-medium text-white">{slide.title}</h4>
                    {slide.tegs.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-[22px] 4xl:mt-[35px] md:mt-6">
                        {slide.tegs.map((tag, index) => (
                          <div key={index} className="bg-white px-4 py-1 rounded-2xl font-medium text-black">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-2 absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-40" />
        </div>
  
      </div> 
      </div>

      <div className="hidden sm:block 3xl:hidden">
        <h3 className="md:hidden block my-5 sm:my-[25px] text-[1.75rem]">Выполненные проекты в этой области</h3>
        <div className="w-full overflow-hidden">
        <Swiper
    
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          className="w-full h-full"
          speed={800}
          autoplay={false}
        >
          {PROJECTS_ITEMS.filter((slide) => slide.tegs.includes("#tg bot")).map((slide) => (
            <SwiperSlide key={slide.id} className="relative aspect-square overflow-hidden cursor-grab active:cursor-grabbing">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="p-[38px] h-full flex flex-col">
                  <h4 className="text-[24px] font-medium text-white">{slide.title}</h4>
                  {slide.tegs.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-[22px] 4xl:mt-[35px] md:mt-6">
                      {slide.tegs.map((tag, index) => (
                        <div key={index} className="bg-white px-4 py-1 rounded-2xl font-medium text-black">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div> 
      </div>
    
      <div className="w-full 3xl:w-1/2">
      <article className="w-full">
        <ul className="hidden 3xl:grid grid-cols-3 gap-[42px]  w-full">
          {US_ARTICLES_2.slice(4, 6).map((e, index) => (
            <li
              key={e.id}
              className={`border-t-[2px] border-red flex flex-col gap-3 py-3 `}
            >
              <span className="text-red md:text-[20px] text-[16px]">{e.num}</span>
              <h4 className="md:text-[24px] text-[20px]">{e.title}</h4>
              <p className="text-base leading-5">{e.desc}</p>
            </li>
          ))}
        </ul>
      </article>


      </div>

      
    </div>

    <div className="sm:hidden flex my-10">
    <span className="text-red -rotate-90 max-h-[50px] -ml-0.5 font-light">Этапы</span>
    <CustomAccordeon>
        <ul
        className="border-t-[1px] border-grey">
          {US_ARTICLES_2.map((e, index) => (
            <AccordeonItem
            key={index}
            value={index}
            trigger={e.title}
            classNameTitle="text-xl sm:text-2xl lg:text-4xl"
            classNameItem="py-4 sm:py-7  flex items-center justify-between cursor-pointer"
            classNameChildren="sm:py-7 py-4 "
            iconTitle={e.num}
            >
              <div
              className="">
                <p>
                  {e.desc}
                </p>
              </div>
            </AccordeonItem>
          ))}
        </ul>
      </CustomAccordeon>
   </div>

  </section>

  {/* ТРЕТЬЯ ТЕМА */}
  <section>
    <div
    className="flex 3xl:flex-row flex-col gap-0 sm:gap-[80px] 4xl:gap-[147px] mt-10 sm:mt-[100px] md:mt-[150px]">
      <div className="flex w-full 3xl:w-1/2 flex-col">
        
        <div className="flex items-start gap-[30px]">
          <div className="py-4">
            <svg width="65" height="15" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.7071 8.20711C65.0976 7.81658 65.0976 7.18342 64.7071 6.79289L58.3431 0.428932C57.9526 0.0384078 57.3195 0.0384078 56.9289 0.428932C56.5384 0.819457 56.5384 1.45262 56.9289 1.84315L62.5858 7.5L56.9289 13.1569C56.5384 13.5474 56.5384 14.1805 56.9289 14.5711C57.3195 14.9616 57.9526 14.9616 58.3431 14.5711L64.7071 8.20711ZM0 8.5L64 8.5V6.5L0 6.5L0 8.5Z" fill="#FF3C00"/>
            </svg>
          </div>
          <h3 className="text-[26px] md:text-[36px] sm:text-[28px] ">
          Техническая поддержка и развитие сайтов
          </h3>
        </div>

          
          <div className="flex items-start mt-4 gap-[30px]">
            <span className="text-red text-[18px] font-light mt-8 whitespace-nowrap -rotate-90 -ml-8">#support</span>
            <p>
            Поддерживаем работоспособность веб-проектов и помогаем развивать ваш сайт/сервис. 
            Спроектируем, разработаем и внедрим обновление — 
            сразу или через A/B-тест. Ускорим и оптимизируем ваш сайт.
            </p>
          </div>

        </div>

        <article className="w-full 3xl:w-1/2 min-w-0"> 
        <ul className="hidden sm:flex gap-[42px] w-full min-w-0"> 
          {US_ARTICLES_3.slice(0, 3).map((e, index) => (
            <li
              key={e.id}
              className={`border-t-[2px] border-red flex-1 min-w-0 flex flex-col gap-3 py-3 
              ${index === 3 ? 'col-span-3' : 'col-span-1'}`}> 
              <span className="text-red md:text-[20px] text-[16px] ">{e.num}</span> 
              <h4 className="md:text-[24px] text-[20px] ">{e.title}</h4> 
              <p className="text-base leading-5 ">{e.desc}</p> 
            </li>
          ))}
        </ul>  
      </article>

    </div>

    <div className="sm:hidden flex mt-10">
    <span className="text-red -rotate-90 max-h-[50px] -ml-0.5 font-light">Этапы</span>
    <CustomAccordeon>
        <ul
        className="border-t-[1px] border-grey">
          {US_ARTICLES_3.map((e, index) => (
            <AccordeonItem
            key={index}
            value={index}
            trigger={e.title}
            classNameTitle="text-xl sm:text-2xl lg:text-4xl"
            classNameItem="py-4 sm:py-7  flex items-center justify-between cursor-pointer"
            classNameChildren="sm:py-7 py-4"
            iconTitle={e.num}
            >
              <div
              className="">
                <p>
                  {e.desc}
                </p>
              </div>
            </AccordeonItem>
          ))}
        </ul>
      </CustomAccordeon>
   </div>

  </section>
    </>
  )
}