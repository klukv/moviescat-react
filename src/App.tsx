import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { addFilms } from "./redux/slices/moviesSlice";
import { publicRoutes } from "./routes";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/films")
      .then(({ data }) => dispatch(addFilms(data)));
  });

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
