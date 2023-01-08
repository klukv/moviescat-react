import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MovieComponent } from "../index";

type translateType = {
  translate: number;
};

const NewFilms: React.FC<translateType> = ({ translate }) => {
  const { sliderPopularMovies } = useSelector(
    (state: RootState) => state.moviesSlice
  );

  return (
    <div
      className="compilation__slider"
      style={{
        transform: `translateX(${translate}px)`,
      }}
    >
      {sliderPopularMovies.map((movie, index) => (
        <MovieComponent key={`index__${index}`} {...movie} />
      ))}
    </div>
  );
};

export default NewFilms;
