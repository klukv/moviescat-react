import { $authHost } from "./authService";

export const getAllFilms = async (
    sort: string,
    genre: string,
    search: string
  ) => {
    const { data } = await $authHost.get(`/api/user/movies?${sort}${genre}`);
    return data;
  };
  
  export const getFilmsByType = async (type: string) => {
    const { data } = await $authHost.get(`/api/user/type-movies?type=${type}`);
    return data;
  };
  
  export const getAllSerials = async (
    sort: string,
    genre: string,
    search: string
  ) => {
    const { data } = await $authHost.get(`/api/user/serials?${sort}${genre}`);
    return data;
  };