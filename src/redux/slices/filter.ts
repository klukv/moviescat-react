import { createSlice } from "@reduxjs/toolkit";

export interface filterState {
  genreSort: {
    name: string;
    type: string;
    order: string;
  };
  otherParams: {
    name: string;
    type: string;
    order: string;
  };
}

const initialState: filterState = {
  genreSort: {
    name: "",
    type: "default",
    order: "",
  },
  otherParams: {
    name: "",
    type: "default",
    order: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenreSort: (state, action) => {
      state.genreSort = action.payload;
    },
    setOtherSort: (state, action) => {
      state.otherParams = action.payload;
    },
  },
});

export const { setGenreSort, setOtherSort } = filterSlice.actions;

export default filterSlice.reducer;
