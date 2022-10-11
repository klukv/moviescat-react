import React from "react";
import "../scss/home.scss";

import guardiansIMG from "../assets/img/banner/guardians.jpg";
import lostCityIMG from "../assets/img/banner/lostCity.jpg";
import jwIMG from "../assets/img/banner/JW.jpg";
import thorIMG from "../assets/img/banner/Thor.jpg";
import blackIMG from "../assets/img/banner/blackP.jpg";
import aboutOneIMG from "../assets/img/about/quality.jpg";
import aboutTwoIMG from "../assets/img/about/download.jpg";

function Home() {
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
                  <a href="#">Популярное</a>
                </div>
                <div className="compilation__title title">
                  <a href="#">Актуальное</a>
                </div>
              </div>
              <div className="compilation__slider">
                <a href="#" className="compilation__slider_block">
                  <img
                    src={guardiansIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#" className="compilation__slider_block">
                  <img
                    src={blackIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#" className="compilation__slider_block">
                  <img
                    src={lostCityIMG}
                    alt="movie"
                    className="compilation__movie"
                  />
                </a>
                <a href="#" className="compilation__slider_block">
                  <img src={jwIMG} alt="movie" className="compilation__movie" />
                </a>
                <a href="#" className="compilation__slider_block">
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
}

export default Home;
