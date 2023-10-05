import React from 'react'

import "./decorclass.scss"
import Brands from '../../component/brands'

import product1 from "../../public/images/product1.png"
import product2 from "../../public/images/product2.png"
import product3 from "../../public/images/product3.png"
import product4 from "../../public/images/product4.png"
import product5 from "../../public/images/product5.png"
import product6 from "../../public/images/product6.png"
import product7 from "../../public/images/product7.png"
import product8 from "../../public/images/product8.png"
import product9 from "../../public/images/product9.png"
import product10 from "../../public/images/product10.png"
import product11 from "../../public/images/product11.png"
import product12 from "../../public/images/product12.png"
import product13 from "../../public/images/product13.png"
import product14 from "../../public/images/product14.png"
import product15 from "../../public/images/product15.png"
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
   "name": "АСР1001",
  },
  {
   "img": product2,
   "name": "АСР1002",
  },
  {
   "img": product3,
   "name": "АСР1003",
  },
  {
   "img": product4,
   "name": "АСР1004",
  },
  {
   "img": product5,
   "name": "АСР1005",
  },
  {
   "img": product6,
   "name": "АСР1006",
  },
  {
   "img": product7,
   "name": "АСР1007",
  },
  {
   "img": product8,
   "name": "АСР1008",
  },
  {
   "img": product9,
   "name": "АСР1009",
  },
  {
   "img": product10,
   "name": "АСР1010",
  },
  {
   "img": product11,
   "name": "АСР1011",
  },
  {
   "img": product12,
   "name": "АСР1012",
  },
  {
   "img": product13,
   "name": "АСР1013",
  },
  {
   "img": product14,
   "name": "АСР1014",
  },
  {
   "img": product15,
   "name": "АСР1015",
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
         <p>Приветствуем на сайте "Decorclass" — вашем надежном источнике стильных и функциональных декоративных панелей из ПВХ! Наши уникальные дизайны и высокое качество материалов делают наши панели идеальным решением для трансформации интерьера.
Сочетая в себе элегантность и практичность, наши ПВХ декоративные панели добавляют изысканности любому помещению. Независимо от вашего стиля — от современного минимализма до классической элегантности — у нас есть панели, чтобы удовлетворить ваш вкус.
Преимущества наших панелей включают простоту установки, долговечность и легкость ухода. Они не только улучшают визуальное восприятие вашего пространства, но и могут скрыть недостатки стен, создавая гармоничное окружение.
Позвольте "Decorclass" сделать ваш дом или бизнес местом вдохновения и стиля. Ознакомьтесь с нашим ассортиментом и начните ваш путь к обновлению интерьера уже сегодня!</p>
        </div>
        <Product products={aluclassProduct} />
        <Brands/>
        <Contact phone={"+99898-311-88-83"}/>
    <Footer logo={logo2} phone={"+99898-311-88-83"} email={"DECORCLASS"}/>
    </>
  )
}

export default Decorclass