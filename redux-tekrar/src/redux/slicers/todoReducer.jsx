import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      isDone: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isDone: true,
    },
  ],
  filteredTodo: {},
};

export const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      const getTodo = state.todos.find((todo) => todo.id === action.payload);
      state.todos = state.todos.map((todo) =>
        todo.id === getTodo.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    filterTodo: (state, action) => {
      state.filteredTodo = action.payload;
    },
  },
});

export const { updateTodo, removeTodo, filterTodo } = todoReducer.actions;
export default todoReducer.reducer;
