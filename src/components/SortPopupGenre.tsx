import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setGenreSort } from "../redux/slices/filter";

type menuClick = MouseEvent & {
  path: Node[];
};
interface genreType {
  items: {
    genre: string;
    type: string;
    order: string;
  }[];
  activeObj: {
    genre: string;
    type: string;
    order: string;
  };
}
const SortPopupGenre: React.FC<genreType> = ({ items, activeObj }) => {
  const dispatch = useDispatch();
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

  const onClickSortItem = (type: string, genre: string, order: string) => {
    dispatch(setGenreSort({ type, genre, order }));
    setMenuGenreActive(false);
  };

  return (
    <div className="movies__genre" ref={refGenreMenu}>
      <a
        href="#1"
        className="movies__genre-btn sort"
        onClick={() => setMenuGenreActive(!menuGenreActive)}
      >
        {activeObj.genre}
      </a>
      <div className="sort__popup">
        {menuGenreActive && (
          <ul className="movies__list">
            {items.map((obj, index) => (
              <li key={`key__${index}Genre`} className="movies__list-link">
                <span
                  onClick={() =>
                    onClickSortItem(obj.type, obj.genre, obj.order)
                  }
                >
                  {obj.genre}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortPopupGenre;
