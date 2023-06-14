import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Contact from '../../component/contact'

import logo from "../../public/svg/AGROCLASS.svg"
import logo2 from "../../public/svg/AGROCLASS2.svg"
import Brands from '../../component/brands'
import AboutAgroclass from './aboutAgroclass'
import AgroclassProduct from './agroclassProduct'

import "./agroclass.scss"


const Agroclass = () => {
  return (
    <>
    <Header logo={logo}/>
    <div className='classes'>
        <div className="classes_header agroclass_header">
            <span>
            AGRO<b>CLASS</b>
            </span>
            <p>Agroclass Industry - представляет свои высококачественные ленты для капельного орошения.</p>
        </div>
        </div>
        <AboutAgroclass/>
        <AgroclassProduct/>
        <Brands/>
    <Contact phone={"+99897-771-31-51"}/>
        <Footer logo={logo2} phone={"+99897-771-31-51"} email={"AGROCLASS"}/>
    </>
  )
}

export default Agroclass