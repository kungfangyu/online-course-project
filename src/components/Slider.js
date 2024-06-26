"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import style from "./Slider.module.css";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style["swiper-slide"]}>
          <img src="/images/image01.webp" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className={style["swiper-slide"]}>
          <img src="images/image01.webp" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className={style["swiper-slide"]}>
          <img src="/images/image01.webp" alt="Nature 1" />
        </SwiperSlide>
        <SwiperSlide className={style["swiper-slide"]}>
          <img src="/images/image01.webp" alt="Nature 1" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
