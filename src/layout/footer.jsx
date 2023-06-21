import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = ({logo, phone, email}) => {
  return (
    <footer>
      <div className="footer_info container">
      <div className="footer_top">
        <a href="/"><img src={logo} alt="logo" /></a>
        <div className="footer_menu">
        <NavLink to="/">Главная</NavLink>
                 <NavLink to="/about">О компании</NavLink>
                 <NavLink to="/contact">Контакты</NavLink>
        </div>
        <a href={`tel:${phone}`} className="telephone">{phone}</a>
      </div>
      <div className="footer_bottom">
        <span>Design by decor class</span>

        <div className="contact">
          <a className='instagram' href="">{email}</a>
          <a className='facebook' href="">{email}</a>
          <a className='telegram' href="">{email}</a>
        </div>
        <a href="" className="gmail">{email}</a>
      </div>
      </div>
    </footer>
  )
}

export default Footer