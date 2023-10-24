import React from 'react'
import Contact from '../../component/contact'
import './contact.scss'
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import logo from '../../public/svg/ALUCLASS.svg'
import logo2 from '../../public/svg/ALUCLASS2.svg'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const ContactPage = () => {
	const [t] = useTranslation('global')
	return (
		<>
			<Helmet>
				<title>ALUCLASS | {t('header.contact')}</title>
			</Helmet>
			<Header logo={logo} />
			<Contact
				phone={'+998 95 044 99 90'}
				name='Alisher'
				company='Aluclass'
				phone2={'+99897-771-31-51'}
				name2='Abdulaziz'
				company2='Agroclass'
				phone3={'+99898-311-88-83'}
				name3='Abdumajid'
				company3='Decorclass'
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

export default ContactPage
