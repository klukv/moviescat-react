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
  sliderPopularMovies: movieType[];
  sliderActualMovies: movieType[];
  favouriteMovies: movieType[];
  isLoaded: boolean;
  isAddedFMovie: boolean;
}

const initialState: moviesState = {
  movies: [],
  recentlyMovies: [],
  favouriteMovies: [],
  sliderPopularMovies: [],
  sliderActualMovies: [],
  isLoaded: false,
  isAddedFMovie: true
};

const findId = (arrayMovie: movieType[], movieId: number) => {
  return arrayMovie.find((elem) => elem.id === movieId) !== undefined
    ? true
    : false;
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
    setStateFMovies: (state, action) => {
      state.isAddedFMovie = action.payload;
    },
    addRecentlyMovies: (state, action) => {
      if (findId(state.recentlyMovies, action.payload.id)) {
        return state;
      } else {
        state.recentlyMovies.unshift(action.payload);
        if (state.recentlyMovies.length > 5) {
          state.recentlyMovies.pop();
        }
      }
    },
    addFavouriteMovies: (state, action) => {
      state.favouriteMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.sliderPopularMovies = action.payload;
    },
    addActualMovies: (state, action) => {
      state.sliderActualMovies = action.payload;
    },
  },
});

export const {
  addFilms,
  setLoaded,
  setStateFMovies,
  addRecentlyMovies,
  addFavouriteMovies,
  addPopularMovies,
  addActualMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
