import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Header from "./components/header";
import { publicRoutes } from "./routes";

function App() {
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
}

export default App;
