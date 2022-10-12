import React from "react";

import "../scss/personalAccount.scss";

const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");

const PersonalAC: React.FC = () => {
  return (
    <div>
      <main className="main">
        <div className="person">
          <div className="container">
            <div className="person__inner">
              <div className="person__row">
                <div className="person__block-img"></div>
                <div className="person__info">
                  <div className="person__info-name avatar__title">Name</div>
                  <a href="#1" className="person__info-mail">
                    pochta@mail.ru
                  </a>
                </div>
              </div>
              <div className="person__compilation">
                <h2 className="person__compilation-title avatar__title">
                  Любимые
                </h2>
                <div className="person__compilation-slider">
                  <a href="#1" className="person__block">
                    <img
                      src={guardiansIMG}
                      alt="movie"
                      className="person__image"
                    />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={blackIMG} alt="movie" className="person__image" />
                  </a>
                  <a href="#1" className="person__block">
                    <img
                      src={lostCityIMG}
                      alt="movie"
                      className="person__image"
                    />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={jwIMG} alt="movie" className="person__image" />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={thorIMG} alt="movie" className="person__image" />
                  </a>
                </div>
              </div>
              <div className="person__watched">
                <h2 className="person__watched-title avatar__title">
                  Недавно просмотренные
                </h2>
                <div className="person__watched-slider">
                  <a href="#1" className="person__block">
                    <img
                      src={guardiansIMG}
                      alt="movie"
                      className="person__image"
                    />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={blackIMG} alt="movie" className="person__image" />
                  </a>
                  <a href="#1" className="person__block">
                    <img
                      src={lostCityIMG}
                      alt="movie"
                      className="person__image"
                    />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={jwIMG} alt="movie" className="person__image" />
                  </a>
                  <a href="#1" className="person__block">
                    <img src={thorIMG} alt="movie" className="person__image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalAC;
