import React from "react";
import { useTheme } from "./ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span>Aktif {theme}</span>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Tema Değiştir
      </button>
    </div>
  );
};

export default Button;
