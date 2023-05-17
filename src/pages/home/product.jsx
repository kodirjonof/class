import React from 'react'
import product1 from "../../public/images/product1.png"
import product2 from "../../public/images/product2.png"
import product3 from "../../public/images/product3.png"
import product4 from "../../public/images/product4.png"
import product5 from "../../public/images/product5.png"
import product6 from "../../public/images/product6.png"
import product7 from "../../public/images/product7.png"
import product8 from "../../public/images/product8.png"

const Product = () => {
  return (
    <div className='product_block container'>
        <h1 className='main_title' >Наши <b>товары</b></h1>
        <div className="product_small_block">
            <div className="product_info_block">
                <img src={product1} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
            <div className="product_info_block">
                <img src={product2} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
            <div className="product_info_block">
                <img src={product3} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
        </div>
        <div className="product_big_block">
            <div className="product_info_block">
                <img src={product4} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
            <div className="product_info_block">
                <img src={product5} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
        </div>
        <div className="product_small_block">
            <div className="product_info_block">
                <img src={product6} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
            <div className="product_info_block">
                <img src={product7} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
            <div className="product_info_block">
                <img src={product8} alt="" />
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>Shade vol. II</span>
                    <p className='wow lightSpeedIn center'>Модель 77 /64</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Product