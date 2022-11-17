import React from "react";

import { Link } from "react-router-dom";
import { home, movies, personAcc } from "../const/const";

import logo from "../assets/img/header/logo.svg";
import search from "../assets/img/header/search.svg";
import avatar from "../assets/img/header/person.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="header__menu">
              <li className="header__menu-link">
                <Link to={home}>Главная</Link>
              </li>
              <li className="header__menu-link">
                <Link to={movies}>Фильмы</Link>
              </li>
              <li className="header__menu-link">
                <a href="#1">Сериалы</a>
              </li>
            </ul>
            <div className="header__links">
              <div className="header__link search">
                {/* <img src={search} alt="search" /> */}
                <div className="container_search">
                  <input type="text" placeholder="Поиск..." />

                  <div className="search-btn"></div>
                </div>
              </div>
              <Link to={personAcc} className="header__link avatar">
                <img src={avatar} alt="avatar" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
