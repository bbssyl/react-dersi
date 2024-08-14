import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  economyNews: [
    {
      id: 1,
      title: "Enflasyon düşecek",
    },
    {
      id: 2,
      title: "Ekonomi iyiye gidiyor.",
    },
  ],
  worldNews: [
    {
      id: 1,
      title: "Trump bu sene seçimi kazanacak mı?",
    },
  ],
};

export const newReducer = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export const {} = newReducer.actions;

export default newReducer.reducer;
