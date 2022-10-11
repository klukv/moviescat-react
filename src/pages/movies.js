import React from "react";

import guardiansIMG from "../assets/img/banner/guardians.jpg";
import lostCityIMG from "../assets/img/banner/lostCity.jpg";
import jwIMG from "../assets/img/banner/JW.jpg";
import thorIMG from "../assets/img/banner/Thor.jpg";
import blackIMG from "../assets/img/banner/blackP.jpg";

import "../scss/movies.scss";

function Movies() {
  return (
    <div>
      <main className="main">
        <section className="movies">
          <div className="container">
            <button className="movies__date sort">По дате добавления</button>
            <button className="movies__genre sort">Жанр</button>
            <div className="movies__row">
              <a href="#" className="movies__block">
                <img
                  src={guardiansIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={blackIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={lostCityIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={jwIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={thorIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={guardiansIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={blackIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={lostCityIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={jwIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={thorIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={guardiansIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={blackIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={lostCityIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={jwIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
              <a href="#" className="movies__block">
                <img
                  src={thorIMG}
                  alt="movie"
                  className="movies__image"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Movies;
