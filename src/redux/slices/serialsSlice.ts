import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { serialType } from "../../types/serialsType";



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
    addSerials: (state, action: PayloadAction<serialType[]>) => {
      state.serials = action.payload;
    },
    setLoadedSerials: (state, action:PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setStateFSerials: (state, action:PayloadAction<boolean>) => {
      state.isAddedFSerial = action.payload;
    },
    addFavouriteSerials: (state, action:PayloadAction<serialType[]>) => {
      state.favouriteSerials = action.payload;
    },
    addRecentlySerials: (state, action:PayloadAction<serialType>) => {
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
