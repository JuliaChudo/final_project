import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SwiperBtn from "./SwiperBtn";
import Banner1 from "../assets/images/Banner1.webp";
import Banner2 from "../assets/images/Banner2.webp";
import Banner3 from "../assets/images/Banner3.webp";

export default () => {
    return (
        <Swiper className="banner-container"
            // install Swiper modules
            modules={[Navigation, EffectFade, Autoplay]}
            
            slidesPerView={1}
            effect="fade"
            speed={1500}
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{ delay: 4000,
                disableOnInteraction: false 
            }}
        >
            <SwiperSlide> <img src={Banner1} alt="banner1" className="images-slider" /></SwiperSlide>
            <SwiperSlide> <img src={Banner2} alt="banner2" className="images-slider" /></SwiperSlide>
            <SwiperSlide> <img src={Banner3} alt="banner3" className="images-slider" /></SwiperSlide>
            <SwiperBtn />
        </Swiper>
    );
};