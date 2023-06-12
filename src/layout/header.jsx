import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header>
        <div className="container">
            <Link to="/" className='header_left'><svg width="159" height="22" viewBox="0 0 159 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.94602 21H0.65625L7.52699 0.636363H14.0795L20.9503 21H15.6605L10.8778 5.76704H10.7188L5.94602 21ZM5.24006 12.9858H16.2969V16.7244H5.24006V12.9858ZM23.9828 21V0.636363H28.9046V17.0028H37.3762V21H23.9828ZM53.0838 0.636363H57.9957V13.7713C57.9957 15.2893 57.6344 16.6117 56.9119 17.7386C56.1894 18.8589 55.1818 19.7273 53.8892 20.3438C52.5965 20.9536 51.0951 21.2585 49.3849 21.2585C47.6548 21.2585 46.1434 20.9536 44.8508 20.3438C43.5582 19.7273 42.5539 18.8589 41.838 17.7386C41.1221 16.6117 40.7642 15.2893 40.7642 13.7713V0.636363H45.686V13.3438C45.686 14.0464 45.8385 14.6728 46.1434 15.223C46.455 15.7732 46.8892 16.2041 47.446 16.5156C48.0028 16.8272 48.6491 16.983 49.3849 16.983C50.1207 16.983 50.7637 16.8272 51.3139 16.5156C51.8707 16.2041 52.3049 15.7732 52.6164 15.223C52.928 14.6728 53.0838 14.0464 53.0838 13.3438V0.636363Z" fill="#DD0908"/>
