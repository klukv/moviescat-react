import serialsSlice from "./slices/serialsSlice";
import filterSlice from "./slices/filter";
import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";

export const store = configureStore({
  reducer: { moviesSlice, filterSlice, serialsSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
