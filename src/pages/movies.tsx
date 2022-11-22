import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";
import {
  SortPopupDate,
  SortPopupGenre,
  MovieComponent,
  MovieLoadingComponent,
  usePagination,
} from "../components";

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

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({ contentPerPage: 5, count: moviesArray.length });

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
                ? moviesArray
                    .slice(firstContentIndex, lastContentIndex)
                    .map((movies, index) => (
                      <MovieComponent key={`index=${index}`} {...movies} />
                    ))
                : [...new Array(5)].map((_, index) => (
                    <MovieLoadingComponent key={`indexLoading=${index}`} />
                  ))}
            </div>
            <div className="movies__pagination">
              <div className="movies__pagination-inner">
                <span className="movies__pagination-btn" onClick={prevPage}>
                  <svg
                    className="pagination-left"
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
                  </svg>
                </span>
                {[...new Array(totalPages)].map((_, index) => (
                  <span
                    className={
                      page === index + 1
                        ? "movies__pagination-btn active"
                        : "movies__pagination-btn"
                    }
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </span>
                ))}
                <span className="movies__pagination-btn" onClick={nextPage}>
                  <svg
                    className="pagination-right"
                    viewBox="0 0 96 96"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
