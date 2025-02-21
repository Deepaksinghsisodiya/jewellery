import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div>
         <div className="bg-gray-200 py-1">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={false}
            navigation={false}
            modules={[Autoplay]}
            className="sm:block z-1 relative"
          >
            <SwiperSlide>
              <div className="text-center text-md gap-1">
                <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                  LIMITED TIME ONLY!{" "}
                </span>
                <span className="text-black text-xs sm:text-xs md:text-sm underline font-bold">
                  | 25% OFF ON SELECT JEWELLERY
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center hover:underline decoration-black">
                <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                  FREE ENGAGEMENT RING CONSULTATION
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center hover:underline decoration-black">
                <span className="text-black text-xs sm:text-xs md:text-sm font-bold">
                  FREE SHIPPING{" "}
                </span>
                <span className="text-black text-xs sm:text-xs md:text-sm">
                  on orders above $100
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <span className="text-black font-bold text-xs sm:text-xs md:text-sm underline decoration-black">
                  Join My GK JEWELERS{" "}
                </span>
                <span className="text-black text-xs sm:text-xs md:text-sm">
                  for exclusive offers and rewards.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <span className="text-black font-bold text-xs sm:text-xs md:text-sm underline decoration-black">
                  BUY NOW PAY LATER{" "}
                </span>
                <span className="text-black text-xs sm:text-xs md:text-sm">
                  with AfterPay, Klarna, or PayPal.
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}

export default SwiperComponent