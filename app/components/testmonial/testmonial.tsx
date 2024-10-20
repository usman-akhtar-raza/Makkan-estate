"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import { clients } from "@/data/data";
import TestiminomialCard from "../testiminomialCard/testiminomialCard";

export default function Testmonial() {
  return (
    <>
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-[900px]"
      >
        <SwiperSlide>
          <TestiminomialCard
            url={clients[0].url}
            name={clients[0].name}
            profession={clients[0].profession}
            comment={clients[0].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestiminomialCard
            url={clients[1].url}
            name={clients[1].name}
            profession={clients[1].profession}
            comment={clients[1].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestiminomialCard
            url={clients[2].url}
            name={clients[2].name}
            profession={clients[2].profession}
            comment={clients[2].comment}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <TestiminomialCard
            url={clients[3].url}
            name={clients[3].name}
            profession={clients[3].profession}
            comment={clients[3].comment}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
