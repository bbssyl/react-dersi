import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slicer/todoReducer";
import themeReducer from "../slicer/themeReducer";
import postReducer from "../slicer/postsReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    posts: postReducer,
  },
});

export default store;
