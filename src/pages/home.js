import React from 'react'
import './scss/home.scss';

import logo from './assets/img/header/logo.svg';
import search from './assets/img/header/search.svg';
import avatar from './assets/img/header/person.svg';
import guardiansIMG from './assets/img/banner/guardians.jpg';
import lostCityIMG from './assets/img/banner/lostCity.jpg';
import jwIMG from './assets/img/banner/JW.jpg';
import thorIMG from './assets/img/banner/Thor.jpg';
import blackIMG from './assets/img/banner/blackP.jpg';
import aboutOneIMG from './assets/img/about/quality.jpg';
import aboutTwoIMG from './assets/img/about/download.jpg';
import youtube from './assets/img/footer/youtube.svg';
import instagram from './assets/img/footer/inst.svg';
import twitter from './assets/img/footer/twitter.svg';
import facebook from './assets/img/footer/facebook.svg';

function home() {
  return (
    <div>
    <header class="header">
      <div class="container">
          <div class="header__inner">
              <div class="header__logo">
                  <img src={logo} alt="logo"/>
              </div>
              <ul class="header__menu">
                  <li class="header__menu-link"><a
                          href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/Home.html">Главная</a></li>
                  <li class="header__menu-link"><a
                          href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/Movies.html">Фильмы</a></li>
                  <li class="header__menu-link"><a href="#">Сериалы</a></li>
              </ul>
              <div class="header__links">
                  <a href="" class="header__link search"><img src={search} alt="search"/></a>
                  <a href="file:///D:/StudBRUT/MoviesCat/MoviesCat-html-css/PersonalAccount.html"
                      class="header__link avatar"><img src={avatar} alt="avatar"/></a>
              </div>
          </div>
      </div>
  </header>
  <main class="main">
      <section class="banner">
          <div class="container">
              <div class="banner__inner">
                  <div class="banner__inner-info">
                      <h1 class="banner__title">Почувствуй силу кино
                          <br/>у себя дома
                      </h1>
                      <h3 class="banner__subtitle">Смотрите фильмы и сериалы только у нас</h3>
                      <button class="banner__button">Узнать больше</button>
                  </div>
              </div>
          </div>
      </section>
      <div class="container">
          <section class="compilation">
              <div class="compilation__inner">
                  <div class="compilation__titles">
                      <div class="compilation__title title"><a href="#">Популярное</a></div>
                      <div class="compilation__title title"><a href="#">Актуальное</a></div>
                  </div>
                  <div class="compilation__slider">
                      <a href="#" class="compilation__slider_block"><img src={guardiansIMG} alt="movie"
                              class="compilation__movie"/></a>
                      <a href="#" class="compilation__slider_block"><img src={blackIMG} alt="movie"
                              class="compilation__movie"/></a>
                      <a href="#" class="compilation__slider_block"><img src={lostCityIMG} alt="movie"
                              class="compilation__movie"/></a>
                      <a href="#" class="compilation__slider_block"><img src={jwIMG} alt="movie"
                              class="compilation__movie"/></a>
                      <a href="#" class="compilation__slider_block"><img src={thorIMG} alt="movie"
                              class="compilation__movie"/></a>
                  </div>
              </div>
          </section>
          <section class="about">
              <div class="about__inner">
                  <div class="about__title title">О нас</div>
                  <div class="about__quality">
                      <div class="about__quality-image">
                          <img src={aboutOneIMG} alt="family"/>
                      </div>
                      <div class="about__quality-info">
                          <div class="about__quality-title title">Гарантия качества</div>
                          <div class="about__quality-text">Все фильмы и сериалы в нашем онлайн-кионтеатре представлены
                              зрителю
                              в наилучшем качестве и с профессиональной озвучкой.</div>
                      </div>
                  </div>
                  <div class="about__download">
                      <div class="about__download-info">
                          <div class="about__download-title title">Возможность скачивания</div>
                          <div class="about__download-text">В нашем онлайн-кинотеатре можно скачивать фильмы. Поэтому
                              если
                              вы собираетесь в дорогу, то у вас есть возможность скачать несколько фильмов и скоротать
                              время в пути за просмотром качественного кино.</div>
                      </div>
                      <div class="about__download-image">
                          <img src={aboutTwoIMG} alt="family"/>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </main>
  <footer class="footer">
      <div class="container">
          <div class="footer__inner">
              <div class="footer__approval"><a href="#">Согласие на обработку<br/> персональных данных</a></div>
              <div class="footer__privacy"><a href="#">Политика конфиденциальности</a></div>
              <div class="footer__social">
                  <a href="#" class="footer__social-instagram"><img src={instagram} alt="instagram"/></a>
                  <a href="#" class="footer__social-youtube"><img src={youtube} alt="youtube"/></a>
                  <a href="#" class="footer__social-facebook"><img src={facebook} alt="facebook"/></a>
                  <a href="#" class="footer__social-twitter"><img src={twitter} alt="twitter"/></a>
              </div>
          </div>
      </div>
  </footer></div>
  )
}

export default home;