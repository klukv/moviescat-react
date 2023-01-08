export const home = "/";
export const movies = "/movies";
export const personAcc = "/person";
export const oneMovie = "/movie";
export const serials = "/serials";
export const oneSerial = "/serial";
export const login = "/login";
export const signup = "/registration";
export const API_URL = "http://localhost:8080";

export const sortItemsGenre = [
  { genre: "Все", type: "default", order: "asc" },
  { genre: "комедия", type: "comedy", order: "desc" },
  { genre: "драма", type: "drama", order: "desc" },
  { genre: "боевик", type: "action_movie", order: "desc" },
  { genre: "триллер", type: "thriller", order: "desc" },
];
export const sortItemsOther = [
  { name: "По умолчанию", typeParams: "default", order: "asc" },
  { name: "По дате выхода", typeParams: "year", order: "desc" },
  { name: "По рейтингу", typeParams: "rating", order: "desc" },
  { name: "По названию", typeParams: "title", order: "desc" },
];
