import React from 'react'
import Contact from '../../component/contact'
import "./contact.scss"
import Header from '../../layout/header'
import Footer from '../../layout/footer'

import logo from "../../public/svg/ALUCLASS.svg"
import logo2 from "../../public/svg/ALUCLASS2.svg"
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const ContactPage = () => {
  const [t] = useTranslation("global")
  return (
    <>
    <Helmet>
    <title>ALUCLASS | {t("header.contact")}</title>
    </Helmet>
    <Header logo={logo}/>
    <Contact/>
    <Footer logo={logo2} phone={"+99897-771-31-51"} email={"ALUCLASS"}/>
    </>
  )
}

export default ContactPage