import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { useTranslation } from 'react-i18next';

import banner from "../../public/images/banner.png"
import banner2 from "../../public/images/banner2.png"
import banner3 from "../../public/images/banner3.png"

const Slider = () => {
  const [t] = useTranslation("global")
  
  return (
    <div className='slider'>
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={6000}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay,  Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ 
      backgroundImage: `url(${banner})` 
    }}>
      <div className="container">
          <div className="banner_info">
          <h1>Shade vol. II</h1>
          <p>{t("banner.info")}</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ 
      backgroundImage: `url(${banner3})` 
    }}>
      <div className="container">
          <div className="banner_info">
          <h1>Dark 777. II</h1>
          <p>{t("banner.info_2")}</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ 
      backgroundImage: `url(${banner2})` 
    }}>
         <div className="container">
          <div className="banner_info">
          <h1>brown 215. II</h1>
          <p>{t("banner.info_3")}</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider