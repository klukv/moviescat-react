import { API_URL, login, signup } from "../const/const";
import { $authHost, $host } from "./authService";


export const signin = async (username: string, password: string) => {
  const { data } = await $host.post(API_URL + "/api/auth" + login, {
    username,
    password,
  });
  localStorage.setItem("token", data.token);
  return data;
};

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const { data } = await $host.post(API_URL + "/api/auth" + signup, {
    username,
    email,
    password,
  });
  return data;
};

export const getAllFilms = async () => {
  const { data } = await $authHost.get(API_URL + "api/movies/all");
  return null;
};
