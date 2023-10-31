import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Contact from '../../component/contact'

import logo from '../../public/svg/AGROCLASS.svg'
import logo2 from '../../public/svg/AGROCLASS2.svg'
import Brands from '../../component/brands'
import AboutAgroclass from './aboutAgroclass'
import AgroclassProduct from './agroclassProduct'

import './agroclass.scss'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const Agroclass = () => {
	const [t] = useTranslation('global')

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<title>ALUCLASS | Agroclass</title>
				<link rel='canonical' href='/agroclass' />
			</Helmet>
			<Header logo={logo} />
			<div className='classes'>
				<div className='classes_header agroclass_header'>
					<span>
						AGRO<b>CLASS</b>
					</span>
					<p>Agroclass Industry - {t('agro.headline')}</p>
				</div>
			</div>
			<p className='classes_text'>{t('agro.info')}</p>
			<AboutAgroclass />
			<AgroclassProduct />
			<Brands />
			<Contact
				phone={'+99897-771-31-51'}
				name='Abdulaziz'
				company='Agroclass'
			/>
			<Footer
				logo={logo2}
				phone={'+99897-771-31-51'}
				email={'AGROCLASS'}
				facebook={
					'https://www.facebook.com/profile.php?id=61550093140058&mibextid=LQQJ4d'
				}
				instagram={
					'https://instagram.com/aluclass_uzbekistan?igshid=NzZhOTFlYzFmZQ=='
				}
				telegram={'https://t.me/abdulaziz_3151'}
			/>
		</>
	)
}

export default Agroclass
