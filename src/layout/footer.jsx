import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../public/images/logo2.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer_info container">
      <div className="footer_top">
        <a href="/"><img src={logo} alt="" /></a>
        <div className="footer_menu">
        <NavLink to="/">Главная</NavLink>
                 <NavLink to="/brand">Бренды</NavLink>
                 <NavLink to="/about">О компании</NavLink>
                 <NavLink to="/diller">Наши дилеры</NavLink>
                 <NavLink to="/contact">Контакты</NavLink>
        </div>
        <a href="" className="telephone">+998 99 999 99 99</a>
      </div>
      <div className="footer_bottom">
        <span>Design by decor class</span>

        <div className="contact">
          <a className='instagram' href="">@decor_class</a>
          <a className='facebook' href="">@decor_class</a>
          <a className='telegram' href="">@decor_class</a>
        </div>
        <a href="" className="gmail">decorplast123@gmail.com</a>
      </div>
      </div>
    </footer>
  )
}

export default Footer