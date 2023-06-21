import React from 'react'
import Slider from './slider'

import './home.scss';
import Advantages from '../../component/advantages';
import Product from '../../component/product';
import Brands from '../../component/brands';
import Contact from '../../component/contact';

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
import logo from "../../public/svg/ALUCLASS.svg"
import logo2 from "../../public/svg/ALUCLASS2.svg"

import Header from '../../layout/header';
import Footer from '../../layout/footer';
import { Helmet } from 'react-helmet';




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

const Home = () => {
  return (
    <>
    <Helmet>
    <title>ALUCLASS | АЛЮКОБОНД ОТ МИРОВОГО БРЕНДА</title>
    </Helmet>
    <Header logo={logo}/>
    <div className='home'>
        <Slider/>
        <Brands/>
        <Advantages/>
        <Product products={aluclassProduct}/>
        <Contact phone={"+99897-771-31-51"}/>
        <Footer logo={logo2} phone={"+99897-771-31-51"} email={"ALUCLASS"}/>
    </div>
    </>
  )
}

export default Home