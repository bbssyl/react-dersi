import React from "react";
import styles from "./Todo.module.css";
const Todo = (props) => {
  const { title, isDone } = props;
  return (
    <div>
      <span className={isDone ? styles["done"] : null}>{title}</span>
      <span>X</span>
    </div>
  );
};

export default Todo;
