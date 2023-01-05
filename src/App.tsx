import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { login } from "./const/const";
import { addFilms, setLoaded } from "./redux/slices/moviesSlice";
import { addSerials, setLoadedSerials } from "./redux/slices/serialsSlice";
import { RootState } from "./redux/store";
import { authRoutes, publicRoutes } from "./routes";

interface contextSearch {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
const defaultState = {
  searchValue: "",
  setSearchValue: () => "",
};

export const searchContext = React.createContext<contextSearch>(defaultState);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  useEffect(() => {
    if(!isAuthUser){
      navigate(login)
    }
    dispatch(setLoaded(false));
    dispatch(setLoadedSerials(false));
    axios
      .get(
        `https://6373a0410bb6b698b6116d57.mockapi.io/items?sortby=${typeParams}&order=${order}${genreURL}${searchMovies}`
      )
      .then(({ data }) => {
        dispatch(addFilms(data));
        dispatch(setLoaded(true));
      });
    axios
      .get(
        `https://6373a0410bb6b698b6116d57.mockapi.io/serials?sortby=${typeParams}&order=${order}${genreURL}${searchMovies}`
      )
      .then(({ data }) => {
        dispatch(addSerials(data));
        dispatch(setLoadedSerials(true));
      });
  }, [genre, type, typeParams, searchValue]);

  return (
    <div className="page">
      <searchContext.Provider
        value={{
          searchValue,
          setSearchValue,
        }}
      >
        <Header />
        <Routes>
          {isAuthUser && authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
        <Footer />
      </searchContext.Provider>
    </div>
  );
};

export default App;
