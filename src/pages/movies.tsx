import React from "react";
import {
  SortPopupDate,
  SortPopupGenre,
  MovieComponent,
  MovieLoadingComponent,
} from "../components";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";

const sortItemsGenre = [
  { genre: "Все", type: "default", order: "asc" },
  { genre: "Комедия", type: "comedy", order: "desc" },
  { genre: "Драма", type: "drama", order: "desc" },
  { genre: "Боевик", type: "action_movie", order: "desc" },
  { genre: "Триллер", type: "thriller", order: "desc" },
];
const sortItemsOther = [
  { name: "По умолчанию", typeParams: "default", order: "asc" },
  { name: "По дате добавления", typeParams: "date_added", order: "desc" },
  { name: "По дате выхода", typeParams: "year", order: "desc" },
  { name: "По рейтингу", typeParams: "rating", order: "desc" },
  { name: "По названию", typeParams: "title", order: "desc" },
];

const Movies: React.FC = () => {
  const moviesArray = useSelector(
    (state: RootState) => state.moviesSlice.movies
  );
  const isLoaded = useSelector(
    (state: RootState) => state.moviesSlice.isLoaded
  );
  const activeLabel = useSelector((state: RootState) => state.filterSlice);

  return (
    <div className="main">
      <main>
        <section className="movies">
          <div className="container">
            <SortPopupDate
              items={sortItemsOther}
              activeObj={activeLabel.otherParams}
            />
            <SortPopupGenre
              items={sortItemsGenre}
              activeObj={activeLabel.genreSort}
            />
            <div className="movies__row">
              {isLoaded
                ? moviesArray.map((movies, index) => (
                    <MovieComponent key={`index=${index}`} {...movies} />
                  ))
                : [...new Array(15)].map((_, index) => (
                    <MovieLoadingComponent key={`indexLoading=${index}`} />
                  ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
