'use client'
import { useState, useEffect, createContext, useContext, useRef } from "react"

const AccordeonContext = createContext()

export default function CustomAccordeon({children}) {
  const [selected, setSelected] = useState()

  

  return(
    <ul>
      <AccordeonContext.Provider value={{selected, setSelected}}>
        {children}
      </AccordeonContext.Provider>
    </ul>
  )
}

export function AccordeonItem({children, value, trigger, iconTitle, classNameHeader, classNameItem, classNameChildren}) {
  const {selected, setSelected} = useContext(AccordeonContext) //Достаёт selected и setSelected из ближайшего Provider
  const open = selected === value
  const ref = useRef(null)
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open) {
      setHeight(ref.current?.offsetHeight || 0);
    } else {
      setHeight(0);
    }
  }, [open]);

  return(
    <li
    >
      <div
      role="button" 
      onClick={() => setSelected(open ? null : value)}
      className={`${classNameItem}
      ${open ? 'border-b-0' : 'border-b-[1px] border-grey'
      }`}
      >
       <div
       className={`flex ${iconTitle && "gap-4"} items-center`}>
        <span className="text-xl text-red font-medium">{iconTitle}</span>
          <h3 className={classNameHeader}>{trigger}
          </h3>
       </div>
          <div
          className="hidden sm:block">
          <div
          className={`${open ? "hidden" : 'block'} px-[30px]`}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div
          className={`${open ? "block" : 'hidden'} px-[30px]`}>
            <svg width="34" height="34" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          </div>
          <div
          className="block sm:hidden">
          <div
          className={`${open ? "hidden" : 'block'}`}>
            <svg width="23" height="23" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 17H32" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 32L17 2" stroke="#FF3C00" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div
          className={`${open ? "block" : 'hidden'}`}>
            <svg width="23" height="23" viewBox="0 0 22 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H21" stroke="#FF3C00" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          </div>
      </div>
      <div
      className="transition-all duration-300"
      style={{
        maxHeight: `${height}px`,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s, opacity 0.3s",
      }}>
        <div ref={ref}
        className={`${classNameChildren}
        ${open ? 'border-b-[1px] border-grey' : 'border-b-0'
      }`}>
          {children}
        </div>
      </div>
    </li>
  )
}