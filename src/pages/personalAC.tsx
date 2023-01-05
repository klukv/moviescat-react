import React from "react";
import { useSelector } from "react-redux";
import {
  AccountMovieComponents,
  EmptySlider,
  usePagination,
} from "../components";
import Pagination from "../components/Pagination";
import { RootState } from "../redux/store";

import "../scss/personalAccount.scss";

const PersonalAC: React.FC = () => {
  const { recentlyMovies, favouriteMovies } = useSelector(
    (state: RootState) => state.moviesSlice
  );
  const { user } = useSelector((state: RootState) => state.userSlice);
  const paginateFavouriteMovies = usePagination({
    count: favouriteMovies.length,
    contentPerPage: 5,
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
                  <div className="person__info-name avatar__title">{user.username}</div>
                  <a href="#1" className="person__info-mail">
                    {user.email}
                  </a>
                </div>
              </div>
              <div className="person__compilation">
                <h2 className="person__compilation-title avatar__title">
                  Любимые
                </h2>
                <div className="person__compilation-slider">
                  {favouriteMovies.length !== 0 ? (
                    favouriteMovies
                      .slice(
                        paginateFavouriteMovies.firstContentIndex,
                        paginateFavouriteMovies.lastContentIndex
                      )
                      .map((movie, index) => (
                        <AccountMovieComponents
                          key={`keyFavourite=${index}`}
                          {...movie}
                        />
                      ))
                  ) : (
                    <EmptySlider />
                  )}
                </div>
                {favouriteMovies.length > 5 ? (
                  <Pagination {...paginateFavouriteMovies} />
                ) : (
                  ""
                )}
              </div>
              <div className="person__watched">
                <h2 className="person__watched-title avatar__title">
                  Недавно просмотренные
                </h2>
                <div className="person__watched-slider">
                  {recentlyMovies.length !== 0 ? (
                    recentlyMovies.map((movie, index) => (
                      <AccountMovieComponents
                        key={`keyRecently=${index}`}
                        {...movie}
                      />
                    ))
                  ) : (
                    <EmptySlider />
                  )}
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
