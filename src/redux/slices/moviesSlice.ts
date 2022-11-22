import { createSlice } from "@reduxjs/toolkit";

export interface moviesState {
  movies: {
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
  }[];
  isLoaded: boolean;
}

const initialState: moviesState = {
  movies: [],
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
  },
});

export const { addFilms, setLoaded } = moviesSlice.actions;

export default moviesSlice.reducer;
