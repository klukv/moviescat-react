import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ActualFilms, NewFilms } from "./index";

const TRANSLATE_WIDTH = 500;
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

      return Math.max(newTranslate, -700);
    });
  };

  return (
    <div className="slider">
      <div className="slider__inner">
        <div className="arrow__div arrowLeft " onClick={handleLeftArrow}>
          <FaChevronLeft className="arrow" />
        </div>
        {activeFilms ? (
          <NewFilms translate={translate} />
        ) : (
          <ActualFilms translate={translate} />
        )}
        <div className="arrow__div arrowRight" onClick={handleRightArrow}>
          <FaChevronRight className="arrow" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
