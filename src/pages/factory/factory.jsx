import React from 'react';
import Header from '../../layout/header';
import Contact from '../../component/contact';
import Footer from '../../layout/footer';
import "./factory.scss"

import logo from "../../public/svg/ALUCLASS.svg"
import logo2 from "../../public/svg/ALUCLASS2.svg"
import photo from "../../public/factory/our.jpg"
import photo2 from "../../public/factory/our2.jpg"
import photo3 from "../../public/factory/our3.jpg"
import photo4 from "../../public/factory/our4.jpg"
import photo5 from "../../public/factory/our5.jpg"
import photo6 from "../../public/factory/our6.jpg"
import photo7 from "../../public/factory/our7.jpg"
import photo8 from "../../public/factory/our8.jpg"
import photo9 from "../../public/factory/our9.jpg"
import photo10 from "../../public/factory/our10.jpg"
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


export default function Factory() {
  const [t] = useTranslation("global")

  return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>ALUCLASS | Factory</title>
				<link rel='canonical' href='/factory' />
			</Helmet>
			<Header logo={logo} />
			<div className='container factory'>
				<h2>{t('factory.title')}</h2>
				<div className='factory_wrapper'>
					<div className='factory_wrap'>
						<img src={photo} alt={photo} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo2} alt={photo2} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo3} alt={photo3} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo4} alt={photo4} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo5} alt={photo5} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo6} alt={photo6} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo7} alt={photo7} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo8} alt={photo8} className='factory_img' />
					</div>
					<div className='factory_wrap'>
						<img src={photo9} alt={photo9} className='factory_img' />
					</div>
				</div>
				<div className='factory_wrap factory_wrap1'>
					<img src={photo10} alt={photo10} className='factory_img' />
				</div>
			</div>
			<Contact phone={'+99897-771-31-51'} />
			<Footer
				logo={logo2}
				phone={'+99897-771-31-51'}
				email={'ALUCLASS'}
				instagram={
					'https://instagram.com/aluclass_uzbekistan?igshid=NzZhOTFlYzFmZQ=='
				}
				telegram={'https://t.me/tursunov0999'}
				facebook={
					'https://www.facebook.com/profile.php?id=61550093140058&mibextid=LQQJ4d'
				}
				gmail={
					'https://mail.google.com/mail/u/0/#search/uzclasses_uz%40mail.ru?compose=new'
				}
			/>
		</>
	)
}
