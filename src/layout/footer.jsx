import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'


const Footer = ({logo, phone, email, instagram, facebook, telegram, gmail}) => {
  const [t] = useTranslation("global")
  return (
    <footer>
      <div className="footer_info container">
      <div className="footer_top">
        <a href="/"><img src={logo} alt="logo" /></a>
        <div className="footer_menu">
        <NavLink to="/">{t("header.home")}</NavLink>
                 <NavLink to="/about">{t("header.company")}</NavLink>
                 <NavLink to="/contact">{t("header.contact")}</NavLink>
        </div>
        <a href={`tel:${phone}`} className="telephone">{phone}</a>
      </div>
      <div className="footer_bottom">
        <span>Design by decor class</span>

        <div className="contact">
          <a className='instagram' href={`${instagram}`}>{email}</a>
          <a className='facebook' href={`${facebook}`}>{email}</a>
          <a className='telegram' href={`${telegram}`}>{email}</a>
        </div>
        <a href={`${gmail}`} className="gmail">{email}</a>
      </div>
      </div>
    </footer>
  )
}

export default Footer