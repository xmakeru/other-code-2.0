'use client'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { PROJECTS_ITEMS } from "@/config/constants/Projects";

export default function MobileSlider() {
  return (
    <div className="w-full h-[410px] flex flex-col items-center relative">
      <Swiper
        className="w-full h-full"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
      >
        {PROJECTS_ITEMS.map((i, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full bg-center bg-cover cursor-grab active:cursor-grabbing"
            style={{ backgroundImage: `url(${i.image})` }}>
            <div
            className="p-[2.375rem] flex flex-col gap-[1.375rem]">
              <h3
              className="text-[1.375rem] text-white">{i.title}</h3>
              <div
              className="flex gap-2">
                {i.tags.map((i, index) => (
                  <span
                  key={index}
                  className="rounded-[4.6875rem] bg-white px-3 py-[0.5625rem] text-[0.75rem]">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination flex gap-3 absolute bottom-5 z-40" />
    </div>
  );
}
