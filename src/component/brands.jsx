import React from 'react'
import { Link } from 'react-router-dom'



const Brands = () => {
  return (
    <div className='brands container'>
         <h1 className='main_title'>Наши <b>бренды</b></h1>
         <div className="brands_main">
            <Link className="brands_block wow bounceInLeft" to={"/"}>
                <span>ALUCLASS</span>
                <p>ALUCLASS - компания по производства Алюминиевая композитная панель, компания по производства Алюминиевая композитная панель,</p>
            </Link>
            <Link className="brands_block wow bounceInCenter" to={"/"}>
                <span>AGROCLASS</span>
                <p>Agroclass Industry - представляет свои высококачественные ленты для капельного орошения.</p>
            </Link>
            <Link className="brands_block wow bounceInRight" to={"/"}>
                <span>DECORCLASS</span>
                <p>DECORCLASS - компания по производства Алюминиевая композитная панель, компания по производства Алюминиевая композитная панель,</p>
            </Link>

         </div>
    </div>
  )
}

export default Brands