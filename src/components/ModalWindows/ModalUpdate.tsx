import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Idata } from "../../pages/oneMovie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IMovie } from "../../pages/home";
import { putFilm } from "../../services/contentService";
import { setStateFMovies } from "../../redux/slices/moviesSlice";

interface IModalUpdate {
  isOpen: boolean;
  toggle: () => void;
}

const initialValues = {
  titleMovie: "",
  nameValue: "",
  editValue: "",
};

export const initialData = {
  message: "",
  success: false,
};

const ModalUpdate: React.FC<IModalUpdate> = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const [dataMessage, setDataMessage] = React.useState<Idata>(initialData);
  const { arrayMovies } = useSelector(({ moviesSlice }: RootState) => {
    return {
      arrayMovies: moviesSlice.movies,
    };
  });
  const findKey = (
    selectMovie: IMovie,
    selectValue: string,
    changeValue: string
  ): IMovie => {
    const changeValueArray = Object.entries(selectMovie).map(
      (keyValue: [key: string, value: string | number]) => {
        return keyValue[0] === selectValue
          ? [keyValue[0], (keyValue[1] = changeValue)]
          : keyValue;
      }
    );
    return Object.fromEntries(changeValueArray);
  };

  const handleEditMovie = (formValue: {
    titleMovie: string;
    nameValue: string;
    editValue: string;
  }) => {
    const { titleMovie, nameValue, editValue } = formValue;
    const editMovie = arrayMovies.find((movie) => {
      return movie.title === titleMovie;
    });
    if (editMovie) {
      const changeMovie = findKey(editMovie, nameValue, editValue);
      putFilm(changeMovie).then(
        (data) =>
          setDataMessage((prevState) => {
            return {
              ...prevState,
              message: data.message,
              success: true,
            };
          }),
        ({ response }) => {
          const resMessage =
            (response && response.data && response.data.message) ||
            response.message ||
            response.toString();

          setDataMessage((prevState) => {
            return {
              ...prevState,
              message: resMessage,
              success: false,
            };
          });
        }
      );
      dispatch(setStateFMovies(true));
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <Formik initialValues={initialValues} onSubmit={handleEditMovie}>
            <Form className="modal-form" onClick={(e) => e.stopPropagation()}>
              {!dataMessage.success && (
                <>
                  <div className="modal-group">
                    <Field
                      name="titleMovie"
                      type="text"
                      className="modal-input"
                      required
                    />
                    <label className="modal-label">???????????????? ????????????</label>
                    <ErrorMessage
                      name="titleMovie"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="modal-group">
                    <Field
                      name="nameValue"
                      type="text"
                      className="modal-input"
                      as="select"
                      required
                    >
                      <option value="default">???????????????? ??????????</option>
                      <option value="title">???????????????? ????????????</option>
                      <option value="description">???????????????? ????????????</option>
                      <option value="year">?????? ????????????????</option>
                      <option value="country">????????????</option>
                      <option value="genre">????????</option>
                      <option value="director">????????????????</option>
                      <option value="time">??????????</option>
                      <option value="budget">????????????</option>
                      <option value="imgUrl">???????????? ???? ????????????</option>
                      <option value="type">?????? ????????????</option>
                    </Field>
                  </div>
                  <div className="modal-group">
                    <Field
                      name="editValue"
                      type="text"
                      className="modal-input"
                      required
                    />
                    <label className="modal-label">?????????????? ??????????????????</label>
                    <ErrorMessage
                      name="editValue"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="modal-group">
                    <button
                      type="submit"
                      className="admin__btn btn-primary btn-block"
                    >
                      <span>????????????????</span>
                    </button>
                  </div>
                </>
              )}

              {dataMessage.message && (
                <div className="modal-group">
                  <div
                    className={
                      dataMessage.success
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {dataMessage.message}
                  </div>
                  {dataMessage.success && (
                    <button className="btn_success admin__btn" onClick={toggle}>
                      ??????????????
                    </button>
                  )}
                </div>
              )}
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default ModalUpdate;
