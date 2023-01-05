import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { saveUser, setIsAuth } from "../redux/slices/user";
import { signin } from "../services/userService";
import "../scss/loginORsignup.scss";

interface State {
  username: string;
  password: string;
  loading: boolean;
  message: string;
}

const initialValues = {
  username: "",
  password: "",
  loading: false,
  message: "",
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = React.useState<State>(initialValues);

  const handleLogin =  (formValue: {
    username: string;
    password: string;
  }) => {
    const { username, password } = formValue;

    setUserAuth((prevState) => {
      return {
        ...prevState,
        message: "",
        loading: true,
      };
    });
     signin(username, password).then(
      (data) => {
        if (data.token) {
          dispatch(
            saveUser({
              id: data.id,
              username: data.username,
              email: data.email,
              roles: data.roles,
            })
          );
          dispatch(setIsAuth(true));
        }
        navigate("/");
        console.log(data);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setUserAuth((prevState) => {
          return {
            ...prevState,
            loading: false,
            message: resMessage,
          };
        });
      }
    );
  };

  return (
    <div className="main login">
      <div className="col-md-12">
        <div className="card card-container login__container">
          <Formik
            initialValues={initialValues}
            onSubmit={handleLogin}
          >
            <Form className="login__form">
              <h1 className="login__title">Авторизация</h1>
              <div className="form-group group">
                <Field
                  name="username"
                  type="text"
                  className="form-control login__values"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label
                  className="login__name"
                >
                  Имя пользователя
                </label>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group group">
                <Field
                  name="password"
                  type="password"
                  className="form-control login__values"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="login__name">Пароль</label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={userAuth.loading}
                >
                  {userAuth.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Войти</span>
                </button>
              </div>

              {userAuth.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {userAuth.message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
