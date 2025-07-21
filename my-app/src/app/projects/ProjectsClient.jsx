"use client";
import { useState } from "react";
import StepModal from "@/components/reuse/Projects/StepModal";
import MobileSlider from "@/components/reuse/Projects/MobileSlider";

const navTags = [
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
  const [selectedTags, setSelectedTags] = useState(["Все проекты"]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleDirectionChange = (e) => setSelectedDirection(e.target.value);
  const handleCheckboxChange = () => setIsChecked((prev) => !prev);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleTag = (tag) => {
    if (tag === "Все проекты" || selectedTags.includes(tag)) {
      setSelectedTags(["Все проекты"]);
      setFilteredProjects(projects);
    } else {
      setSelectedTags([tag]);
      setFilteredProjects(projects.filter((e) => e.tags.includes(tag)));
    }
  };

  return (
    <main className="md:pt-[262px] sm:pt-[146px] pt-[123px]">
      <section aria-label="Проекты">
        <div className="flex flex-col w-full 3xl:w-3/5 gap-[35px] sm:gap-[30px] md:gap-[70px] px-main">
          <h1>Проекты</h1>
          <p className="text-dark-grey">
            Разрабатываем сложные цифровые продукты, которые делают работу
            проще, понятнее и безопаснее.
          </p>
          <ul className="pb-10 sm:pb-10 lg:pb-[90px] flex gap-4 flex-wrap" role="listbox" aria-label="Фильтр по тегам проектов">
            {navTags.map((e) => (
              <li
                key={e.id}
                onClick={() => toggleTag(e.title)}
                className={`cursor-pointer whitespace-nowrap py-3 px-6 bg-grey rounded-[99px] hover:text-white hover:bg-dark-red text-nowrap transition-all duration-300  focus:btn-orange 
                  md:text-[18px] text-[16px] font-normal text-dark-grey
                  ${selectedTags.includes(e.title) ? "bg-red text-white" : "bg-grey"}`}
                role="option"
                aria-selected={selectedTags.includes(e.title)}
              >
                {e.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:grid 4xl:grid-cols-3 grid-cols-2 4xl:grid-rows-2 grid-rows-3">
        {filteredProjects.slice(0, 5).map((e, index) => (
          <div 
            key={e.id} 
            className={`
              aspect-auto 
              ${index > 2 ? '4xl:text-black': 'text-white'}
              ${index === 4 ? 'mlg:block hidden' : 'block'}
            `}
            style={{
              backgroundImage: `url(${e.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-label={`Изображение проекта: ${e.title}`}
            role="img"
          >
            <div className="p-[60px] h-full flex flex-col">
              <h3 className="md:text-4xl text-2xl">{e.title}</h3>        
              {e.tags.length > 0 && (
                <div className="flex flex-wrap md:gap-3 gap-[8px] mt-6 md:mt-9 lg:text-base text-xs">
                  {e.tags.map((tag, index) => (
                    <div key={index} className="bg-white py-3 px-4 rounded-[100px] text-black md:text-base text-[12px]">
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}  

        <div className="bg-light-grey px-[120px] smd:px-[180px] mlg:px-[38px] lg:px-[70px] xl:px-[86px] py-[61px] mlg:col-span-1 col-span-2 ">
          <form 
          onSubmit={handleSubmit}
          className="flex flex-col h-full" >
            <h3 className="md:text-4xl text-2xl">Обсудим ваш проект?</h3>
            <span className="text-[20px] sm:text-[16px] md:text-[24px] mt-4 4xl:mb-10 mb-7">
              Выберите одно из направлений работы и заполните бриф, пожалуйста
            </span>
            
            <div className="grid grid-cols-2 grid-rows-3 md:gap-5 gap-[14px]">
              {[
                { label: <>Веб-разработка</>, value: "Веб-разработка" },
                { label: <>Мобильная разработка</>, value: "Мобильная разработка" },
                { label: <>Blockchain-решения</>, value: "Блокчейн" },
                { label: <>Продвижение и реклама</>, value: "Продвижение и реклама" },
                { label: <>Сопровождение проектов</>, value: "Сопровождение проектов" },
                { label: <>Комплексный проект</>, value: "Комплексный проект" },
              ].map((item) => (
                <div key={item.value} className="bg-white rounded-[70px] px-[12px] py-[12px] md:py-[12px] mlg:py-[5px] 4-5xl:py-[5px]  3xl:py-[13px] md:px-[13px]  6xl:py-4  flex items-center">
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
                  Отправляя форму, вы соглашаетесь с политикой обработки персональных данных
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

      {/* Мобильная версия */}
      <div className="sm:hidden flex flex-col">
        <MobileSlider />       

        <div className="px-main mt-20">
          <form onSubmit={handleSubmit} className="flex flex-col h-full bg-light-grey rounded-[8px] p-[34px]">
            <h3 className="text-[30px] mb-5">Обсудим ваш проект?</h3>
            <p className="text-black pb-10 border-b-[1px] border-grey">
              Выберите одно из направлений работы и заполните бриф, пожалуйста
            </p>
            
            <div className="flex flex-col">
              {[
                { label: <>Веб-разработка</>, value: "Веб-разработка" },
                { label: <>Мобильная разработка</>, value: "Мобильная разработка" },
                { label: <>Blockchain решения</>, value: "Блокчейн" },
                { label: <>Продвижение и реклама</>, value: "Продвижение и реклама" },
                { label: <>Сопровождение проектов</>, value: "Сопровождение проектов" },
                { label: <>Комплексный проект</>, value: "Комплексный проект" },
              ].map((item) => (
                <div key={item.value} className="border-b-[1px] py-3 border-grey">
                  <label className="radio-container">
                    <input 
                      type="radio" 
                      name="direction" 
                      value={item.value} 
                      checked={selectedDirection === item.value} 
                      onChange={handleDirectionChange} 
                    />
                    <span className="radio-checkmark"></span>
                    <span className="text-[20px]">
                      {item.label}
                    </span>
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
                  Отправляя форму, вы соглашаетесь с политикой обработки персональных данных
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
