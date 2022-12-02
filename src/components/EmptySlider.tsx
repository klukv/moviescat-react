import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../const/const";

import SadCat from "../assets/img/oneMovie/sadCat.svg";

const EmptySlider: React.FC = () => {
  return (
    <div className="person__empty-slider">
      <div className="empty__slider-one">
        <div className="empty__slider-text">Пусто</div>
        <div className="empty__slider-cat">
          <img src={SadCat} alt="sad-cat" />
        </div>
      </div>
      <div className="empty__slider-two">
        <div className="empty__slider-text">
          Вы можете создать свою подборку фильмов
        </div>
        <Link to={movies}>
          <svg
            className="empty__slider-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style></style>
            </defs>
            <title />
            <g data-name="Layer 2" id="Layer_2">
              <path
                className="cls-1"
                d="M16.88,15.53,7,5.66A1,1,0,0,0,5.59,7.07l9.06,9.06-8.8,8.8a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.42,0l9.61-9.61A.85.85,0,0,0,16.88,15.53Z"
              />
              <path
                className="cls-1"
                d="M26.46,15.53,16.58,5.66a1,1,0,0,0-1.41,1.41l9.06,9.06-8.8,8.8a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0l9.62-9.61A.85.85,0,0,0,26.46,15.53Z"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EmptySlider;
