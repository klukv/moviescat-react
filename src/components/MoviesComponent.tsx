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
  console.log(imgUrl);

  return (
    <div className="movie__div">
      <a href="#1" className="movies__block">
        <img src={imgUrl} alt="movie" className="movies__image" />
      </a>
    </div>
  );
};

export default MoviesComponent;
