import { createSlice } from "@reduxjs/toolkit";

type serialType = {
  id: number;
  title: string;
  description: string;
  year: number;
  country: string;
  genre: string;
  director: string;
  time: number;
  imgUrl: string;
  type: string;
};

export interface serialsState {
  serials: serialType[];
  isLoaded: boolean;
}

const initialState: serialsState = {
  serials: [],
  isLoaded: false,
};

export const serialsSlice = createSlice({
  name: "serials",
  initialState,
  reducers: {
    addSerials: (state, action) => {
      state.serials = action.payload;
    },
    setLoadedSerials: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

export const { addSerials, setLoadedSerials } = serialsSlice.actions;

export default serialsSlice.reducer;
