import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import changeEverything from "../assets/img/oneMovie/changeEverything.jpg";
import { RootState } from "../redux/store";

import "../scss/oneMovie.scss";

const OneMovie: React.FC = () => {
  const { id } = useParams();

  const selectMovie = useSelector(
    (state: RootState) => state.moviesSlice.movies
  ).find((item, index) => item.id.toString() === id);
  return (
    <div className="main">
      <main>
        <section className="inforamtion">
          <div className="container">
            <div className="information__inner">
              <div className="information__row">
                <div className="information__block-one">
                  <div className="information__image">
                    <img src={selectMovie && selectMovie.imgUrl} alt="movie" />
                  </div>
                  <div className="information__rating">
                    <h2 className="information__rating-title">
                      Рейтинг фильма
                    </h2>
                    <div className="information__rating-stars">
                      <div className="information__rating-star">
                        <div className="rating-area">
                          <input
                            type="radio"
                            id="star-10"
                            name="rating"
                            value="10"
                          />
                          <label htmlFor="star-10" title="Оценка «10»"></label>
                          <input
                            type="radio"
                            id="star-9"
                            name="rating"
                            value="9"
                          />
                          <label htmlFor="star-9" title="Оценка «9»"></label>
                          <input
                            type="radio"
                            id="star-8"
                            name="rating"
                            value="8"
                          />
                          <label htmlFor="star-8" title="Оценка «8»"></label>
                          <input
                            type="radio"
                            id="star-7"
                            name="rating"
                            value="7"
                          />
                          <label htmlFor="star-7" title="Оценка «7»"></label>
                          <input
                            type="radio"
                            id="star-6"
                            name="rating"
                            value="6"
                          />
                          <label htmlFor="star-6" title="Оценка «6»"></label>
                          <input
                            type="radio"
                            id="star-5"
                            name="rating"
                            value="5"
                          />
                          <label htmlFor="star-5" title="Оценка «5»"></label>
                          <input
                            type="radio"
                            id="star-4"
                            name="rating"
                            value="4"
                          />
                          <label htmlFor="star-4" title="Оценка «4»"></label>
                          <input
                            type="radio"
                            id="star-3"
                            name="rating"
                            value="3"
                          />
                          <label htmlFor="star-3" title="Оценка «3»"></label>
                          <input
                            type="radio"
                            id="star-2"
                            name="rating"
                            value="2"
                          />
                          <label htmlFor="star-2" title="Оценка «2»"></label>
                          <input
                            type="radio"
                            id="star-1"
                            name="rating"
                            value="1"
                          />
                          <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                      </div>
                      <div className="information__rating-number">8.0</div>
                    </div>
                  </div>
                </div>
                <div className="information__block-two">
                  <div className="information__title">
                    {selectMovie && selectMovie.title}
                  </div>
                  <div className="information__description">
                    {selectMovie && selectMovie.description}
                  </div>
                  <button className="information__button">Смотреть</button>
                  <div className="information__about">
                    <h2 className="information__about-title">О фильме</h2>
                    <div className="information__about-grid">
                      <div className="information__about-point">Год</div>
                      <div className="information__about-point">
                        {selectMovie && selectMovie.year}
                      </div>
                      <div className="information__about-point">Страна</div>
                      <div className="information__about-point">
                        {selectMovie && selectMovie.country}
                      </div>
                      <div className="information__about-point">Жанр</div>
                      <div className="information__about-point">
                        {selectMovie && selectMovie.genre}
                      </div>
                      <div className="information__about-point">Режиссер</div>
                      <div className="information__about-point">
                        {selectMovie && selectMovie.director}
                      </div>
                      <div className="information__about-point">Время</div>
                      <div className="information__about-point">
                        {selectMovie && `${selectMovie.time} мин.`}
                      </div>
                      <div className="information__about-point">Бюджет.</div>
                      <div className="information__about-point">
                        {selectMovie && `$ ${selectMovie.budget}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OneMovie;
