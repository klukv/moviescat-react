import React from "react";
import SortPopupDate from "../components/SortPopupDate";
import SortPopupGenre from "../components/SortPopupGenre";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";
import MovieComponent from "../components/MoviesComponent";

const sortItemsGenre = [
  { genre: "Все", type: "default", order: "asc" },
  { genre: "Комедия", type: "comedy", order: "asc" },
  { genre: "Драма", type: "drama", order: "asc" },
  { genre: "Боевик", type: "action_movie", order: "asc" },
  { genre: "Триллер", type: "thriller", order: "asc" },
];
const sortItemsOther = [
  { name: "По дате добавления", type: "date_added", order: "desc" },
  { name: "По дате выхода", type: "release", order: "asc" },
  { name: "По рейтингу", type: "rating", order: "asc" },
  { name: "По названию", type: "name_movie", order: "asc" },
];

const Movies: React.FC = () => {
  const moviesArray = useSelector(
    (state: RootState) => state.moviesSlice.movies
  );
  const activeLabel = useSelector((state: RootState) => state.filterSlice);

  return (
    <div>
      <main className="main">
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
