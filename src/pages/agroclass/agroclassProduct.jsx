import React from 'react'

import agrop1 from "../../public/images/agrop1.png"
import agrop2 from "../../public/images/agrop2.png"
import agrop3 from "../../public/images/agrop3.png"
import agrop4 from "../../public/images/agrop4.png"
import agrop5 from "../../public/images/agrop5.png"
import { useTranslation } from 'react-i18next'


const agroProduct = [
    {
        "img": agrop1
    },
    {
        "img": agrop2
    },
    {
        "img": agrop3
    },
    {
        "img": agrop4
    },
    {
        "img": agrop5
    },
]

const AgroclassProduct = () => {
  const [t] = useTranslation("global")

  return (
    <div className='agro_product container'>
        <h1 class="main_title">{t("agro.photo")} <b>{t("agro.gallery")}</b></h1>
        <div className="agro_product_main">
          {agroProduct.slice(0, 3).map((item, index) => (
            <img src={item.img} alt="agro_product" key={index} />
          ))}
        </div>
        <div className="agro_product_main2">
          {agroProduct.slice(3, 5).map((item, index) => (
            <img src={item.img} alt="agro_product" key={index} />
          ))}
        </div>
    </div>
  )
}

export default AgroclassProduct