import React, { useState } from "react";
import { Carousel, Slider } from "../components";
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
    <div className="main">
      <main>
        <section className="banner">
          <div className="container">
            <div className="banner__inner">
              <Carousel />
              <div className="banner__inner-info">
                <h1 className="banner__title">
                  Почувствуй силу кино
                  <br />у себя дома
                </h1>
                <h3 className="banner__subtitle">
                  Смотрите фильмы и сериалы только у нас
                </h3>
                <a className="banner__link" href="#learn__more">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="compilation">
          <div className="container">
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
              <Slider activeFilms={popularFilms} />
            </div>
          </div>
        </section>
        <section className="about" id="learn__more">
          <div className="container">
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
                    Удобный интерфейс
                  </div>
                  <div className="about__download-text">
                    Для современного человека удобство и комфорт особенно
                    ценятся при постоянной занятости или просто в конце рабочего
                    дня. По этой причине, на сегодняшний день так популярны
                    онлайн-кинотеатры. Здесь вы можете посмотреть любимый фильм,
                    увлечь ребенка интересным видео, либо насладиться нашумевшим
                    блокбастером, который только недавно вышел на экраны, не
                    выходя из дома.
                  </div>
                </div>
                <div className="about__download-image">
                  <img src={aboutTwoIMG} alt="family" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
