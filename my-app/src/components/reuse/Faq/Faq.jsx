'use client'
import { useState, useRef, useEffect } from "react"
import { FAQ_ITEMS } from "@/Items/Faq"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="px-main mb-to-footer">
      <h2 className="md:mb-[70px] mb-10">FAQ</h2>
      <ul className="border-t-[1px] border-grey cursor-pointer">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index
          const ref = useRef(null)
          const [height, setHeight] = useState(0)

          useEffect(() => {
            if (isOpen) {
              setHeight(ref.current?.offsetHeight || 0)
            } else {
              setHeight(0)
            }
          }, [isOpen])

          return (
            <li key={index}>
              <div
                role="button"
                onClick={() => toggle(index)}
                className={`
                  py-4 sm:py-7 flex items-center justify-between cursor-pointer 
                  ${isOpen ? 'border-b-0' : 'border-b-[1px] border-grey'}
                `}
              >
                <h3 className="text-[20px] md:text-[36px] sm:text-[24px]">{item.title}</h3>

                {/* Десктопные и мобильные иконки */}
                <div className="hidden sm:block px-[30px]">
                  {isOpen ? (
                    <svg width="34" height="34" viewBox="0 0 22 2" fill="none">
                      <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
                      <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                </div>

                <div className="block sm:hidden">
                  {isOpen ? (
                    <svg width="23" height="23" viewBox="0 0 22 2" fill="none">
                      <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="23" height="23" viewBox="0 0 34 34" fill="none">
                      <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
                      <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </div>

              <div
                className="transition-all duration-300"
                style={{
                  maxHeight: `${height}px`,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s, opacity 0.3s",
                }}
              >
                <div
                  ref={ref}
                  className={`
                    sm:py-7 py-4 
                    ${isOpen ? 'border-b-[1px] border-grey' : 'border-b-0'}
                  `}
                >
                  <p>{item.desc}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
