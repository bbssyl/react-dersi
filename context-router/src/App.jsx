import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./routes/Router";
import { useTheme } from "./components/ThemeContext";
import Button from "./components/Button";

function App() {
  const { theme } = useTheme();
  return (
    <>
      {/* <Navbar />
      <Router /> */}
      <div className={`app ${theme}`}>
        <Button />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          accusantium.
        </span>
      </div>
    </>
  );
}

export default App;
