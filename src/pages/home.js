import React from 'react'
import '../scss/home.scss';

import logo from '../assets/img/header/logo.svg';
import search from '../assets/img/header/search.svg';
import avatar from '../assets/img/header/person.svg';
import guardiansIMG from '../assets/img/banner/guardians.jpg';
import lostCityIMG from '../assets/img/banner/lostCity.jpg';
import jwIMG from '../assets/img/banner/JW.jpg';
import thorIMG from '../assets/img/banner/Thor.jpg';
import blackIMG from '../assets/img/banner/blackP.jpg';
import aboutOneIMG from '../assets/img/about/quality.jpg';
import aboutTwoIMG from '../assets/img/about/download.jpg';
import youtube from '../assets/img/footer/youtube.svg';
import instagram from '../assets/img/footer/inst.svg';
import twitter from '../assets/img/footer/twitter.svg';
import facebook from '../assets/img/footer/facebook.svg';

function Home() {
  return (
    <div>
    <header className="header">
      <div className="container">
          <div className="header__inner">
              <div className="header__logo">
                  <img src={logo} alt="logo"/>
              </div>
              <ul className="header__menu">
                  <li className="header__menu-link"><a
                          href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/Home.html">Главная</a></li>
                  <li className="header__menu-link"><a
                          href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/Movies.html">Фильмы</a></li>
                  <li className="header__menu-link"><a href="#">Сериалы</a></li>
              </ul>
              <div className="header__links">
                  <a href="" className="header__link search"><img src={search} alt="search"/></a>
                  <a href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/PersonalAccount.html"
                      className="header__link avatar"><img src={avatar} alt="avatar"/></a>
              </div>
          </div>
      </div>
  </header>
  <main className="main">
      <section className="banner">
          <div className="container">
              <div className="banner__inner">
                  <div className="banner__inner-info">
                      <h1 className="banner__title">Почувствуй силу кино
                          <br/>у себя дома
                      </h1>
                      <h3 className="banner__subtitle">Смотрите фильмы и сериалы только у нас</h3>
                      <button className="banner__button">Узнать больше</button>
                  </div>
              </div>
          </div>
      </section>
      <div className="container">
          <section className="compilation">
              <div className="compilation__inner">
                  <div className="compilation__titles">
                      <div className="compilation__title title"><a href="#">Популярное</a></div>
                      <div className="compilation__title title"><a href="#">Актуальное</a></div>
                  </div>
                  <div className="compilation__slider">
                      <a href="#" className="compilation__slider_block"><img src={guardiansIMG} alt="movie"
                              className="compilation__movie"/></a>
                      <a href="#" className="compilation__slider_block"><img src={blackIMG} alt="movie"
                              className="compilation__movie"/></a>
                      <a href="#" className="compilation__slider_block"><img src={lostCityIMG} alt="movie"
                              className="compilation__movie"/></a>
                      <a href="#" className="compilation__slider_block"><img src={jwIMG} alt="movie"
                              className="compilation__movie"/></a>
                      <a href="#" className="compilation__slider_block"><img src={thorIMG} alt="movie"
                              className="compilation__movie"/></a>
                  </div>
              </div>
          </section>
          <section className="about">
              <div className="about__inner">
                  <div className="about__title title">О нас</div>
                  <div className="about__quality">
                      <div className="about__quality-image">
                          <img src={aboutOneIMG} alt="family"/>
                      </div>
                      <div className="about__quality-info">
                          <div className="about__quality-title title">Гарантия качества</div>
                          <div className="about__quality-text">Все фильмы и сериалы в нашем онлайн-кионтеатре представлены
                              зрителю
                              в наилучшем качестве и с профессиональной озвучкой.</div>
                      </div>
                  </div>
                  <div className="about__download">
                      <div className="about__download-info">
                          <div className="about__download-title title">Возможность скачивания</div>
                          <div className="about__download-text">В нашем онлайн-кинотеатре можно скачивать фильмы. Поэтому
                              если
                              вы собираетесь в дорогу, то у вас есть возможность скачать несколько фильмов и скоротать
                              время в пути за просмотром качественного кино.</div>
                      </div>
                      <div className="about__download-image">
                          <img src={aboutTwoIMG} alt="family"/>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </main>
  <footer className="footer">
      <div className="container">
          <div className="footer__inner">
              <div className="footer__approval"><a href="#">Согласие на обработку<br/> персональных данных</a></div>
              <div className="footer__privacy"><a href="#">Политика конфиденциальности</a></div>
              <div className="footer__social">
                  <a href="#" className="footer__social-instagram"><img src={instagram} alt="instagram"/></a>
                  <a href="#" className="footer__social-youtube"><img src={youtube} alt="youtube"/></a>
                  <a href="#" className="footer__social-facebook"><img src={facebook} alt="facebook"/></a>
                  <a href="#" className="footer__social-twitter"><img src={twitter} alt="twitter"/></a>
              </div>
          </div>
      </div>
  </footer>
  </div>
  )
}

export default Home;