<path d="M80.4049 8.0142H75.4334C75.3671 7.50379 75.2312 7.04309 75.0257 6.6321C74.8202 6.22112 74.5484 5.86979 74.2103 5.57812C73.8723 5.28646 73.4712 5.06439 73.0072 4.91193C72.5498 4.75284 72.0427 4.67329 71.4859 4.67329C70.4982 4.67329 69.6464 4.91525 68.9305 5.39915C68.2212 5.88305 67.6744 6.58239 67.2899 7.49716C66.912 8.41193 66.7231 9.51894 66.7231 10.8182C66.7231 12.1705 66.9154 13.304 67.2998 14.2188C67.6909 15.1269 68.2378 15.813 68.9405 16.277C69.6497 16.7344 70.4883 16.9631 71.4561 16.9631C71.9996 16.9631 72.4935 16.8935 72.9376 16.7543C73.3884 16.6151 73.7828 16.4129 74.1209 16.1477C74.4656 15.8759 74.7473 15.5478 74.966 15.1634C75.1914 14.7723 75.3472 14.3314 75.4334 13.8409L80.4049 13.8707C80.3188 14.7723 80.0569 15.6605 79.6194 16.5355C79.1886 17.4105 78.5953 18.2093 77.8396 18.9318C77.0839 19.6477 76.1625 20.2178 75.0754 20.642C73.9949 21.0663 72.7553 21.2784 71.3566 21.2784C69.5138 21.2784 67.8633 20.8741 66.4049 20.0653C64.9532 19.25 63.8065 18.0634 62.9646 16.5057C62.1227 14.9479 61.7018 13.0521 61.7018 10.8182C61.7018 8.57765 62.1294 6.6785 62.9845 5.12074C63.8396 3.56297 64.9963 2.37973 66.4547 1.57102C67.913 0.76231 69.547 0.357954 71.3566 0.357954C72.5896 0.357954 73.7298 0.530303 74.7771 0.875C75.8245 1.21307 76.7459 1.71023 77.5413 2.36648C78.3368 3.0161 78.9831 3.81487 79.4802 4.76278C79.9774 5.7107 80.2856 6.79451 80.4049 8.0142ZM84.0614 21V0.636363H88.9832V17.0028H97.4548V21H84.0614ZM105.521 21H100.231L107.102 0.636363H113.655L120.525 21H115.236L110.453 5.76704H110.294L105.521 21ZM104.815 12.9858H115.872V16.7244H104.815V12.9858ZM133.936 6.74148C133.87 6.01231 133.575 5.44555 133.051 5.04119C132.534 4.63021 131.795 4.42472 130.834 4.42472C130.197 4.42472 129.667 4.50758 129.243 4.67329C128.819 4.83901 128.5 5.06771 128.288 5.35938C128.076 5.64441 127.967 5.97254 127.96 6.34375C127.947 6.64867 128.007 6.91714 128.139 7.14915C128.278 7.38115 128.477 7.58665 128.736 7.76562C129.001 7.93797 129.319 8.09044 129.69 8.22301C130.061 8.35559 130.479 8.47159 130.943 8.57102L132.693 8.96875C133.701 9.1875 134.589 9.47917 135.358 9.84375C136.133 10.2083 136.783 10.6425 137.307 11.1463C137.837 11.6501 138.238 12.2301 138.51 12.8864C138.782 13.5426 138.921 14.2784 138.927 15.0938C138.921 16.3797 138.596 17.4834 137.953 18.4048C137.31 19.3262 136.385 20.0322 135.179 20.5227C133.979 21.0133 132.531 21.2585 130.834 21.2585C129.13 21.2585 127.645 21.0033 126.379 20.4929C125.113 19.9825 124.129 19.2069 123.426 18.1662C122.723 17.1255 122.362 15.8097 122.342 14.2188H127.055C127.095 14.875 127.271 15.4219 127.582 15.8594C127.894 16.2969 128.321 16.6283 128.865 16.8537C129.415 17.0791 130.051 17.1918 130.774 17.1918C131.437 17.1918 132 17.1023 132.464 16.9233C132.935 16.7443 133.296 16.4957 133.548 16.1776C133.8 15.8594 133.929 15.4948 133.936 15.0838C133.929 14.6993 133.81 14.3712 133.578 14.0994C133.346 13.821 132.988 13.5824 132.504 13.3835C132.027 13.178 131.417 12.9891 130.675 12.8168L128.547 12.3196C126.783 11.9152 125.395 11.2623 124.381 10.3608C123.366 9.45265 122.863 8.22633 122.869 6.68182C122.863 5.42235 123.201 4.31865 123.883 3.37074C124.566 2.42282 125.511 1.68371 126.717 1.15341C127.924 0.623106 129.299 0.357954 130.844 0.357954C132.421 0.357954 133.79 0.62642 134.95 1.16335C136.117 1.69365 137.022 2.43939 137.665 3.40057C138.308 4.36174 138.636 5.47538 138.649 6.74148H133.936ZM153.26 6.74148C153.194 6.01231 152.899 5.44555 152.375 5.04119C151.858 4.63021 151.119 4.42472 150.158 4.42472C149.522 4.42472 148.991 4.50758 148.567 4.67329C148.143 4.83901 147.825 5.06771 147.613 5.35938C147.4 5.64441 147.291 5.97254 147.284 6.34375C147.271 6.64867 147.331 6.91714 147.463 7.14915C147.603 7.38115 147.802 7.58665 148.06 7.76562C148.325 7.93797 148.643 8.09044 149.015 8.22301C149.386 8.35559 149.803 8.47159 150.267 8.57102L152.017 8.96875C153.025 9.1875 153.913 9.47917 154.682 9.84375C155.458 10.2083 156.107 10.6425 156.631 11.1463C157.161 11.6501 157.562 12.2301 157.834 12.8864C158.106 13.5426 158.245 14.2784 158.252 15.0938C158.245 16.3797 157.92 17.4834 157.277 18.4048C156.634 19.3262 155.71 20.0322 154.503 20.5227C153.303 21.0133 151.855 21.2585 150.158 21.2585C148.454 21.2585 146.97 21.0033 145.704 20.4929C144.437 19.9825 143.453 19.2069 142.75 18.1662C142.048 17.1255 141.686 15.8097 141.667 14.2188H146.38C146.419 14.875 146.595 15.4219 146.907 15.8594C147.218 16.2969 147.646 16.6283 148.189 16.8537C148.739 17.0791 149.376 17.1918 150.098 17.1918C150.761 17.1918 151.325 17.1023 151.789 16.9233C152.259 16.7443 152.621 16.4957 152.873 16.1776C153.124 15.8594 153.254 15.4948 153.26 15.0838C153.254 14.6993 153.134 14.3712 152.902 14.0994C152.67 13.821 152.312 13.5824 151.829 13.3835C151.351 13.178 150.741 12.9891 149.999 12.8168L147.871 12.3196C146.108 11.9152 144.719 11.2623 143.705 10.3608C142.691 9.45265 142.187 8.22633 142.194 6.68182C142.187 5.42235 142.525 4.31865 143.208 3.37074C143.891 2.42282 144.835 1.68371 146.042 1.15341C147.248 0.623106 148.623 0.357954 150.168 0.357954C151.746 0.357954 153.114 0.62642 154.275 1.16335C155.441 1.69365 156.346 2.43939 156.989 3.40057C157.632 4.36174 157.96 5.47538 157.973 6.74148H153.26Z" fill="#060107"/>
</svg>
</Link>
            <div className="header_center">
                 <NavLink to="/">Главная</NavLink>
                 <NavLink to="/brand">Бренды</NavLink>
                 <NavLink to="/about">О компании</NavLink>
                 <NavLink to="/contact">Контакты</NavLink>
            </div>
            <div className="header_right">
              {/* <span className='language'>Ру</span> */}
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
                 <NavLink  onClick={() => setActive(false)} to="/brand">Бренды</NavLink>
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