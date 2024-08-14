import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux/slicer/todoReducer";
import { useEffect, useReducer } from "react";
import { getTheme, setTheme } from "./redux/slicer/themeReducer";
import { addPosts } from "./redux/slicer/postsReducer";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const theme = useSelector((state) => state.theme.theme);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const handlePushData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    dispatch(addPosts(await response.json()));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
  };

  const handleChangeTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log("theme", theme);
    console.log("posts", posts);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <button onClick={handleChangeTheme}>Tema Değiştir</button>
      <button onClick={handlePushData}>POST</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const todo = e.target.elements.todo.value;
          handleAddTodo({
            id: self.crypto.randomUUID(),
            title: todo,
            isDone: false,
          });
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos &&
          todos?.map((todo) => {
            return (
              <li key={todo?.id} className={todo?.isDone ? "done" : null}>
                <div>{todo?.title}</div>
                <div>
                  <button
                    style={{ background: "red" }}
                    onClick={() => handleDeleteTodo(todo)}
                  >
                    Done
                  </button>
                  <button
                    style={{ background: "green" }}
                    onClick={() => handleUpdateTodo(todo?.id)}
                  >
                    Done
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
