import React from "react";

type movie = {
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
};
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
  return (
    <div className="movie__div">
      <a href="#1" className="movies__block compilation__slider_block">
        <img src={imgUrl} alt="movie" className="compilation__movie" />
      </a>
    </div>
  );
};

export default MoviesComponent;
