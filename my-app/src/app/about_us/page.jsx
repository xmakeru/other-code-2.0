import ExpertAdvantages from "@/components/reuse/ExpertAdvantages/ExpertAdvantages"
import Technologies from "@/components/reuse/Technologies/Technologies"


export const metadata = {
  title: "Other code | О нас",
  description: "dev",
}



export default function AboutUsPage() {
  return(
    <main
    className="flex flex-col gap-20 sm:gap-[6.25rem] md:gap-[9.375rem] mb-to-footer">
      <section className="relative h-screen overflow-hidden">       
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            src="/mp4/about-us.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="auto"
            poster="/image/about-us-poster.jpg"
          />
        </div>

        
        <div className="flex flex-col sm:flex text-white justify-end sm:justify-center h-full w-full sm:pb-0 pb-10">
          <div className="flex flex-col px-main w-full">
            <div className="flex flex-col gap-[35px] sm:gap-[30px] md:gap-[70px]
            w-full lg:w-2/3 2xl:w-[70%] 3xl:w-[65%] 3-5xl:w-[60%] 4xl:w-[50%]">
              <h1>
              Кто мы и почему мы другие?
              </h1>
              <p>
              Other code — это другой подход к разработке цифровых решений для любых задач. Мы создаём уникальные IT-продукты, не используя шаблоны, 
              а оцениваем каждый проект с точки зрения его целесообразности. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <ExpertAdvantages />
      <Technologies/>
      </main>
  )
}