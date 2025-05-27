'use client'
import { PROJECTS_ITEMS } from "@/Items/Projects"
import StepModal from "./StepModal"
import { useState } from "react"
import Link from "next/link"
import MobileSlider from "./MobileSlider"

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedDirection, setSelectedDirection] = useState("")
  const [isChecked, setIsChecked] = useState(false) 

  const handleDirectionChange = (e) => {
    setSelectedDirection(e.target.value)
  }

  const handleCheckboxChange = () => {
    setIsChecked(prev => !prev) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSelectedDirection("")
    setIsChecked(false)
  };

  return (
    <>
      <div className="flex justify-between items-center px-main mb-10 md:mb-[70px]">
        <h2>Выполненные проекты</h2>
        <Link href="/projects" className="hidden sm:block btn-orange">
          Все проекты
        </Link>
      </div>

      {/* Десктопная версия */}
      <div className="hidden sm:grid 4xl:grid-cols-3 grid-cols-2 4xl:grid-rows-2 grid-rows-3">
        {PROJECTS_ITEMS.slice(0, 5).map((e, index) => (
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
          >
            <div className="p-[60px] h-full flex flex-col">
              <h3 className="md:text-4xl text-2xl">{e.title}</h3>        
              {e.tegs.length > 0 && (
                <div className="flex flex-wrap md:gap-3 gap-[8px] mt-6 md:mt-9 lg:text-base text-xs">
                  {e.tegs.map((teg, index) => (
                    <div key={index} className="bg-white py-3 px-4 rounded-[100px] text-black md:text-base text-[12px]">
                      {teg}
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
       
        <div className="px-main">
          <Link href="/projects" className="btn-orange w-[157px] flex items-center justify-center mt-10 mb-20">
            <span>Все проекты</span>
          </Link>
        </div>

        <div className="px-main">
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
    </>
  )
}