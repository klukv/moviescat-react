import React from "react";
import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";
import { RootState } from "../redux/store";
import MoviesComponent from "./MoviesComponent";

const NewFilms: React.FC = () => {
  const arrayMovies = useSelector(
    (state: RootState) => state.moviesSlice.movies
  ).filter((movie) => {
    return movie.type === "popular";
  });

  return (
    <Slider>
      {arrayMovies.map((movie, index) => (
        <MoviesComponent key={`index__${index}`} {...movie} />
      ))}
    </Slider>
  );
};

export default NewFilms;
