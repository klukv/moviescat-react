import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ActualFilms from "./actualFilms";
import NewFilms from "./newFilms";

const TRANSLATE_WIDTH = 400;
interface movieType {
  activeFilms: boolean;
}
const Slider: React.FC<movieType> = ({ activeFilms }) => {
  const [translate, setTranslate] = useState(0);

  const handleLeftArrow = () => {
    setTranslate((currentTranslate) => {
      const newTranslate = currentTranslate + TRANSLATE_WIDTH;
      return Math.min(newTranslate, 0);
    });
  };

  const handleRightArrow = () => {
    setTranslate((currentTranslate) => {
      const newTranslate = currentTranslate - TRANSLATE_WIDTH;

      return Math.max(newTranslate, -550);
    });
  };

  return (
    <div className="slider">
      <div className="slider__inner">
        <FaChevronLeft className="arrowLeft arrow" onClick={handleLeftArrow} />
        {activeFilms ? (
          <NewFilms translate={translate} />
        ) : (
          <ActualFilms translate={translate} />
        )}
        <FaChevronRight
          className="arrowRight arrow"
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
};
export default Slider;