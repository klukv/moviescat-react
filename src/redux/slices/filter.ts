import { createSlice } from "@reduxjs/toolkit";

export interface filterState {
  actualMovies: {
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
  }[];
  popularFilms: {
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
  }[];
}

const initialState: filterState = {
  actualMovies: [],
  popularFilms: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;
