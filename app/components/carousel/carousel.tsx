"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-[100px] md:mt-[-100px] w-[700px]"
      >
        <SwiperSlide>
          <Image src="/images/carousel-1.jpg" alt="" width={700} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="/images/carousel-2.jpg" alt="" width={700} height={400} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
