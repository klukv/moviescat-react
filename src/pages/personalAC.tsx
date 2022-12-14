import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, ErrorMessage } from "formik";
import { EmptySlider, MovieComponent, usePagination } from "../components";
import useModal from "../components/hooks/useModal";
import Modal from "../components/ModalWindows/Modal";
import Pagination from "../components/Pagination";
import {
  addFavouriteMovies,
  setStateFMovies,
} from "../redux/slices/moviesSlice";
import {
  addFavouriteSerials,
  setStateFSerials,
} from "../redux/slices/serialsSlice";
import { RootState } from "../redux/store";

import "../scss/personalAccount.scss";
import {
  getAllFavouriteMovies,
  getAllFavouriteSerial,
} from "../services/contentService";
import ModalUpdate from "../components/ModalWindows/ModalUpdate";
import ModalDelete from "../components/ModalWindows/ModalDelete";

const premiumRoles = ["ROLE_ADMIN", "ROLE_MODERATOR"];

const PersonalAC: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isOpen,
    toggle,
    isOpenUpdate,
    toggleUpdateModal,
    isOpenDelete,
    toggleDeleteModal,
  } = useModal();
  const { recentlyMovies, favouriteMovies, isAddedFMovie, isAddedFSerial } =
    useSelector(({ moviesSlice, serialsSlice }: RootState) => {
      return {
        recentlyMovies: moviesSlice.recentlyMovies,
        favouriteMovies: moviesSlice.favouriteMovies,
        isAddedFMovie: moviesSlice.isAddedFMovie,
        isAddedFSerial: serialsSlice.isAddedFSerial,
      };
    });
  const { user } = useSelector((state: RootState) => state.userSlice);
  const isAdmin: boolean = user.roles.includes("ROLE_ADMIN");
  const isAdminOrMod =
    user.roles.find((role) => {
      return premiumRoles.includes(role);
    }) !== undefined
      ? true
      : false;

  React.useEffect(() => {
    if (isAddedFMovie) {
      getAllFavouriteMovies(user.id).then((data) => {
        dispatch(addFavouriteMovies(data));
        dispatch(setStateFMovies(false));
      });
    }
    if (isAddedFSerial) {
      getAllFavouriteSerial(user.id).then((data) => {
        dispatch(addFavouriteSerials(data));
        dispatch(setStateFSerials(false));
      });
    }
  }, [isAddedFMovie, isAddedFSerial]);

  const paginateFavouriteMovies = usePagination({
    count: favouriteMovies.length,
    contentPerPage: 5,
  });

  return (
    <div className="main">
      <main>
        <div className="person">
          <div className="container">
            <div className="person__inner">
              <div className="person__row">
                <div className="person__block-img"></div>
                <div className="person__info">
                  <div className="person__info-name avatar__title">
                    {user.username}
                  </div>
                  <a href="#1" className="person__info-mail">
                    {user.email}
                  </a>
                  {isAdmin && (
                    <>
                      <button className="admin__btn" onClick={toggle}>
                        ???????????????? ??????????
                      </button>
                      <button
                        className="admin__btn mod__btn"
                        onClick={toggleDeleteModal}
                      >
                        <span>?????????????? ??????????</span>
                      </button>
                    </>
                  )}
                  {isAdminOrMod && (
                    <button
                      className="admin__btn mod__btn"
                      onClick={toggleUpdateModal}
                    >
                      <span>?????????????????????????? ??????????</span>
                    </button>
                  )}
                </div>
              </div>
              <div className="person__compilation">
                <h2 className="person__compilation-title avatar__title">
                  ??????????????
                </h2>
                <div className="person__compilation-slider">
                  {favouriteMovies.length !== 0 ? (
                    favouriteMovies
                      .slice(
                        paginateFavouriteMovies.firstContentIndex,
                        paginateFavouriteMovies.lastContentIndex
                      )
                      .map((movie, index) => (
                        <MovieComponent
                          key={`keyFavourite=${index}`}
                          {...movie}
                        />
                      ))
                  ) : (
                    <EmptySlider />
                  )}
                </div>
                {favouriteMovies.length > 5 ? (
                  <Pagination {...paginateFavouriteMovies} />
                ) : (
                  ""
                )}
              </div>
              <div className="person__watched">
                <h2 className="person__watched-title avatar__title">
                  ?????????????? ??????????????????????????
                </h2>
                <div className="person__watched-slider">
                  {recentlyMovies.length !== 0 ? (
                    recentlyMovies.map((movie, index) => (
                      <MovieComponent key={`keyRecently=${index}`} {...movie} />
                    ))
                  ) : (
                    <EmptySlider />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="modal-group">
          <Field name="title" type="text" className="modal-input" required />
          <label className="modal-label">???????????????? ????????????</label>
          <ErrorMessage
            name="title"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field
            name="description"
            type="text"
            className="modal-input"
            required
          />
          <label className="modal-label">???????????????? ????????????</label>
          <ErrorMessage
            name="description"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="year" type="text" className="modal-input" required />
          <label className="modal-label">?????? ????????????????</label>
          <ErrorMessage
            name="year"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="country" type="text" className="modal-input" required />
          <label className="modal-label">????????????</label>
          <ErrorMessage
            name="country"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="genre" type="text" className="modal-input" required />
          <label className="modal-label">????????</label>
          <ErrorMessage
            name="genre"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="director" type="text" className="modal-input" required />
          <label className="modal-label">????????????????</label>
          <ErrorMessage
            name="director"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="time" type="text" className="modal-input" required />
          <label className="modal-label">??????????</label>
          <ErrorMessage
            name="time"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="budget" type="text" className="modal-input" required />
          <label className="modal-label">????????????</label>
          <ErrorMessage
            name="budget"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="imgUrl" type="text" className="modal-input" required />
          <label className="modal-label">???????????? ???? ????????????</label>
          <ErrorMessage
            name="imgUrl"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <Field name="type" type="text" className="modal-input" required />
          <label className="modal-label">??????</label>
          <ErrorMessage
            name="type"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="modal-group">
          <button type="submit" className="admin__btn btn-primary btn-block">
            <span>????????????????</span>
          </button>
        </div>
      </Modal>
      <ModalUpdate isOpen={isOpenUpdate} toggle={toggleUpdateModal} />
      <ModalDelete isOpen={isOpenDelete} toggle={toggleDeleteModal} />
    </div>
  );
};

export default PersonalAC;
