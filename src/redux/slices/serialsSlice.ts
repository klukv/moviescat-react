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
  recentlySerials: serialType[];
  favouriteSerials: serialType[];
  sliderPopularSerials: serialType[];
  sliderActualSerials: serialType[];
  isLoaded: boolean;
  isAddedFSerial: boolean;
}

const initialState: serialsState = {
  serials: [],
  recentlySerials: [],
  favouriteSerials: [],
  sliderPopularSerials: [],
  sliderActualSerials: [],
  isLoaded: false,
  isAddedFSerial: true,
};
const findId = (arrayMovie: serialType[], serialId: number) => {
  return arrayMovie.find((elem) => elem.id === serialId) !== undefined
    ? true
    : false;
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
    setStateFSerials: (state, action) => {
      state.isAddedFSerial = action.payload;
    },
    addFavouriteSerials: (state, action) => {
      state.favouriteSerials = action.payload;
    },
    addRecentlySerials: (state, action) => {
      if (findId(state.recentlySerials, action.payload.id)) {
        return state;
      } else {
        state.recentlySerials.unshift(action.payload);
        if (state.recentlySerials.length > 5) {
          state.recentlySerials.pop();
        }
      }
    },
  },
});

export const {
  addSerials,
  setLoadedSerials,
  setStateFSerials,
  addFavouriteSerials,
  addRecentlySerials,
} = serialsSlice.actions;

export default serialsSlice.reducer;
