import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "../../assets/image/image 7.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

export const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Image} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={Image} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
