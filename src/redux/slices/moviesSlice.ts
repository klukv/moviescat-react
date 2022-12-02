import { createSlice } from "@reduxjs/toolkit";

type movieType = {
  id: number;
  title: string;
  description: string;
  year: number;
  country: string;
  genre: string;
  director: string;
  time: number;
  budget: number;
  imgUrl: string;
  type: string;
};

export interface moviesState {
  movies: movieType[];
  recentlyMovies: movieType[];
  favouriteMovies: movieType[];
  isLoaded: boolean;
}

const initialState: moviesState = {
  movies: [],
  recentlyMovies: [],
  favouriteMovies: [],
  isLoaded: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFilms: (state, action) => {
      state.movies = action.payload;
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    addRecentlyMovies: (state, action) => {
      const idMovie = state.recentlyMovies.find(
        (elem) => elem.id === action.payload.id
      )
        ? true
        : false;

      if (idMovie) {
        return state;
      } else {
        state.recentlyMovies.unshift(action.payload);
        if (state.recentlyMovies.length > 5) {
          state.recentlyMovies.pop();
        }
      }
    },
    addFavouriteMovies: (state, action) => {
      const idMovie = state.favouriteMovies.find(
        (elem) => elem.id === action.payload.id
      )
        ? true
        : false;

      if (idMovie) {
        return state;
      } else {
        state.favouriteMovies.unshift(action.payload);
      }
    },
  },
});

export const { addFilms, setLoaded, addRecentlyMovies, addFavouriteMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
