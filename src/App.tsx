import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { addFilms, setLoaded } from "./redux/slices/moviesSlice";
import { RootState } from "./redux/store";
import { publicRoutes } from "./routes";

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
  const [searchValue, setSearchValue] = React.useState("");
  const { genre, type } = useSelector(
    (state: RootState) => state.filterSlice.genreSort
  );
  const { typeParams, order } = useSelector(
    (state: RootState) => state.filterSlice.otherParams
  );
  const genreURL = type !== "default" ? `&genre=${genre}` : "";
  const searchMovies = searchValue ? `&title=${searchValue}` : "";

  useEffect(() => {
    dispatch(setLoaded(false));
    axios
      .get(
        `https://6373a0410bb6b698b6116d57.mockapi.io/items?sortby=${typeParams}&order=${order}${genreURL}${searchMovies}`
      )
      .then(({ data }) => {
        dispatch(addFilms(data));
        dispatch(setLoaded(true));
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
