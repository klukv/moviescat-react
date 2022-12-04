import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { oneMovie, oneSerial } from "../../const/const";

interface movie {
  id: number;
  title: string;
  imgUrl: string;
}
const MoviesComponent: React.FC<movie> = ({ id, title, imgUrl }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const clickMovie = (id: number) => {
    switch (pathname) {
      case `/movies`:
        navigate(oneMovie + "/" + id);
        break;
      case `/`:
        navigate(oneMovie + "/" + id);
        break;
      case "/serials":
        navigate(oneSerial + "/" + id);
        break;
    }
  };

  return (
    <div className="movie__div movies__block compilation__slider_block">
      <img src={imgUrl} alt="movie" className="compilation__movie" />
      <div className="movie__hover">
        <div className="movie__hover-title">
          <span>{title}</span>
        </div>
        <div>
          <button className="movie__hover-btn" onClick={() => clickMovie(id)}>
            Смотреть
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesComponent;
