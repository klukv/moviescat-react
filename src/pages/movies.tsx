import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";
import {
  SortPopupDate,
  SortPopupGenre,
  MovieComponent,
  MovieLoadingComponent,
  usePagination,
} from "../components";
import Pagination from "../components/Pagination";
import { sortItemsGenre, sortItemsOther } from "../const/const";
import { getAllFilms } from "../services/contentService";
import { addFilms, setLoaded } from "../redux/slices/moviesSlice";
import { IMovie } from "./home";
import { searchContext } from "../App";

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const { sortParams, genreURL, searchMovies } =
    React.useContext(searchContext);
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const isLoaded = useSelector(
    (state: RootState) => state.moviesSlice.isLoaded
  );
  const activeLabel = useSelector((state: RootState) => state.filterSlice);
  React.useEffect(() => {
    dispatch(setLoaded(false));
    getAllFilms(sortParams, genreURL, searchMovies).then((data) => {
      dispatch(addFilms(data));
      setMovies(data);
      dispatch(setLoaded(true));
    });
  }, [sortParams, genreURL, searchMovies]);

  const paginateMovies = usePagination({
    contentPerPage: 5,
    count: movies.length,
  });

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
                ? movies.length < 5
                  ? movies.map((movie, index) => (
                      <MovieComponent key={`index=${index}`} {...movie} />
                    ))
                  : movies
                      .slice(
                        paginateMovies.firstContentIndex,
                        paginateMovies.lastContentIndex
                      )
                      .map((movies, index) => (
                        <MovieComponent key={`index=${index}`} {...movies} />
                      ))
                : [...new Array(5)].map((_, index) => (
                    <MovieLoadingComponent key={`indexLoading=${index}`} />
                  ))}
            </div>
            {movies.length > 5 ? <Pagination {...paginateMovies} /> : ""}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;
