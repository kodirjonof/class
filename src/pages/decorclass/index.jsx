import React from 'react'

import "./decorclass.scss"
import Brands from '../../component/brands'

import product1 from "../../public/images/decor.png"
import product2 from "../../public/images/deco2.png"
import product3 from "../../public/images/decor3.png"
import product4 from "../../public/images/decor4.png"
import product5 from "../../public/images/decor5.png"
import product6 from "../../public/images/decor6.png"
import product7 from "../../public/images/decor3.png"
import product8 from "../../public/images/decor7.png"
import product9 from "../../public/images/decor8.png"
import product10 from "../../public/images/decor9.png"
import product11 from "../../public/images/decor10.png"
import product12 from "../../public/images/decor11.png"
import product13 from "../../public/images/decor12.png"
import product14 from "../../public/images/decor13.png"
import product15 from "../../public/images/decor14.png"
import logo from "../../public/svg/DECORCLASS.svg"
import logo2 from "../../public/svg/DECORCLASS2.svg"

import Product from '../../component/product'
import Contact from '../../component/contact'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const aluclassProduct = [
  {
   "img": product1,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product2,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product3,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product4,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product5,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product6,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product7,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product8,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product9,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product10,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product11,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product12,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product13,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product14,
   "name": "20CM FLAT PANEL",
  },
  {
   "img": product15,
   "name": "20CM FLAT PANEL",
  },
]

const Decorclass = () => {

const [t] = useTranslation("global")
  
  return (
    <>
    <Helmet>
    <title>ALUCLASS | Decorclass</title>
    </Helmet>
    <Header logo={logo}/>
    <div className='classes'>
        <div className="classes_header">
            <span>
            DECOR<b>CLASS</b>
            </span>
            <p>DECORCLASS - {t("decorclass.caption")}</p>
        </div>
         <p className='classes_text wow lightSpeedIn center'>{t("decorclass.info")}</p>
        </div>
        <Product class={"decor"} products={aluclassProduct}/>
        <Brands/>
        <p className='description wow lightSpeedIn center'>
          {t("decorclass.description")}
        </p>
        <Contact phone={"+99898-311-88-83"}/>
    <Footer logo={logo2} phone={"+99898-311-88-83"} email={"DECORCLASS"}/>
    </>
  )
}

export default Decorclass