import React from "react";

import { Link, useLocation } from "react-router-dom";
import { home, movies, personAcc, serials } from "../const/const";

import logo from "../assets/img/header/logo.svg";
import avatar from "../assets/img/header/person.svg";
import Search from "./search";

const menuLinks = [
  {
    path: home,
    name: "Главная",
  },
  {
    path: movies,
    name: "Фильмы",
  },
  {
    path: serials,
    name: "Сериалы",
  },
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="header">
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="header__menu">
              {menuLinks.map((link, index) => (
                <li
                  key={`headers__links_${index}`}
                  className={
                    location.pathname === link.path
                      ? "header__menu-link active"
                      : "header__menu-link"
                  }
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className="header__links">
              <Search />
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
