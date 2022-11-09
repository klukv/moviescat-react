import React from "react";
import SortPopupDate from "../components/SortPopupDate";
import SortPopupGenre from "../components/SortPopupGenre";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";
import MovieComponent from "../components/MoviesComponent";

const Movies: React.FC = () => {
  const moviesArray = useSelector(
    (state: RootState) => state.moviesSlice.movies
  );

  return (
    <div>
      <main className="main">
        <section className="movies">
          <div className="container">
            <SortPopupDate />
            <SortPopupGenre />
            <div className="movies__row">
              {moviesArray.map((movies, index) => (
                <MovieComponent key={`index=${index}`} {...movies} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
