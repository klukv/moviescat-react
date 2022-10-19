import React, { useState } from "react";
import ActualFilms from "../components/actualFilms";
import NewFilms from "../components/newFilms";

import "../scss/home.scss";

const aboutOneIMG = require("../assets/img/about/quality.jpg");
const aboutTwoIMG = require("../assets/img/about/download.jpg");

const Home: React.FC = () => {
  const [popularFilms, setPopularFilms] = useState(true);

  const handlePopualrFilms = (value: boolean) => {
    setPopularFilms(value);
  };

  const handleActualFilms = (value: boolean) => {
    setPopularFilms(value);
  };

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
                <div
                  className={
                    popularFilms
                      ? "compilation__title title active"
                      : "compilation__title title"
                  }
                >
                  <a href="#1" onClick={() => handlePopualrFilms(true)}>
                    Популярное
                  </a>
                </div>
                <div
                  className={
                    !popularFilms
                      ? "compilation__title title active"
                      : "compilation__title title"
                  }
                >
                  <a href="#1" onClick={() => handleActualFilms(false)}>
                    Актуальное
                  </a>
                </div>
              </div>
              {popularFilms ? <NewFilms /> : <ActualFilms />}
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
