import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <Link to="/" className='header_left'><img src="" alt="" /></Link>
            <div className="header_right">
                 <Link to="/">Главная</Link>
                 <Link to="/">Бренды</Link>
                 <Link to="/">О компании</Link>
                 <Link to="/">Наши дилеры</Link>
                 <Link to="/">Контакты</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Header