import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  filteredPost: [],
  post: {},
};

export const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
    getByIdPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { addPosts } = postReducer.actions;
export default postReducer.reducer;
