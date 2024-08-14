import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterTodo,
  removeTodo,
  updateTodo,
} from "./redux/slicers/todoReducer";
import { useEffect } from "react";

function App() {
  const todoStore = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  // const reduxState = useSelector((state) => state.newsStore);

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };
  const handleFilterTodo = (todo) => {
    dispatch(filterTodo(todo));
  };

  return (
    <>
      <h1>REDUX TEKRAR</h1>

      {todoStore?.todos &&
        todoStore?.todos?.map((todo) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",
              }}
              key={todo.id}
            >
              <div
                style={todo.isDone ? { textDecoration: "line-through" } : null}
              >
                {todo.title}
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{ background: "red", color: "white" }}
              >
                Sil
              </button>
              <button
                onClick={() => handleUpdateTodo(todo.id)}
                style={{ background: "green", color: "white" }}
              >
                {todo.isDone ? "Tamamlanmadıya Çek" : "Tamamla"}
              </button>
              <button
                onClick={() => handleFilterTodo(todo)}
                style={{ background: "orange", color: "black" }}
              >
                Todo'ya git
              </button>
            </div>
          );
        })}

      {JSON.stringify(todoStore?.filteredTodo)}
    </>
  );
}

export default App;
