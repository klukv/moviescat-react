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
  useEffect(() => {
    axios
      .get("http://localhost:3001/films")
      .then(({ data }) => dispatch(addFilms(data)));
  }, []);

  return (
    <div>
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
