import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MoviesComponent from "./MoviesComponent";

type translateType = {
  translate: number;
};

const NewFilms: React.FC<translateType> = ({ translate }) => {
  const arrayMovies = useSelector(
    (state: RootState) => state.moviesSlice.movies
  ).filter((movie) => {
    return movie.type === "popular";
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
    </div>
  );
};

export default NewFilms;