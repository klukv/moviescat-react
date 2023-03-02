import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Cmovies, Cserials } from "./components";
import Footer from "./components/footer";
import Header from "./components/header";
import { likeMovies, likeSerials } from "./const/const";
import Login from "./pages/login";
import PersonalAC from "./pages/personalAC";
import { addActualMovies, addPopularMovies } from "./redux/slices/moviesSlice";
import { RootState } from "./redux/store";
import { authRoutes, publicRoutes } from "./routes";
import { getFilmsByType } from "./services/contentService";

interface contextSearch {
  searchValue: string;
  setSearchValue: (value: string) => void;
  genreURL: string;
  searchMovies: string;
  sortParams: string;
}
const defaultState = {
  searchValue: "",
  setSearchValue: () => "",
  genreURL: "",
  searchMovies: "",
  sortParams: "",
};

export const searchContext = React.createContext<contextSearch>(defaultState);
const typePopular: string = "popular";
const typeActual: string = "actual";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState("");
  const isAuthUser = useSelector(
    (state: RootState) => state.userSlice.user.isAuth
  );

  const { genre, type } = useSelector(
    (state: RootState) => state.filterSlice.genreSort
  );
  const { typeParams, order } = useSelector(
    (state: RootState) => state.filterSlice.otherParams
  );
  const genreURL = type !== "default" ? `&genre=${genre}` : "";
  const searchMovies = searchValue ? `&title=${searchValue}` : "";
  const sortParams =
    typeParams !== "default" ? `sort=${typeParams},order=${order}` : "";

  useEffect(() => {
    if (isAuthUser) {
      getFilmsByType(typeActual).then((data) =>
        dispatch(addActualMovies(data))
      );
      getFilmsByType(typePopular).then((data) =>
        dispatch(addPopularMovies(data))
      );
    }
  }, []);

  return (
    <div className="page">
      <searchContext.Provider
        value={{
          searchValue,
          setSearchValue,
          genreURL,
          searchMovies,
          sortParams,
        }}
      >
        <Header />
        <Routes>
          {isAuthUser ? (
            authRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))
          ) : (
            <Route key="login-key" path="*" element={<Login />} />
          )}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/person" element={<PersonalAC />}>
            <Route path={likeMovies} element={<Cmovies />} />
            <Route path={likeSerials} element={<Cserials />} />
          </Route>
        </Routes>
        <Footer />
      </searchContext.Provider>
    </div>
  );
};

export default App;
