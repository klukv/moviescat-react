import {
  home,
  movies,
  oneMovie,
  oneSerial,
  personAcc,
  serials,
} from "./const/const";

import Home from "./pages/home";
import Movies from "./pages/movies";
import OneMovie from "./pages/oneMovie";
import OneSerial from "./pages/oneSerial";
import PersonalAccount from "./pages/personalAC";
import Serials from "./pages/serials";

export const publicRoutes = [
  {
    path: home,
    Component: Home,
  },
  {
    path: movies,
    Component: Movies,
  },
  {
    path: personAcc,
    Component: PersonalAccount,
  },
  {
    path: serials,
    Component: Serials,
  },
  {
    path: oneMovie + "/:id",
    Component: OneMovie,
  },
  {
    path: oneSerial + "/:id",
    Component: OneSerial,
  },
];
