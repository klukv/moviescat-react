import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setOtherSort } from "../redux/slices/filter";

type menuClick = MouseEvent & {
  path: Node[];
};
interface OtherParametrsType {
  items: {
    name: string;
    typeParams: string;
    order: string;
  }[];
  activeObj: {
    name: string;
    typeParams: string;
    order: string;
  };
}

const SortPopupDate: React.FC<OtherParametrsType> = ({ items, activeObj }) => {
  const dispatch = useDispatch();
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

  const onClickSortItem = (name: string, typeParams: string, order: string) => {
    dispatch(setOtherSort({ name, typeParams, order }));
    setMenuDateActive(false);
  };

  return (
    <div className="movies__date" ref={refDateMenu}>
      <a
        href="#1"
        className="movies__date-btn sort"
        onClick={() => setMenuDateActive(!menuDateActive)}
      >
        {activeObj.name}
      </a>
      <div className="sort__popup date-menu">
        {menuDateActive && (
          <ul className="movies__list">
            {items.map((obj, index) => (
              <li key={`key__${index}`} className="movies__list-link">
                <span
                  onClick={() =>
                    onClickSortItem(obj.name, obj.typeParams, obj.order)
                  }
                >
                  {obj.name}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortPopupDate;
