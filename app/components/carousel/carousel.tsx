// "use client";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";

// // import "./styles.css";

// export default function Carousel() {
//   return (
//     <>
//       <Swiper className=" h-[600px] mt-[-100px] mySwiper">
//         <SwiperSlide>
//           <img src="/images/carousel-1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           {" "}
//           <img src="/images/carousel-2.jpg" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function App() {
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
        className="mySwiper"
      >
        {/* <Swiper className=" h-[600px] mt-[-100px] mySwiper"> */}

        <SwiperSlide>
          <img src="/images/carousel-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/carousel-2.jpg" alt="" />
        </SwiperSlide>
        {/* </Swiper> */}
      </Swiper>
    </>
  );
}
