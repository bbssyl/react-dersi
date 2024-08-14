import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
};

export const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { getTheme, setTheme } = themeReducer.actions;
export default themeReducer.reducer;
