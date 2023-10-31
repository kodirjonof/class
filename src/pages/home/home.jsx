import React from 'react'
import Slider from './slider'

import './home.scss'
import Advantages from '../../component/advantages'
import Product from '../../component/product'
import Brands from '../../component/brands'
import Contact from '../../component/contact'

import product1 from '../../public/images/product1.png'
import product2 from '../../public/images/product2.png'
import product3 from '../../public/images/product3.png'
import product4 from '../../public/images/product4.png'
import product5 from '../../public/images/product5.png'
import product6 from '../../public/images/product6.png'
import product7 from '../../public/images/product7.png'
import product8 from '../../public/images/product8.png'
import product9 from '../../public/images/product9.png'
import product10 from '../../public/images/product10.png'
import product11 from '../../public/images/product11.png'
import product12 from '../../public/images/product12.png'
import product13 from '../../public/images/product13.png'
import product14 from '../../public/images/product14.png'
import product15 from '../../public/images/product15.png'
import product16 from '../../public/images/product16.png'
import product17 from '../../public/images/product17.png'
import product18 from '../../public/images/product18.png'
import product19 from '../../public/images/product19.png'
import product20 from '../../public/images/product20.png'
import product21 from '../../public/images/product21.png'
import logo from '../../public/svg/ALUCLASS.svg'
import logo2 from '../../public/svg/ALUCLASS2.svg'

import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const aluclassProduct = [
	{
		img: product1,
		name: 'АСР1001',
	},
	{
		img: product2,
		name: 'АСР1002',
	},
	{
		img: product3,
		name: 'АСР1003',
	},
	{
		img: product4,
		name: 'АСР1004',
	},
	{
		img: product5,
		name: 'АСР1005',
	},
	{
		img: product6,
		name: 'АСР1006',
	},
	{
		img: product7,
		name: 'АСР1007',
	},
	{
		img: product8,
		name: 'АСР1008',
	},
	{
		img: product9,
		name: 'АСР1009',
	},
	{
		img: product10,
		name: 'АСР1010',
	},
	{
		img: product11,
		name: 'АСР1011',
	},
	{
		img: product12,
		name: 'АСР1012',
	},
	{
		img: product13,
		name: 'АСР1013',
	},
	{
		img: product14,
		name: 'АСР1014',
	},
	{
		img: product15,
		name: 'АСР1015',
	},
	{
		img: product16,
		name: 'АСР1016',
	},
	{
		img: product17,
		name: 'АСР1017',
	},
	{
		img: product18,
		name: 'АСР1018',
	},
	{
		img: product19,
		name: 'АСР1019',
	},
	{
		img: product20,
		name: 'АСР M-1',
	},
	{
		img: product21,
		name: 'АСР M-2',
	},
]

const Home = () => {
	const [t] = useTranslation('global')
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>ALUCLASS | {t('home.main')}</title>
				<link rel='canonical' href='/' />
			</Helmet>
			<Header logo={logo} />
			<div className='home'>
				<Slider />
				<Brands />
				<Advantages />
				<Product products={aluclassProduct} />
				<p className='home_info wow lightSpeedIn center'>{t('home.info')}</p>
				<Contact
					phone={'+998 95 044 99 90'}
					name='Alisher'
					company='Aluclass'
				/>
				<Footer
					logo={logo2}
					phone={'+99897-771-31-51'}
					email={'ALUCLASS'}
					instagram={
						'https://instagram.com/aluclass_uzbekistan?igshid=NzZhOTFlYzFmZQ=='
					}
					telegram={'https://t.me/Abdulaziz_3151'}
					facebook={
						'https://www.facebook.com/profile.php?id=61550093140058&mibextid=LQQJ4d'
					}
					gmail={
						'https://mail.google.com/mail/u/0/#search/uzclasses_uz%40mail.ru?compose=new'
					}
				/>
			</div>
		</>
	)
}

export default Home
