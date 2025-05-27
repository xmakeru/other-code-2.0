'use client'

import { useState } from "react"
import Tegs from "./Tegs"
import WebDev from "./WebDev"

export default function MainContent() {
  const [selectedTeg, setSelectedTeg] = useState('Web-разработка')

  return (
    <div className="flex flex-col">
      <h1 className="w-full 3xl:w-1/2 mb-[35px] sm:mb-[30px] md:mb-[70px]">Услуги</h1>
      <p className="w-full 3xl:w-1/2 text-dark-grey">
        Мы предлагаем полный комплекс услуг для проектов любого уровня сложности и стадии готовности — от начальной, когда есть лишь идея, до поддержки готового ресурса
      </p>

      <Tegs onSelect={setSelectedTeg} />

      {selectedTeg === 'Web-разработка' && <WebDev />}
    </div>
  )
}