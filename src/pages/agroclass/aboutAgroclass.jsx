import React from 'react'

import agroclassbanner from "../../public/images/agroclassbanner.png"
import { useTranslation } from 'react-i18next'

const AboutAgroclass = () => {
    const [t] = useTranslation("global")

   return (
    <div className='advantages container'>
    <div className="advantages_left">
     <h1 className='main_title'>{t("agro.our")} <b>{t("agro.product")}</b></h1>
     <div className="advantages_left_info">
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>01</h2>
            <span>{t("agro.text")}</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>02</h2>
            <span>{t("agro.text2")}</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>03</h2>
            <span>{t("agro.text3")}</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>04</h2>
            <span>{t("agro.text4")}</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>05</h2>
            <span>{t("agro.text5")}</span>
        </div>
        <div className="advantages_left_block wow lightSpeedIn">
            <h2>06</h2>
            <span>{t("agro.text6")}</span>
        </div>
     </div>

    </div>
    <div className="advantages_right">
     <img src={agroclassbanner} alt="" />
    </div>
    
</div>
  )
}

export default AboutAgroclass