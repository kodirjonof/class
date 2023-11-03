import React from 'react'
import './about.scss'
import Advantages from '../../component/advantages'
import Contact from '../../component/contact'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import logo from '../../public/svg/ALUCLASS.svg'
import logo2 from '../../public/svg/ALUCLASS2.svg'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const About = () => {
	const [t] = useTranslation('global')
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>ALUCLASS | {t('header.company')}</title>
				<link rel='canonical' href='/https://uzclasses.uz/about' />
			</Helmet>
			<Header logo={logo} />
			<div className='about'>
				<div className='about_header'>
					<div className='container'>
						<span>
							{t('about.title')} <b>{t('about.text')}</b>
						</span>
						<p>{t('about.info')}</p>
					</div>
				</div>
				<Advantages />
				<div className='about_block container'>
					<span>{t('about.us')}</span>
					<p>{t('about.description')}</p>
				</div>
				<Contact phone={'+99895-044-99-90'} />
			</div>
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

export default About
