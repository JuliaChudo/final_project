import React from "react"
import { useSwiper } from "swiper/react"
import {CircleChevronRight, CircleChevronLeft} from "lucide-react";

export default function SwiperBtn(){
    const swiper = useSwiper();
    return(
        <div className="swiper-btns">
            <button className='my-custom-prev' onClick={()=>swiper.slidePrev()}><CircleChevronLeft size={40}/></button>
            <button className='my-custom-next' onClick={()=>swiper.slideNext()}><CircleChevronRight size={40} /></button>
        </div>

    )
}