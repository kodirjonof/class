import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../public/images/logo.jpg"

const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to="/" className='header_left'><img src={logo} alt="" /></Link>
            <div className="header_center">
                 <NavLink to="/">Главная</NavLink>
                 <NavLink to="/brand">Бренды</NavLink>
                 <NavLink to="/about">О компании</NavLink>
                 <NavLink to="/diller">Наши дилеры</NavLink>
                 <NavLink to="/contact">Контакты</NavLink>
            </div>
            <div className="header_right">
              <span className='language'>Ру</span>
            </div>
            
        </div>
    </header>
  )
}

export default Header