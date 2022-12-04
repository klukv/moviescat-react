import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import "../scss/movies.scss";
import {
  SortPopupDate,
  SortPopupGenre,
  MovieLoadingComponent,
  MovieComponent,
  usePagination,
} from "../components";
import Pagination from "../components/Pagination";

const sortItemsGenre = [
  { genre: "Все", type: "default", order: "asc" },
  { genre: "Комедия", type: "comedy", order: "desc" },
  { genre: "Драма", type: "drama", order: "desc" },
  { genre: "Боевик", type: "action_serial", order: "desc" },
  { genre: "Триллер", type: "thriller", order: "desc" },
];
const sortItemsOther = [
  { name: "По умолчанию", typeParams: "default", order: "asc" },
  { name: "По дате добавления", typeParams: "date_added", order: "desc" },
  { name: "По дате выхода", typeParams: "year", order: "desc" },
  { name: "По рейтингу", typeParams: "rating", order: "desc" },
  { name: "По названию", typeParams: "title", order: "desc" },
];

const Serials: React.FC = () => {
  const serialsArray = useSelector(
    (state: RootState) => state.serialsSlice.serials
  );
  const isLoaded = useSelector(
    (state: RootState) => state.serialsSlice.isLoaded
  );
  const activeLabel = useSelector((state: RootState) => state.filterSlice);

  const paginateserials = usePagination({
    contentPerPage: 5,
    count: serialsArray.length,
  });

  return (
    <div className="main">
      <main>
        <section className="movies">
          <div className="container">
            <SortPopupDate
              items={sortItemsOther}
              activeObj={activeLabel.otherParams}
            />
            <SortPopupGenre
              items={sortItemsGenre}
              activeObj={activeLabel.genreSort}
            />
            <div className="movies__row">
              {serialsArray.length < 5
                ? serialsArray.map((serial, index) => (
                    <MovieComponent key={`index=${index}`} {...serial} />
                  ))
                : isLoaded
                ? serialsArray
                    .slice(
                      paginateserials.firstContentIndex,
                      paginateserials.lastContentIndex
                    )
                    .map((serials, index) => (
                      <MovieComponent key={`index=${index}`} {...serials} />
                    ))
                : [...new Array(5)].map((_, index) => (
                    <MovieLoadingComponent key={`indexLoading=${index}`} />
                  ))}
            </div>
            {serialsArray.length > 5 ? <Pagination {...paginateserials} /> : ""}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Serials;
