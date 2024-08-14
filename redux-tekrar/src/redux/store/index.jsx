import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slicers/todoReducer";
import newReducer from "../slicers/newsReducers";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    newsStore: newReducer,
  },
});

export default store;
