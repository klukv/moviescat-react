import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllFavouriteSerial } from "../../services/contentService";
import { serialType } from "../../types/serialsType";

export interface serialsState {
  serials: serialType[];
  recentlySerials: serialType[];
  favouriteSerials: serialType[];
  sliderPopularSerials: serialType[];
  sliderActualSerials: serialType[];
  isLoaded: boolean;
  error: string | null;
  isAddedFSerial: boolean;
}

const initialState: serialsState = {
  serials: [],
  recentlySerials: [],
  favouriteSerials: [],
  sliderPopularSerials: [],
  sliderActualSerials: [],
  isLoaded: false,
  error: null,
  isAddedFSerial: true,
};
const findId = (arrayMovie: serialType[], serialId: number) => {
  return arrayMovie.find((elem) => elem.id === serialId) !== undefined
    ? true
    : false;
};

export const fetchLikeSerials = createAsyncThunk<
  serialType[],
  number,
  { rejectValue: string }
>(
  "serials/fetchLikeSerials",
  async (user_id, { rejectWithValue }) => {
    const { data, status } = await getAllFavouriteSerial(user_id);
    if (status !== 200) {
      return rejectWithValue("Server Error!");
    }
    return data;
  }
);

export const serialsSlice = createSlice({
  name: "serials",
  initialState,
  reducers: {
    addSerials: (state, action: PayloadAction<serialType[]>) => {
      state.serials = action.payload;
    },
    setLoadedSerials: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload;
    },
    setStateFSerials: (state, action: PayloadAction<boolean>) => {
      state.isAddedFSerial = action.payload;
    },
    addFavouriteSerials: (state, action: PayloadAction<serialType[]>) => {
      state.favouriteSerials = action.payload;
    },
    // addRecentlySerials: (state, action: PayloadAction<serialType>) => {
    //   if (findId(state.recentlySerials, action.payload.id)) {
    //     return state;
    //   } else {
    //     state.recentlySerials.unshift(action.payload);
    //     if (state.recentlySerials.length > 5) {
    //       state.recentlySerials.pop();
    //     }
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikeSerials.pending, (state) => {
        if (state !== null && state !== undefined) {
          state.isAddedFSerial = false;
          state.error = null;
        }
      })
      .addCase(fetchLikeSerials.fulfilled, (state, action) => {
        if (state !== null && state !== undefined) {
          state.isAddedFSerial = false;
          state.favouriteSerials = action.payload;
        }
      })
      .addCase(fetchLikeSerials.rejected, (state, action) => {
        if (state !== null && state !== undefined) {
          state.isAddedFSerial = false;
          state.error = action.error?.message ?? null;
        }
      });
  },
});

export const {
  addSerials,
  setLoadedSerials,
  setStateFSerials,
  addFavouriteSerials,
} = serialsSlice.actions;

export default serialsSlice.reducer;
