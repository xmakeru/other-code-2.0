'use client'
import { useState } from "react"

const navTegs = [
  { id: 1, title: "Web-разработка" },
  { id: 2, title: "Мобильная разработка" },
  { id: 3, title: "Blockchain-решения" },
  { id: 4, title: "SEO/SMM" },
  { id: 5, title: "Искусственный интеллект" },
  { id: 6, title: "Сопровождение проектов" },
]

export default function Tegs({ onSelect }) {
  const [selectedTeg, setSelectedTeg] = useState('Web-разработка')

  const handleClick = (title) => {
    setSelectedTeg(title)
    onSelect(title)
  }

  return (
    <ul className="flex gap-4 flex-wrap my-[80px] sm:my-[100px] md:my-[150px]" role="listbox" aria-label="Выбор направления услуг">
      {navTegs.map((e) => (
        <li
          key={e.id}
          onClick={() => handleClick(e.title)}
          className={`cursor-pointer whitespace-nowrap py-3 px-6 rounded-[99px] md:text-[18px] text-[16px] font-normal 
          ${selectedTeg === e.title ? 'bg-red text-white' : 'bg-grey text-dark-grey'}
          hover:text-white hover:bg-dark-red transition-all`}
          role="option"
          aria-selected={selectedTeg === e.title}
          tabIndex={0}
        >
          {e.title}
        </li>
      ))}
    </ul>
  )
}