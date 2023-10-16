import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ logo }) => {
  const [active, setActive] = useState(false);
  const [clickedNavLink, setClickedNavLink] = useState("");
  const [t, i18n] = useTranslation("global");
  const lang = i18n.language;
  
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  const languages = [
    {
      code: "ru",
      name: "Ру",
    },
    {
      code: "uz",
      name: "O’z",
    },
    {
      code: "en",
      name: "En",
    },
  ];

  function up() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      <div className="container">
        <Link to="/" className="header_left">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header_center">
          <NavLink to="/">{t("header.home")}</NavLink>
          <span className="brand_menu">
            {t("header.brands")}
            <div className="brands_open">
              <NavLink
                onClick={() => setClickedNavLink("/decorclass")}
                to="/decorclass"
                style={{ display: clickedNavLink === "/decorclass" ? "none" : "block" }}
                key={0}
              >
                DECORCLASS
              </NavLink>
              <NavLink
                onClick={() => setClickedNavLink("/agroclass")}
                to="/agroclass"
                style={{ display: clickedNavLink === "/agroclass" ? "none" : "block" }}
                key={1}
              >
                AGROCLASS
              </NavLink>
              <NavLink
                onClick={() => setClickedNavLink("/")}
                to="/"
                style={{ display: clickedNavLink === "/" ? "none" : "block" }}
                key={2}
              >
                ALUCASS
              </NavLink>
            </div>
          </span>
          <NavLink onClick={up} to="/about">
            {t("header.company")}
          </NavLink>
          <NavLink onClick={up} to="/contact">
            {t("header.contact")}
          </NavLink>
          <NavLink onClick={up} to="/factory">
            {t("factory.title")}
          </NavLink>
        </div>
        <div className="mobile_wrapper">
        <div className="language">
            {languages.map((item, index) => {
              if (item.code === lang) {
                return (
                  <div className={`language_block ${item.code}`} key={index} onClick={() => handleLanguageChange(item.code)}>
                    <div>{item.name}</div>
                  </div>
                );
              }
            })}
            <div className="language_select">
              {languages.map((item, index) => (
                <Link
                  key={index}
                  className={
                    lang === item.code
                      ? `language_select_block none ${item.code}`
                      : `language_select_block ${item.code}`
                  }
                  onClick={() => handleLanguageChange(item.code)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div onClick={() => setActive(!active)} className={active ? "burger_button burger_active" : "burger_button"}>
            <span className="burger1"></span>
            <span className="burger2"></span>
            <span className="burger3"></span>
          </div>
        </div>
        <div className={active ? "mobil_menu mobil_menu_active" : "mobil_menu"}>
          <div className="mobil_menu_header">
          <Link to="/" className="header_left">
          <img src={logo} alt="logo" />
        </Link>
          </div>
          <div className="mobil_menu_link">
            <NavLink onClick={() => setActive(false)} to="/">
              {t("header.home")}
            </NavLink>
            <span className="brand_menu">
              {t("header.brands")}
              <div className="brands_open">
                <NavLink onClick={() => setActive(false)} to="/decorclass">
                  DECORCLASS
                </NavLink>
                <NavLink onClick={() => setActive(false)} to="/">
                  ALUCASS
                </NavLink>
                <NavLink
                  aria-current="page"
                  onClick={() => setActive(false)}
                  to="/agroclass"
                >
                  AGROCLASS
                </NavLink>
              </div>
            </span>
            <NavLink onClick={() => setActive(false)} to="/about">
              {t("header.company")}
            </NavLink>
            <NavLink onClick={() => setActive(false)} to="/contact">
              {t("header.contact")}
            </NavLink>
            <NavLink onClick={up} to="/factory">
              {t("factory.title")}
            </NavLink>
          </div>
        </div>
        <div
          className={active ? "mobil_menu_bg mobil_menu_bg_active" : "mobil_menu_bg"}
          onClick={() => setActive(false)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
