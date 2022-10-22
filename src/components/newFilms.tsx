import React from "react";
import { Slider } from "../components/Slider";
const guardiansIMG = require("../assets/img/banner/guardians.jpg");
const lostCityIMG = require("../assets/img/banner/lostCity.jpg");
const jwIMG = require("../assets/img/banner/JW.jpg");
const thorIMG = require("../assets/img/banner/Thor.jpg");
const blackIMG = require("../assets/img/banner/blackP.jpg");
const moneyballIMG = require("../assets/img/banner/moneyball.jpg");
const PiratesIMG = require("../assets/img/banner/Pirates.jpg");
const BabyDriverIMG = require("../assets/img/banner/BabyDriver.jpg");
const CrewIMG = require("../assets/img/banner/Crew.jpg");
const NightMuseumIMG = require("../assets/img/banner/NightMuseum.jpg");

const NewFilms: React.FC = () => {
  return (
    <Slider>
      <a href="#1" className="compilation__slider_block">
        <img src={lostCityIMG} alt="movie" className="compilation__movie" />
      </a>

      <a href="#1" className="compilation__slider_block">
        <img src={NightMuseumIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={guardiansIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jwIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={thorIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={blackIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={PiratesIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={BabyDriverIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={moneyballIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={CrewIMG} alt="movie" className="compilation__movie" />
      </a>
    </Slider>
  );
};

export default NewFilms;
