import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'



const Brands = () => {
  const [t] = useTranslation("global")

  return (
    <div className='brands container'>
         <h1 className='main_title'>{t("brands.our")} <b>{t("brands.brend")}</b></h1>
         <div className="brands_main">
            <NavLink className="brands_block wow bounceInLeft" to={"/"}>
                <span>ALUCLASS</span>
                <p>ALUCLASS - {t("brands.info")}</p>
            </NavLink>
            <NavLink className="brands_block wow bounceInCenter" to={"/agroclass"}>
                <span>AGROCLASS</span>
                <p>Agroclass Industry - {t("brands.industry")}</p>
            </NavLink>
            <NavLink className="brands_block wow bounceInRight" to={"/decorclass"}>
                <span>DECORCLASS</span>
                <p>DECORCLASS - {t("brands.decorclass")}</p>
            </NavLink>

         </div>
    </div>
  )
}

export default Brands