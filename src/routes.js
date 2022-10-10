import { home, movies, personAcc } from "./const/const";

import Home from "./pages/home";
import Movies from "./pages/movies";
import PersonalAccount from "./pages/personalAC";

export const publicRoutes = [
  {
      path: home,
      Component: Home
  },
  {
      path: movies,
      Component: Movies
  },
  {
      path: personAcc,
      Component: PersonalAccount
  }
];
