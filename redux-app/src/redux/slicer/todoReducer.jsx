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
};

export const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload?.id
      );
      console.log("action.payload", action.payload.id);
    },
    updateTodo: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (existingTodo) {
        state.todos = state.todos.map((todo) =>
          todo.id === existingTodo.id ? { ...todo, isDone: !todo.isDone } : todo
        );
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoReducer.actions;
export default todoReducer.reducer;
