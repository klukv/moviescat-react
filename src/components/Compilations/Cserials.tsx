import React from "react";
import { useSelector } from "react-redux";
import { MovieComponent, usePagination } from "..";
import { RootState } from "../../redux/store";
import { serialType } from "../../types/serialsType";
import EmptySlider from "../EmptySlider";
import Pagination from "../Pagination";

const Cserials: React.FC = () => {
  const { favouriteSerials } = useSelector(({ serialsSlice }: RootState) => {
    return {
      favouriteSerials: serialsSlice.favouriteSerials,
    };
  });
  const paginateFavouriteSerials = usePagination({
    count: favouriteSerials.length,
    contentPerPage: 5,
  });
  return (
    <>
      <div className="person__compilation-slider">
        {favouriteSerials.length !== 0 ? (
          favouriteSerials
            .slice(
              paginateFavouriteSerials.firstContentIndex,
              paginateFavouriteSerials.lastContentIndex
            )
            .map((serial: serialType, index: number) => (
              <MovieComponent key={`keyFavourite=${index}`} {...serial} />
            ))
        ) : (
          <EmptySlider />
        )}
      </div>
      {favouriteSerials.length > 5 ? (
        <Pagination {...paginateFavouriteSerials} />
      ) : (
        ""
      )}
    </>
  );
};

export default Cserials;
