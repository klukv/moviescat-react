import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MoviesComponent from "./MoviesComponent";

type translateType = {
  translate: number;
};

const ActualFilms: React.FC<translateType> = ({ translate }) => {
  const arrayMovies = useSelector(
    (state: RootState) => state.moviesSlice.movies
  ).filter((movie) => {
    return movie.type === "actual";
  });

  return (
    <div
      className="compilation__slider"
      style={{
        transform: `translateX(${translate}px)`,
      }}
    >
      {arrayMovies.map((movie, index) => (
        <MoviesComponent key={`index__${index}`} {...movie} />
      ))}
      {/* доделать слайдер */}
    </div>
  );
};

export default ActualFilms;
