import React from "react";
import { Slider } from "../components/Slider";
const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");

const NewFilms: React.FC = () => {
  return (
    <Slider>
      <a href="#1" className="compilation__slider_block">
        <img src={guardiansIMG} alt="movie" className="compilation__movie" />
      </a>

      <a href="#1" className="compilation__slider_block">
        <img src={blackIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={lostCityIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jwIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={thorIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={guardiansIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={blackIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={lostCityIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jwIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={thorIMG} alt="movie" className="compilation__movie" />
      </a>
    </Slider>
  );
};

export default NewFilms;
