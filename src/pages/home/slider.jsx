import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import banner from "../../public/images/banner.png"
import banner2 from "../../public/images/banner2.png"
import banner3 from "../../public/images/banner3.png"

const Slider = () => {
  
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
          <p>Вся продукция компании для наших партнеров всегда в наличии и доставляется строго в указанные сроки без срывов поставок</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ 
      backgroundImage: `url(${banner3})` 
    }}>
      <div className="container">
          <div className="banner_info">
          <h1>Dark 777. II</h1>
          <p>Декоративная стеновая  пвх панель в мужском стиле, если вам нравятся более однотонные цвета, вам это подходить</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ 
      backgroundImage: `url(${banner2})` 
    }}>
         <div className="container">
          <div className="banner_info">
          <h1>brown 215. II</h1>
          <p>Эксклюзивный коричневый цветь подходить для офисов и ресторанов с отличным оттенкой</p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider