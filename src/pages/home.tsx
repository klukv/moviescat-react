import React from "react";
import "../scss/home.scss";

const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");
const aboutOneIMG = require("../assets/img/about/quality.jpg");
const aboutTwoIMG = require("../assets/img/about/download.jpg");

const Home: React.FC = () => {
  return (
    <div>
      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="banner__inner">
              <div className="banner__inner-info">
                <h1 className="banner__title">
                  Почувствуй силу кино
                  <br />у себя дома
                </h1>
                <h3 className="banner__subtitle">
                  Смотрите фильмы и сериалы только у нас
                </h3>
                <button className="banner__button">Узнать больше</button>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="compilation">
            <div className="compilation__inner">
              <div className="compilation__titles">
                <div className="compilation__title title">
                  <a href="#1">Популярное</a>
                </div>
                <div className="compilation__title title">
                  <a href="#1">Актуальное</a>
                </div>
              </div>
              <div className="compilation__slider">
                <a href="#1" className="compilation__slider_block">
                  <img
                    src={guardiansIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#1" className="compilation__slider_block">
                  <img
                    src={blackIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#1" className="compilation__slider_block">
                  <img
                    src={lostCityIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#1" className="compilation__slider_block">
                  <img src={jwIMG} alt="movie" className="compilation__movie" />
                </a>
                <a href="#1" className="compilation__slider_block">
                  <img
                    src={thorIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="about__inner">
              <div className="about__title title">О нас</div>
              <div className="about__quality">
                <div className="about__quality-image">
                  <img src={aboutOneIMG} alt="family" />
                </div>
                <div className="about__quality-info">
                  <div className="about__quality-title title">
                    Гарантия качества
                  </div>
                  <div className="about__quality-text">
                    Все фильмы и сериалы в нашем онлайн-кионтеатре представлены
                    зрителю в наилучшем качестве и с профессиональной озвучкой.
                  </div>
                </div>
              </div>
              <div className="about__download">
                <div className="about__download-info">
                  <div className="about__download-title title">
                    Возможность скачивания
                  </div>
                  <div className="about__download-text">
                    В нашем онлайн-кинотеатре можно скачивать фильмы. Поэтому
                    если вы собираетесь в дорогу, то у вас есть возможность
                    скачать несколько фильмов и скоротать время в пути за
                    просмотром качественного кино.
                  </div>
                </div>
                <div className="about__download-image">
                  <img src={aboutTwoIMG} alt="family" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
