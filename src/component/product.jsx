import React from 'react'



const Product = ({products}) => {
  return (
    <div className='product_block container'>
        <h1 className='main_title' >Наши <b>товары</b></h1>
        <div className="product_small_block">
            {products.map((item, index) => (
                <div className="product_info_block" key={index}>
                    <div className="product_img_block">
                <img src={item.img} alt="" />
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