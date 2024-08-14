import React, { useState } from "react";
import styles from "./deneme.module.css";

const Deneme = ({ handleIncrement, bool }) => {
  return <>{bool ? <button onClick={handleIncrement}>Tıkla</button> : null}</>;
};

export default Deneme;
