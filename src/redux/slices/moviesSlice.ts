import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieType } from "../../types/movieType";

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
  isAddedFMovie: true,
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
    addFilms: (state, action: PayloadAction<movieType[]>) => {
      state.movies = action.payload;
    },
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setStateFMovies: (state, action: PayloadAction<boolean>) => {
      state.isAddedFMovie = action.payload;
    },
    addRecentlyMovies: (state, action: PayloadAction<movieType>) => {
      if (findId(state.recentlyMovies, action.payload.id)) {
        return state;
      } else {
        state.recentlyMovies.unshift(action.payload);
        if (state.recentlyMovies.length > 5) {
          state.recentlyMovies.pop();
        }
      }
    },
    addFavouriteMovies: (state, action: PayloadAction<movieType[]>) => {
      state.favouriteMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<movieType[]>) => {
      state.sliderPopularMovies = action.payload;
    },
    addActualMovies: (state, action: PayloadAction<movieType[]>) => {
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
