import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import { publicRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
