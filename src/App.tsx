import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { addFilms } from "./redux/slices/moviesSlice";
import { RootState } from "./redux/store";
import { publicRoutes } from "./routes";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { genre, type } = useSelector(
    (state: RootState) => state.filterSlice.genreSort
  );

  useEffect(() => {
    if (type === "default") {
      axios
        .get(`https://6373a0410bb6b698b6116d57.mockapi.io/items`)
        .then(({ data }) => dispatch(addFilms(data)));
    } else {
      axios
        .get(`https://6373a0410bb6b698b6116d57.mockapi.io/items?genre=${genre}`)
        .then(({ data }) => dispatch(addFilms(data)));
    }
  }, [genre, type]);

  return (
    <div className="page">
      <Header />
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
