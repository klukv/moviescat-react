import React, { cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PAGE_WIDTH = 217;
const TRANSLATE_WIDTH = 534;

export const Slider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [pages, setPages] = useState<React.ReactNode>([]);
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

      return Math.max(newTranslate, -1180);
    });
  };

  useEffect(() => {
    setPages(
      React.Children.map(children, (child) => {
        return cloneElement(child as React.ReactElement<any>, {
          style: {
            height: "412px",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="slider">
      <div className="slider__inner">
        <FaChevronLeft className="arrowLeft arrow" onClick={handleLeftArrow} />
        <div
          className="compilation__slider"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          {pages}
        </div>
        <FaChevronRight
          className="arrowRight arrow"
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
};
