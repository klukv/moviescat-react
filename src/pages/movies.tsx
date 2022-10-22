import React from "react";

import "../scss/movies.scss";

const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");
const hobbitIMG = require("../assets/img/newFilms/hobbit.jpg");
const jumanjiIMG = require("../assets/img/newFilms/jumanji.jpg");
const hollywoodIMG = require("../assets/img/newFilms/hollywood.jpg");
const avatarIMG = require("../assets/img/newFilms/avatar.jpg");
const inseptionIMG = require("../assets/img/newFilms/inseption.jpg");
const moneyballIMG = require("../assets/img/banner/moneyball.jpg");
const PiratesIMG = require("../assets/img/banner/Pirates.jpg");
const BabyDriverIMG = require("../assets/img/banner/BabyDriver.jpg");
const CrewIMG = require("../assets/img/banner/Crew.jpg");
const NightMuseumIMG = require("../assets/img/banner/NightMuseum.jpg");

const Movies: React.FC = () => {
  return (
    <div>
      <main className="main">
        <section className="movies">
          <div className="container">
            <button className="movies__date sort">По дате добавления</button>
            <button className="movies__genre sort">Жанр</button>
            <div className="movies__row">
              <a href="#1" className="movies__block">
                <img src={guardiansIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={blackIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={lostCityIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={jwIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={thorIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={hobbitIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={jumanjiIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={hollywoodIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={avatarIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={inseptionIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={CrewIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={moneyballIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={BabyDriverIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={NightMuseumIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#1" className="movies__block">
                <img src={PiratesIMG} alt="movie" className="movies__image" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
