import React, { useEffect, useRef, useState } from "react";

type menuClick = MouseEvent & {
  path: Node[];
};
const SortPopupGenre: React.FC = () => {
  const refGenreMenu = useRef<HTMLDivElement>(null);
  const [menuGenreActive, setMenuGenreActive] = useState(false);
  useEffect(() => {
    const handleClickMenu = (event: MouseEvent) => {
      const _event = event as menuClick;
      if (refGenreMenu.current && !_event.path.includes(refGenreMenu.current)) {
        setMenuGenreActive(false);
      }
    };

    document.body.addEventListener("click", handleClickMenu);

    return () => document.body.removeEventListener("click", handleClickMenu);
  }, []);
  return (
    <div className="movies__genre" ref={refGenreMenu}>
      <a
        href="#1"
        className="movies__genre-btn sort"
        onClick={() => setMenuGenreActive(!menuGenreActive)}
      >
        Жанр
      </a>
      <div className="sort__popup">
        {menuGenreActive && (
          <ul className="movies__list">
            <li className="movies__list-link">
              <span>Комедия</span>
            </li>
            <li className="movies__list-link">
              <span>Драма</span>
            </li>
            <li className="movies__list-link">
              <span>Боевик</span>
            </li>
            <li className="movies__list-link">
              <span>Триллер</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortPopupGenre;
