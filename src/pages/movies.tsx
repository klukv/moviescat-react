import React from "react";

import "../scss/movies.scss";

const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");

const Movies: React.FC = () => {
  return (
    <div>
      <main className="main">
        <section className="movies">
          <div className="container">
            <button className="movies__date sort">По дате добавления</button>
            <button className="movies__genre sort">Жанр</button>
            <div className="movies__row">
              <a href="#" className="movies__block">
                <img src={guardiansIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={blackIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={lostCityIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={jwIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={thorIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={guardiansIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={blackIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={lostCityIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={jwIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={thorIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={guardiansIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={blackIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={lostCityIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={jwIMG} alt="movie" className="movies__image" />
              </a>
              <a href="#" className="movies__block">
                <img src={thorIMG} alt="movie" className="movies__image" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
