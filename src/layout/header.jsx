import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({logo}) => {
  const [active, setActive] = useState(false)
  return (
    <header>
        <div className="container">
            <Link to="/" className='header_left'><img src={logo} alt="logo" />
</Link>
            <div className="header_center">
                 <NavLink to="/">Главная</NavLink>
                 <span className='brand_menu'>
                 Бренды
                 <div className="brands_open">
                  <NavLink to="/decorclass">decorclass</NavLink>
                  <NavLink to="/agroclass">agroclass</NavLink>
                 </div>
                 </span>
                 <NavLink to="/about">О компании</NavLink>
                 <NavLink to="/contact">Контакты</NavLink>
            </div>
            <div className="header_right">
              <span className='language'>Ру</span>
            </div>
            <div onClick={() => setActive(!active)} className={active ? "burger_button burger_active" : "burger_button"}>
              <span className='burger1'></span>
              <span className='burger2'></span>
              <span className='burger3'></span>
            </div>
            <div className={active ? "mobil_menu mobil_menu_active" : "mobil_menu"}>
              <div className="mobil_menu_header">
              <svg width="88" height="13" viewBox="0 0 88 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.39773 12H0.375L4.30114 0.363636H8.04545L11.9716 12H8.94886L6.21591 3.29545H6.125L3.39773 12ZM2.99432 7.42045H9.3125V9.55682H2.99432V7.42045ZM13.2244 12V0.363636H16.0369V9.71591H20.8778V12H13.2244ZM29.3736 0.363636H32.1804V7.86932C32.1804 8.73674 31.974 9.49242 31.5611 10.1364C31.1482 10.7765 30.5724 11.2727 29.8338 11.625C29.0952 11.9735 28.2372 12.1477 27.2599 12.1477C26.2713 12.1477 25.4077 11.9735 24.669 11.625C23.9304 11.2727 23.3565 10.7765 22.9474 10.1364C22.5384 9.49242 22.3338 8.73674 22.3338 7.86932V0.363636H25.1463V7.625C25.1463 8.02652 25.2334 8.38447 25.4077 8.69886C25.5857 9.01326 25.8338 9.25947 26.152 9.4375C26.4702 9.61553 26.8395 9.70455 27.2599 9.70455C27.6804 9.70455 28.0478 9.61553 28.3622 9.4375C28.6804 9.25947 28.9285 9.01326 29.1065 8.69886C29.2846 8.38447 29.3736 8.02652 29.3736 7.625V0.363636Z" fill="#DD0908"/>
<path d="M44.5057 4.57955H41.6648C41.6269 4.28788 41.5492 4.02462 41.4318 3.78977C41.3144 3.55492 41.1591 3.35417 40.9659 3.1875C40.7727 3.02083 40.5436 2.89394 40.2784 2.80682C40.017 2.71591 39.7273 2.67045 39.4091 2.67045C38.8447 2.67045 38.358 2.80871 37.9489 3.08523C37.5436 3.36174 37.2311 3.76136 37.0114 4.28409C36.7955 4.80682 36.6875 5.43939 36.6875 6.18182C36.6875 6.95455 36.7973 7.60227 37.017 8.125C37.2405 8.64394 37.553 9.03598 37.9545 9.30114C38.3598 9.5625 38.839 9.69318 39.392 9.69318C39.7027 9.69318 39.9848 9.65341 40.2386 9.57386C40.4962 9.49432 40.7216 9.37879 40.9148 9.22727C41.1117 9.07197 41.2727 8.88447 41.3977 8.66477C41.5265 8.44129 41.6155 8.18939 41.6648 7.90909L44.5057 7.92614C44.4564 8.44129 44.3068 8.94886 44.0568 9.44886C43.8106 9.94886 43.4716 10.4053 43.0398 10.8182C42.608 11.2273 42.0814 11.553 41.4602 11.7955C40.8428 12.0379 40.1345 12.1591 39.3352 12.1591C38.2822 12.1591 37.339 11.928 36.5057 11.4659C35.6761 11 35.0208 10.322 34.5398 9.43182C34.0587 8.54167 33.8182 7.45833 33.8182 6.18182C33.8182 4.90152 34.0625 3.81629 34.5511 2.92614C35.0398 2.03598 35.7008 1.35985 36.5341 0.897727C37.3674 0.435606 38.3011 0.204545 39.3352 0.204545C40.0398 0.204545 40.6913 0.30303 41.2898 0.5C41.8883 0.693181 42.4148 0.977272 42.8693 1.35227C43.3239 1.72348 43.6932 2.17992 43.9773 2.72159C44.2614 3.26326 44.4375 3.88258 44.5057 4.57955ZM46.1151 12V0.363636H48.9276V9.71591H53.7685V12H46.1151ZM57.8977 12H54.875L58.8011 0.363636H62.5455L66.4716 12H63.4489L60.7159 3.29545H60.625L57.8977 12ZM57.4943 7.42045H63.8125V9.55682H57.4943V7.42045ZM73.6548 3.85227C73.617 3.43561 73.4484 3.11174 73.1491 2.88068C72.8537 2.64583 72.4313 2.52841 71.8821 2.52841C71.5185 2.52841 71.2154 2.57576 70.973 2.67045C70.7306 2.76515 70.5488 2.89583 70.4276 3.0625C70.3063 3.22538 70.2438 3.41288 70.2401 3.625C70.2325 3.79924 70.2666 3.95265 70.3423 4.08523C70.4219 4.2178 70.5355 4.33523 70.6832 4.4375C70.8348 4.53598 71.0166 4.62311 71.2287 4.69886C71.4408 4.77462 71.6795 4.84091 71.9446 4.89773L72.9446 5.125C73.5204 5.25 74.0279 5.41667 74.4673 5.625C74.9105 5.83333 75.2817 6.08144 75.581 6.36932C75.884 6.6572 76.1132 6.98864 76.2685 7.36364C76.4238 7.73864 76.5033 8.15909 76.5071 8.625C76.5033 9.35985 76.3177 9.99053 75.9503 10.517C75.5829 11.0436 75.0545 11.447 74.3651 11.7273C73.6795 12.0076 72.8518 12.1477 71.8821 12.1477C70.9086 12.1477 70.0601 12.0019 69.3366 11.7102C68.6132 11.4186 68.0507 10.9754 67.6491 10.3807C67.2476 9.78598 67.0412 9.03409 67.0298 8.125H69.723C69.7457 8.5 69.8461 8.8125 70.0241 9.0625C70.2022 9.3125 70.4465 9.50189 70.7571 9.63068C71.0715 9.75947 71.4351 9.82386 71.848 9.82386C72.2268 9.82386 72.5488 9.77273 72.8139 9.67045C73.0829 9.56818 73.2893 9.42614 73.4332 9.24432C73.5772 9.0625 73.651 8.85417 73.6548 8.61932C73.651 8.39962 73.5829 8.21212 73.4503 8.05682C73.3177 7.89773 73.1132 7.76136 72.8366 7.64773C72.5639 7.5303 72.2154 7.42235 71.7912 7.32386L70.5753 7.03977C69.5677 6.80871 68.7741 6.43561 68.1946 5.92045C67.6151 5.40151 67.3272 4.70076 67.331 3.81818C67.3272 3.09848 67.5204 2.4678 67.9105 1.92614C68.3007 1.38447 68.8404 0.962121 69.5298 0.659091C70.2192 0.35606 71.0052 0.204545 71.8878 0.204545C72.7893 0.204545 73.5715 0.357954 74.2344 0.664772C74.901 0.967803 75.4181 1.39394 75.7855 1.94318C76.1529 2.49242 76.3404 3.12879 76.348 3.85227H73.6548ZM84.2173 3.85227C84.1795 3.43561 84.0109 3.11174 83.7116 2.88068C83.4162 2.64583 82.9938 2.52841 82.4446 2.52841C82.081 2.52841 81.7779 2.57576 81.5355 2.67045C81.2931 2.76515 81.1113 2.89583 80.9901 3.0625C80.8688 3.22538 80.8063 3.41288 80.8026 3.625C80.795 3.79924 80.8291 3.95265 80.9048 4.08523C80.9844 4.2178 81.098 4.33523 81.2457 4.4375C81.3973 4.53598 81.5791 4.62311 81.7912 4.69886C82.0033 4.77462 82.242 4.84091 82.5071 4.89773L83.5071 5.125C84.0829 5.25 84.5904 5.41667 85.0298 5.625C85.473 5.83333 85.8442 6.08144 86.1435 6.36932C86.4465 6.6572 86.6757 6.98864 86.831 7.36364C86.9863 7.73864 87.0658 8.15909 87.0696 8.625C87.0658 9.35985 86.8802 9.99053 86.5128 10.517C86.1454 11.0436 85.617 11.447 84.9276 11.7273C84.242 12.0076 83.4143 12.1477 82.4446 12.1477C81.4711 12.1477 80.6226 12.0019 79.8991 11.7102C79.1757 11.4186 78.6132 10.9754 78.2116 10.3807C77.8101 9.78598 77.6037 9.03409 77.5923 8.125H80.2855C80.3082 8.5 80.4086 8.8125 80.5866 9.0625C80.7647 9.3125 81.009 9.50189 81.3196 9.63068C81.634 9.75947 81.9976 9.82386 82.4105 9.82386C82.7893 9.82386 83.1113 9.77273 83.3764 9.67045C83.6454 9.56818 83.8518 9.42614 83.9957 9.24432C84.1397 9.0625 84.2135 8.85417 84.2173 8.61932C84.2135 8.39962 84.1454 8.21212 84.0128 8.05682C83.8802 7.89773 83.6757 7.76136 83.3991 7.64773C83.1264 7.5303 82.7779 7.42235 82.3537 7.32386L81.1378 7.03977C80.1302 6.80871 79.3366 6.43561 78.7571 5.92045C78.1776 5.40151 77.8897 4.70076 77.8935 3.81818C77.8897 3.09848 78.0829 2.4678 78.473 1.92614C78.8632 1.38447 79.4029 0.962121 80.0923 0.659091C80.7817 0.35606 81.5677 0.204545 82.4503 0.204545C83.3518 0.204545 84.134 0.357954 84.7969 0.664772C85.4635 0.967803 85.9806 1.39394 86.348 1.94318C86.7154 2.49242 86.9029 3.12879 86.9105 3.85227H84.2173Z" fill="#060107"/>
</svg>

              </div>
              <div className="mobil_menu_link">
              <NavLink  onClick={() => setActive(false)} to="/">Главная</NavLink>
              <span class="brand_menu">Бренды<div class="brands_open"><NavLink  to="/decorclass">decorclass</NavLink><NavLink aria-current="page" class="active" to="/agroclass">agroclass</NavLink></div></span>
                 <NavLink  onClick={() => setActive(false)} to="/about">О компании</NavLink>
                 <NavLink  onClick={() => setActive(false)} to="/contact">Контакты</NavLink>
              </div>

            </div>
            <div className={active ? "mobil_menu_bg mobil_menu_bg_active" : "mobil_menu_bg"} onClick={() => setActive(false)}>

            </div>
            
        </div>
    </header>
  )
}

export default Header