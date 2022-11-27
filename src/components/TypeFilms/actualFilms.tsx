import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MovieComponent } from "../index";

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
        <MovieComponent key={`index__${index}`} {...movie} />
      ))}
      {/* доделать слайдер */}
    </div>
  );
};

export default ActualFilms;