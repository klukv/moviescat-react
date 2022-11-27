import React from "react";
import { useSelector } from "react-redux";
import { AccountMovieComponents, usePagination } from "../components";
import Pagination from "../components/Pagination";
import { RootState } from "../redux/store";

import "../scss/personalAccount.scss";

const PersonalAC: React.FC = () => {
  const { recentlyMovies, favouriteMovies } = useSelector(
    (state: RootState) => state.moviesSlice
  );

  const paginateRecentlyMovies = usePagination({
    count: 5,
    contentPerPage: recentlyMovies.length,
  });

  const paginateFavouriteMovies = usePagination({
    count: 5,
    contentPerPage: favouriteMovies.length,
  });

  return (
    <div className="main">
      <main>
        <div className="person">
          <div className="container">
            <div className="person__inner">
              <div className="person__row">
                <div className="person__block-img"></div>
                <div className="person__info">
                  <div className="person__info-name avatar__title">Name</div>
                  <a href="#1" className="person__info-mail">
                    pochta@mail.ru
                  </a>
                </div>
              </div>
              <div className="person__compilation">
                <h2 className="person__compilation-title avatar__title">
                  Любимые
                </h2>
                <div className="person__compilation-slider">
                  {favouriteMovies
                    .slice(
                      paginateFavouriteMovies.firstContentIndex,
                      paginateFavouriteMovies.lastContentIndex
                    )
                    .map((movie, index) => (
                      <AccountMovieComponents
                        key={`keyFavourite=${index}`}
                        {...movie}
                      />
                    ))}
                </div>
                <Pagination {...paginateFavouriteMovies} />
              </div>
              <div className="person__watched">
                <h2 className="person__watched-title avatar__title">
                  Недавно просмотренные
                </h2>
                <div className="person__watched-slider">
                  {recentlyMovies.map((movie, index) => (
                    <AccountMovieComponents
                      key={`keyRecentlyMovie-${index}`}
                      {...movie}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalAC;
