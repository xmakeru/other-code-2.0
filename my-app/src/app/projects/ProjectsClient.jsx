"use client";
import { useState } from "react";
import StepModal from "@/components/reuse/Projects/StepModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const navTegs = [
  { id: 1, title: "Все проекты" },
  { id: 2, title: "#blockchain" },
  { id: 3, title: "#web" },
  { id: 4, title: "#UX design" },
  { id: 5, title: "#mobile" },
  { id: 6, title: "#tg bot" },
  { id: 7, title: "#SEO" },
];

export default function ProjectsClient({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedTegs, setSelectedTegs] = useState(["Все проекты"]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDirectionChange = (e) => setSelectedDirection(e.target.value);
  const handleCheckboxChange = () => setIsChecked((prev) => !prev);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleTeg = (teg) => {
    if (teg === "Все проекты" || selectedTegs.includes(teg)) {
      setSelectedTegs(["Все проекты"]);
      setFilteredProjects(projects);
    } else {
      setSelectedTegs([teg]);
      setFilteredProjects(projects.filter((e) => e.tegs.includes(teg)));
    }
  };

  return (
    <main className="md:pt-[262px] sm:pt-[146px] pt-[123px]">
      <section>
        <div className="flex flex-col w-full 3xl:w-3/5 gap-[35px] sm:gap-[30px] md:gap-[70px] px-main">
          <h1>Проекты</h1>
          <p className="text-dark-grey">
            Разрабатываем сложные цифровые продукты, которые делают работу
            проще, понятнее и безопаснее.
          </p>
          <ul className=" pb-10 sm:pb-10 lg:pb-[90px] flex gap-4 flex-wrap">
            {navTegs.map((e) => (
              <li
                key={e.id}
                onClick={() => toggleTeg(e.title)}
                className={`cursor-pointer whitespace-nowrap py-3 px-6 bg-grey rounded-[99px] hover:text-white hover:bg-dark-red text-nowrap transition-all duration-300  focus:btn-orange 
                  md:text-[18px] text-[16px] font-normal text-dark-grey
                  ${selectedTegs.includes(e.title) ? "bg-red text-white" : "bg-grey"}`}
              >
                {e.title}
              </li>
            ))}
          </ul>
        </div>

        {/* DESKTOP */}
        <div className="hidden 4xl:grid 4xl:grid-cols-3 4xl:auto-rows-fr">
          {filteredProjects.slice(0, 5).map((e, index) => (
            <div
              key={e.id}
              className={`
               ${index < 3 ? "text-white" : "text-black"}
               ${index === 4 ? "" : "block"}
             `}
              style={{
                backgroundImage: `url(${e.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-7 4xl:p-[60px] h-full flex flex-col">
                <h3>{e.title}</h3>
                {e.tegs.length > 0 && (
                  <div className="flex flex-wrap md:gap-3 gap-[8px] mt-6 4xl:mt-9 lg:text-base text-xs">
                    {e.tegs.map((teg, index) => (
                      <div
                        key={index}
                        className="bg-white py-3 px-4 rounded-[100px] text-black md:text-base text-[12px]"
                      >
                        {teg}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="bg-light-grey px-[120px] smd:px-[200px] mlg:px-[38px] lg:px-[70px] xl:px-[60px] py-[61px] mlg:col-span-1 col-span-2 ">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <h3>Обсудим ваш проект?</h3>
              <span className="text-[20px] sm:text-[16px] md:text-[24px] mt-4 4xl:mb-10 mb-7">
                Выберите одно из направлений работы и заполните бриф, пожалуйста
              </span>

              <div className="grid grid-cols-2 grid-rows-3 md:gap-5 gap-[14px]">
                {[
                  { label: <>Веб-разработка</>, value: "Веб-разработка" },
                  {
                    label: <>Мобильная разработка</>,
                    value: "Мобильная разработка",
                  },
                  { label: <>Blockchain-решения</>, value: "Блокчейн" },
                  {
                    label: <>Продвижение и реклама</>,
                    value: "Продвижение и реклама",
                  },
                  {
                    label: <>Сопровождение проектов</>,
                    value: "Сопровождение проектов",
                  },
                  {
                    label: <>Комплексный проект</>,
                    value: "Комплексный проект",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="bg-white rounded-[70px] px-[12px] py-[12px] md:py-[5px] mlg:py-[7px] 4-5xl:py-[5px]  3xl:py-[13px] md:px-[13px]  6xl:py-4 flex items-center"
                  >
                    <label className="radio-container">
                      <input
                        type="radio"
                        name="direction"
                        value={item.value}
                        checked={selectedDirection === item.value}
                        onChange={handleDirectionChange}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="text-[20px] sm:text-[13px] md:text-[18px]">
                        {item.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-start my-[30px] 4xl:my-10 text-[20px] sm:text-[13px] md:text-[18px]">
                <label className="flex gap-4 cursor-pointer">
                  <input
                    className="rounded-none w-4 h-4 p-2 checkbox-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="font-light">
                    Отправляя форму, вы соглашаетесь с политикой обработки
                    персональных данных
                  </span>
                </label>
              </div>

              <button
                className="btn-orange md:w-[207px] w-[175px] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setModalOpen(true)}
                disabled={!selectedDirection || !isChecked}
              >
                Заполнить бриф
              </button>
            </form>
          </div>
        </div>

        {/* MEDIUM */}
        <div className="4xl:hidden hidden sm:grid 4xl:grid-cols-3 grid-cols-2 4xl:grid-rows-2 grid-rows-3">
          {filteredProjects.slice(0, 5).map((e, index) => (
            <div
              key={e.id}
              className={`
                    aspect-auto xl:aspect-square
                  text-white
                    ${index === 4 ? "hidden mlg:block" : "block"}
                    `}
              style={{
                backgroundImage: `url(${e.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-7 md:p-[60px] h-full flex flex-col">
                <h3
                  className={`md:text-4xl text-2xl
                      ${index > 2 ? "text-black" : "text-white"}`}
                >
                  {e.title}
                </h3>
                {e.tegs.length > 0 && (
                  <div className="flex flex-wrap md:gap-3 gap-[8px] mt-6 md:mt-9 lg:text-base text-xs">
                    {e.tegs.map((teg, index) => (
                      <div
                        key={index}
                        className="bg-white py-3 px-4 rounded-[100px] text-black md:text-base text-[12px]"
                      >
                        {teg}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className=" bg-light-grey px-[120px] smd:px-[180px] mlg:px-[38px] lg:px-[70px] xl:px-[86px] py-[61px] 5xl:col-span-1 col-span-2 mlg:col-span-1">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <h3 className="md:text-4xl text-2xl">Обсудим ваш проект?</h3>
              <span className="text-[20px] sm:text-[16px] md:text-[24px] mt-4 4xl:mb-10 mb-7">
                Выберите одно из направлений работы и заполните бриф, пожалуйста
              </span>

              <div className="grid grid-cols-2 grid-rows-3 md:gap-5 gap-[14px]">
                {[
                  { label: <>Веб-разработка</>, value: "Веб-разработка" },
                  {
                    label: <>Мобильная разработка</>,
                    value: "Мобильная разработка",
                  },
                  { label: <>Blockchain-решения</>, value: "Блокчейн" },
                  {
                    label: <>Продвижение и реклама</>,
                    value: "Продвижение и реклама",
                  },
                  {
                    label: <>Сопровождение проектов</>,
                    value: "Сопровождение проектов",
                  },
                  {
                    label: <>Комплексный проект</>,
                    value: "Комплексный проект",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="bg-white rounded-[70px] px-[12px] py-[12px] md:py-[12px] mlg:py-[5px 4-5xl:py-[5px]  3xl:py-[13px] md:px-[13px]  6xl:py-4  flex items-center"
                  >
                    <label className="radio-container">
                      <input
                        type="radio"
                        name="direction"
                        value={item.value}
                        checked={selectedDirection === item.value}
                        onChange={handleDirectionChange}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="text-[20px] sm:text-[13px] md:text-[18px]">
                        {item.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-start my-[30px] 4xl:mt-10 4xl:mb-4 text-[20px] sm:text-[13px] md:text-[18px]">
                <label className="flex gap-4 cursor-pointer">
                  <input
                    className="rounded-none w-4 h-4 p-2 checkbox-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="font-light">
                    Отправляя форму, вы соглашаетесь с политикой обработки
                    персональных данных
                  </span>
                </label>
              </div>

              <button
                className="btn-orange md:w-[207px] w-[175px] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setModalOpen(true)}
                disabled={!selectedDirection || !isChecked}
              >
                Заполнить бриф
              </button>
            </form>
          </div>
        </div>

        {/* MOBILE */}
        <div className="sm:hidden block">
         <div className="w-full h-[410px] flex flex-col items-center relative">
               <Swiper
                 className="w-full h-full"
                 loop={true}
                 modules={[Pagination, Autoplay]}
                 pagination={{
                   clickable: true,
                   el: ".swiper-pagination",
                   bulletClass: "swiper-custom-bullet",
                   bulletActiveClass: "swiper-custom-bullet-active",
                 }}
                 autoplay={{ delay: 5000 }}
                 speed={800}
                 spaceBetween={0}
                 slidesPerView={1}
               >
                 {filteredProjects.map((i, index) => (
                   <SwiperSlide
                     key={index}
                     className="w-full h-full bg-center bg-cover cursor-grab active:cursor-grabbing"
                     style={{ backgroundImage: `url(${i.image})` }}>
                     <div
                     className="p-[2.375rem] flex flex-col gap-[1.375rem]">
                       <h3
                       className="text-[1.375rem] text-white">{i.title}</h3>
                       <div
                       className="flex gap-2">
                         {i.tegs.map((i, index) => (
                           <span
                           key={index}
                           className="rounded-[4.6875rem] bg-white px-3 py-[0.5625rem] text-[0.75rem]">
                             {i}
                           </span>
                         ))}
                       </div>
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
         
               {/* Контейнер для пагинации */}
               <div className="swiper-pagination flex gap-3 absolute bottom-5 z-40" />
             </div>
          <div className="hidden sm:block bg-light-grey px-[100px] smd-md:px-[200px] mlg:px-[30px] lg:px-[60px] py-[35px] 4xl:px-[86px] 4xl:py-[60px] mlg:col-span-1 col-span-2 ">
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <h3>Обсудим ваш проект?</h3>
              <span className="text-[20px] sm:text-[16px] md:text-[24px] mt-4 4xl:mb-10 mb-7">
                Выберите одно из направлений работы и заполните бриф, пожалуйста
              </span>

              <div className="grid grid-cols-2 grid-rows-3 md:gap-5 gap-[14px]">
                {[
                  { label: <>Веб-разработка</>, value: "Веб-разработка" },
                  {
                    label: <>Мобильная разработка</>,
                    value: "Мобильная разработка",
                  },
                  { label: <>Blockchain-решения</>, value: "Блокчейн" },
                  {
                    label: <>Продвижение и реклама</>,
                    value: "Продвижение и реклама",
                  },
                  {
                    label: <>Сопровождение проектов</>,
                    value: "Сопровождение проектов",
                  },
                  {
                    label: <>Комплексный проект</>,
                    value: "Комплексный проект",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="bg-white rounded-[70px] px-[9px] py-[10px] smd-md:py-[7px] md:px-[13px] flex items-center"
                  >
                    <label className="radio-container">
                      <input
                        type="radio"
                        name="direction"
                        value={item.value}
                        checked={selectedDirection === item.value}
                        onChange={handleDirectionChange}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="text-[20px] sm:text-[13px] md:text-[18px]">
                        {item.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-start my-[30px] 4xl:my-10 text-[20px] sm:text-[13px] md:text-[18px]">
                <label className="flex gap-4 cursor-pointer">
                  <input
                    className="rounded-none w-4 h-4 p-2 checkbox-input"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="font-light">
                    Отправляя форму, вы соглашаетесь с политикой обработки
                    персональных данных
                  </span>
                </label>
              </div>

              <button
                className="btn-orange md:w-[207px] w-[207px] sm:w-[175px] disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setModalOpen(true)}
                disabled={!selectedDirection || !isChecked}
              >
                Заполнить бриф
              </button>
            </form>
          </div>
        </div>

        <div className="sm:hidden block px-main mb-to-footer mt-20">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full bg-light-grey rounded-[8px] p-[34px]"
          >
            <h3 className="text-[30px] mb-5">Обсудим ваш проект?</h3>
            <p className="text-black pb-10 border-b-[1px] border-grey">
              Выберите одно из направлений работы и заполните бриф, пожалуйста
            </p>

            <div className="flex flex-col">
              {[
                { label: <>Веб-разработка</>, value: "Веб-разработка" },
                {
                  label: <>Мобильная разработка</>,
                  value: "Мобильная разработка",
                },
                { label: <>Blockchain решения</>, value: "Блокчейн" },
                {
                  label: <>Продвижение и реклама</>,
                  value: "Продвижение и реклама",
                },
                {
                  label: <>Сопровождение проектов</>,
                  value: "Сопровождение проектов",
                },
                { label: <>Комплексный проект</>, value: "Комплексный проект" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="border-b-[1px] py-3 border-grey"
                >
                  <label className="radio-container">
                    <input
                      type="radio"
                      name="direction"
                      value={item.value}
                      checked={selectedDirection === item.value}
                      onChange={handleDirectionChange}
                    />
                    <span className="radio-checkmark"></span>
                    <span className="text-[20px]">{item.label}</span>
                  </label>
                </div>
              ))}
            </div>

            <div className="flex items-start my-[34px] font-light text-[15px] sm:text-[13px] md:text-[16px]">
              <label className="flex gap-4 cursor-pointer">
                <input
                  className="rounded-none  checkbox-input"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="font-light">
                  Отправляя форму, вы соглашаетесь с политикой обработки
                  персональных данных
                </span>
              </label>
            </div>

            <button
              className="btn-orange w-[207px] disabled:opacity-50 disabled:cursor-not-allowed "
              onClick={() => setModalOpen(true)}
              disabled={!selectedDirection || !isChecked}
            >
              Заполнить бриф
            </button>
          </form>
        </div>

        <StepModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          initialDirection={selectedDirection}
        />
      </section>
    </main>
  );
}
