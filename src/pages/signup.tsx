import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../services/userService";

interface State {
  username: string;
  email: string;
  password: string;
  successful: boolean;
  message: string;
}

const initialValues = {
  username: "",
  email: "",
  password: "",
  successful: false,
  message: "",
};

const Signup: React.FC = () => {
  const [user, setUser] = React.useState<State>(initialValues);

  const validationSchema = () => {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "Имя пользователя должно быть от 3 до 20 символов",
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("Неправильный email")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "len",
          "Пароль должен быть от 6 до 40 символов",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  };
  const handleRegister = async (formValue: {
    username: string;
    email: string;
    password: string;
  }) => {
    const { username, email, password } = formValue;

    setUser((prevState) => {
      return {
        ...prevState,
        message: "",
        successful: false,
      };
    });

    await register(username, email, password).then(
      (data) => {
        setUser((prevState) => {
          return {
            ...prevState,
            message: data.message,
            successful: true,
          };
        });
        console.log(data);
      },
      ({ response }) => {
        const resMessage =
          (response && response.data && response.data.message) ||
          response.message ||
          response.toString();
        console.log(response);

        setUser((prevState) => {
          return {
            ...prevState,
            message: resMessage,
            successful: true,
          };
        });
      }
    );
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!user.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
              </div>
            )}

            {user.message && (
              <div className="form-group">
                <div
                  className={
                    user.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {user.message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Signup;
