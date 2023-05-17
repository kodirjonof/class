import React from 'react'
import { Link } from 'react-router-dom'

import bandImg from "../../public/images/brand.png"
import bandImg2 from "../../public/images/brand2.png"

const Brands = () => {
  return (
    <div className='brands container'>
         <h1 className='main_title'>Наши <b>бренды</b></h1>
         <div className="brands_main">
            <Link className="brands_block wow bounceInLeft" to={"/"}>
                <div className="brands_block_left">
                    <img src={bandImg} alt="" />
                </div>
                <div className="brands_block_right">
                <span>ALUCLASS</span>
                <p>ALUCLASS - компания по производства Алюминиевая композитная панель, компания по производства Алюминиевая композитная панель,</p>
                </div>
            </Link>
            <Link className="brands_block wow bounceInRight" to={"/"}>
                <div className="brands_block_left">
                    <img src={bandImg2} alt="" />
                </div>
                <div className="brands_block_right">
                <span>AGROCLASS</span>
                <p>Agroclass Industry - представляет свои высококачественные ленты для капельного орошения.</p>
                </div>
            </Link>

         </div>
    </div>
  )
}

export default Brands