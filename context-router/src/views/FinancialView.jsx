import React from "react";
import { Outlet } from "react-router-dom";

const FinancialView = () => {
  return (
    <div>
      Layout FinancialView
      <Outlet />
    </div>
  );
};

export default FinancialView;
