import React from "react";

import logo from "../assets/img/header/logo.svg";
import search from "../assets/img/header/search.svg";
import avatar from "../assets/img/header/person.svg";

import { Link } from "react-router-dom";
import { home, movies, personAcc } from "../const/const";

function Header() {
  return (
    <div>
      <header className="header">
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
                <a href="#">Сериалы</a>
              </li>
            </ul>
            <div className="header__links">
              <a href="" className="header__link search">
                <img src={search} alt="search" />
              </a>
              <Link
                to={personAcc}
                className="header__link avatar"
              >
                <img src={avatar} alt="avatar" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
