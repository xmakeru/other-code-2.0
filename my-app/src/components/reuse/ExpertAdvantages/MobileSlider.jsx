'use client'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { EXPERT_ADVANTAGES } from "@/config/constants/Advantages";


export default function MobileSlider() {
  return(
    <div className="block sm:hidden">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        slidesPerView={1.5}
        initialSlide={1}
        spaceBetween={-60}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-2',
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: -100,
          depth: 200,
          modifier: 1,
          scale: 0.8,
          slideShadows: false,
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}>
        {EXPERT_ADVANTAGES.map((i, index) => (
          <SwiperSlide
          className="cursor-grab active:cursor-grabbing shadow-lg mt-4 mb-6">
            <div
            className="flex flex-col gap-[1.0625rem] p-[1.875rem] h-full xs:h-[500px]">
              {i.mobileIcon}
              <h3
              className="text-[1.625rem]">{i.title}</h3>
              <p>{i.desc}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-2 flex justify-center gap-3 mt-8"></div>
      </Swiper>
    </div>
  )
}