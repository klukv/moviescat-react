import React from "react";
import { Slider } from "../components/Slider";
const hobbitIMG = require("../assets/img/newFilms/hobbit.jpg");
const jumanjiIMG = require("../assets/img/newFilms/jumanji.jpg");
const hollywoodIMG = require("../assets/img/newFilms/hollywood.jpg");
const avatarIMG = require("../assets/img/newFilms/avatar.jpg");
const inseptionIMG = require("../assets/img/newFilms/inseption.jpg");

const ActualFilms = () => {
  return (
    <Slider>
      <a href="#1" className="compilation__slider_block">
        <img src={hobbitIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jumanjiIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={hollywoodIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={avatarIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={inseptionIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={hobbitIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jumanjiIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={hollywoodIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={avatarIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={inseptionIMG} alt="movie" className="compilation__movie" />
      </a>
    </Slider>
  );
};

export default ActualFilms;
