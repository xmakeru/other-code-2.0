import Image from "next/image"

export default function Technologies() {
  
  return (
      <section className="px-main flex sm:flex-row flex-col gap-24">
        
        <div
          className="w-full sm:w-[48%] md:w-[50%] flex flex-col gap-6 justify-center"
        >
          <h2>Технологии</h2>
          <p>
            Каждая задача, выполняемая нами уникальна, и требует персонального подхода при выборе стека технологий для разработки 
            и может сочетать в себе несколько языков программирования и фреймворков.
          </p>
        </div>

        
        <div
          className="w-full flex items-center justify-center"
        >
          <Image src="/image/animation.svg" width={1075} height={867} alt="animation-technologies" />
        </div>
      </section>
  )
}