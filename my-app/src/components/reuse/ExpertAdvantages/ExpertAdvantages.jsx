import { EXPERT_ADVANTAGES } from "@/config/constants/Advantages";
import MobileSlider from "./MobileSlider";



export default function ExpertAdvantages() {

  return(
    // ДЕКСТОПНАЯ ВЕРСИЯ
    <section
    className="">
      <h2
      className="mb-[70px] px-main">Экспертные преимущества</h2>

      <div
      className="px-main hidden sm:grid xl:grid-cols-3 grid-cols-2 xl:grid-rows-2 grid-rows-3 gap-y-[70px] gap-x-4">
        {EXPERT_ADVANTAGES.map((i) => (
          <div
          key={i.id}
          className="flex flex-col gap-[30px] p-2 bg-whiter">
            <div className="md:block hidden">{i.icon}</div>
            <div className="block md:hidden">{i.mobileIcon}</div>
            <h3
            className="text-2xl md:text-4xl">{i.title}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>

     {/* МОБИЛЬНАЯ ВЕРСИЯ */}
      <MobileSlider />

    </section>
  )
}