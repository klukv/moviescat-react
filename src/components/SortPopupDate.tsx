import React, { useEffect, useRef, useState } from "react";

type menuClick = MouseEvent & {
  path: Node[];
};
const SortPopupDate: React.FC = () => {
  const refDateMenu = useRef<HTMLDivElement>(null);
  const [menuDateActive, setMenuDateActive] = useState(false);
  useEffect(() => {
    const handleClickMenu = (event: MouseEvent) => {
      const _event = event as menuClick;
      if (refDateMenu.current && !_event.path.includes(refDateMenu.current)) {
        setMenuDateActive(false);
      }
    };

    document.body.addEventListener("click", handleClickMenu);

    return () => document.body.removeEventListener("click", handleClickMenu);
  }, []);
  return (
    <div className="movies__date" ref={refDateMenu}>
      <a
        href="#1"
        className="movies__date-btn sort"
        onClick={() => setMenuDateActive(!menuDateActive)}
      >
        По дате добавления
      </a>
      <div className="sort__popup date-menu">
        {menuDateActive && (
          <ul className="movies__list">
            <li className="movies__list-link">
              <span>По дате добавления</span>
            </li>
            <li className="movies__list-link">
              <span>По дате выхода</span>
            </li>
            <li className="movies__list-link">
              <span>По рейтингу</span>
            </li>
            <li className="movies__list-link">
              <span>По названию</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortPopupDate;
