import React from "react";
import { useNavigate } from "react-router-dom";
import { oneMovie } from "../const/const";

interface movie {
  id: number;
  title: string;
  description: string;
  year: number;
  country: string;
  genre: string;
  director: string;
  time: number;
  budget: number;
  imgUrl: string;
  type?: string;
}
const MoviesComponent: React.FC<movie> = ({
  id,
  title,
  description,
  year,
  country,
  genre,
  director,
  time,
  budget,
  imgUrl,
}) => {
  const navigate = useNavigate();
  const clickMovie = (id: number) => {
    navigate(oneMovie + "/" + id);
  };

  return (
    <div className="movie__div">
      <button
        className="movies__block compilation__slider_block"
        onClick={() => clickMovie(id)}
      >
        <img src={imgUrl} alt="movie" className="compilation__movie" />
      </button>
    </div>
  );
};

export default MoviesComponent;
