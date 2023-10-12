import React from 'react'
import { useTranslation } from 'react-i18next'



const Product = ({products, className}) => {
    const [t] = useTranslation("global")
  return (
    <div className='product_block container'>
        <h1 className='main_title' >{t("products.ours")} <b>{t("products.goods")}</b></h1>
        <div className="product_small_block">
            {products.map((item, index) => (
                <div className="product_info_block" key={index}>
                    <div className="product_img_block">
                <img src={item.img} alt="" className={className}/>
                </div>
                <div className="product_name">
                    <span className='wow lightSpeedIn center'>{item.name}</span>
                </div>

            </div>
            ))}
           
        </div>
    </div>
  )
}

export default Product