import "./App.css";
import FormikStructure from "./formik";
import { NavLink } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts REACT_QUERY</NavLink>
        </li>
        <li>
          <NavLink to="/postsNoneQuery">Posts NONE_REACT_QUERY</NavLink>
        </li>
      </ul>
      <Router />
      <h1>Formik ve React-Query</h1>
      {/* <FormikStructure /> */}
    </>
  );
}

export default App;
