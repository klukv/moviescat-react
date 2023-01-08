import { login, signup } from "../const/const";
import { $host } from "./authService";

export const signin = async (username: string, password: string) => {
  const { data } = await $host.post("/api/auth" + login, {
    username,
    password,
  });
  localStorage.setItem("token", data.token);
  return data;
};

export const register = async (
  username: string,
  email: string,
  password: string,
  roles: string[]
) => {
  const { data } = await $host.post("/api/auth" + signup, {
    username,
    email,
    password,
    roles,
  });
  return data;
};

