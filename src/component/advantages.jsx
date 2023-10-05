import React from 'react'

import AdvantagesBanner from "../public/images/advantage.png"
import { useTranslation } from 'react-i18next'

const Advantages = () => {
    const [t] = useTranslation("global")
  return (
    <div className='advantages container'>
        <div className="advantages_left">
         <h1 className='main_title'>{t("advantages.caption")} <b>{t("advantages.with")}</b></h1>
         <div className="advantages_left_info">
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>01</h2>
                <span>{t("advantages.title")}</span>
                <p>{t("advantages.info")}</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>02</h2>
                <span>{t("advantages.quality")}</span>
                <p>{t("advantages.info_2")}</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>03</h2>
                <span>{t("advantages.exclusive")}</span>
                <p>{t("advantages.info_3")}</p>
            </div>
            <div className="advantages_left_block wow lightSpeedIn">
                <h2>04</h2>
                <span>{t("advantages.price")}</span>
                <p>{t("advantages.info_4")}</p>
            </div>
         </div>

        </div>
        <div className="advantages_right">
         <img src={AdvantagesBanner} alt="" />
        </div>
        
    </div>
  )
}

export default Advantages