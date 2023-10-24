import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper'

import banner4 from '../../public/images/slider.jpg'
import banner5 from '../../public/images/slider2.jpg'
import banner6 from '../../public/images/slider3.jpg'
import banner7 from '../../public/images/slider4.jpg'
import banner8 from '../../public/images/slider5.jpg'
import banner9 from '../../public/images/slider6.jpg'

const Slider = () => {
	return (
		<div className='slider'>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				speed={6000}
				effect={'fade'}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[EffectFade, Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner5})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner8})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner7})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner9})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner4})`,
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner6})`,
					}}
				></SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider
