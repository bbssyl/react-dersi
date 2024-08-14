import React from "react";
import { Outlet } from "react-router-dom";

const SportView = () => {
  return (
    <div>
      SportView
      <Outlet />
    </div>
  );
};

export default SportView;
