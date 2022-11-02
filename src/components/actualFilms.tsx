import React from "react";
import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";
import { RootState } from "../redux/store";
import MoviesComponent from "./MoviesComponent";
const hobbitIMG = require("../assets/img/newFilms/hobbit.jpg");
const jumanjiIMG = require("../assets/img/newFilms/jumanji.jpg");
const hollywoodIMG = require("../assets/img/newFilms/hollywood.jpg");
const avatarIMG = require("../assets/img/newFilms/avatar.jpg");
const inseptionIMG = require("../assets/img/newFilms/inseption.jpg");
const moneyballIMG = require("../assets/img/banner/moneyball.jpg");
const PiratesIMG = require("../assets/img/banner/Pirates.jpg");
const BabyDriverIMG = require("../assets/img/banner/BabyDriver.jpg");
const CrewIMG = require("../assets/img/banner/Crew.jpg");
const NightMuseumIMG = require("../assets/img/banner/NightMuseum.jpg");

const ActualFilms: React.FC = () => {
  const arrayMovies = useSelector(
    (state: RootState) => state.moviesSlice.movies
  ).filter((movie) => {
    return movie.type === "actual";
  });

  return (
    <Slider>
      {arrayMovies.map((movie, index) => (
        <MoviesComponent key={`index__${index}`} {...movie} />
      ))}
      {/* <a href="#1" className="compilation__slider_block">
        <img src={hollywoodIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={BabyDriverIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={hobbitIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={avatarIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={NightMuseumIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={moneyballIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={PiratesIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={jumanjiIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={CrewIMG} alt="movie" className="compilation__movie" />
      </a>
      <a href="#1" className="compilation__slider_block">
        <img src={inseptionIMG} alt="movie" className="compilation__movie" />
      </a> */}
    </Slider>
  );
};

export default ActualFilms;
