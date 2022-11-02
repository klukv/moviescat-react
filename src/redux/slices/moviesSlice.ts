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
}

const initialState: moviesState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addFilms: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addFilms } = moviesSlice.actions;

export default moviesSlice.reducer;
