import ExpertAdvantages from "@/components/reuse/ExpertAdvantages/ExpertAdvantages";
import Faq from "@/components/reuse/Faq/Faq";
import Projects from "@/components/reuse/Projects/Projects";
import Technologies from "@/components/reuse/Technologies/Technologies";
import WorkDirections from "@/components/reuse/WorkDirections/WorkDirections";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 sm:gap-[6.25rem] md:gap-[9.375rem] mb-to-footer">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            src="/mp4/main.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            preload="auto"
            poster="/image/home-poster.jpg"
          />
        </div>
        <div className="flex flex-col sm:flex text-white justify-end sm:justify-center h-full w-full">
          <div className="flex px-main w-full pb-20 sm:pb-0">
            <div className="flex flex-col gap-[35px] sm:gap-[30px] md:gap-[70px]
            w-full lg:w-2/3 2xl:w-[70%] 3xl:w-[65%] 3-5xl:w-[60%] 4xl:w-[50%]"> 
              <h1
              className="text-[36px] md:text-[80px]">Уникальные цифровые продукты для бизнеса и государства</h1>
              <p>
                Помогаем создавать эффективные digital-продукты, основанные
                на глубокой аналитике и здравом смысле
              </p>
            </div>
          </div>
        </div>
      </section>

      <WorkDirections />
      <Technologies />
      <Projects />
      <ExpertAdvantages />
      <Faq />

    </main>
  );
}
