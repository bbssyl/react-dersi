import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/news/economy">Economy</NavLink>
      </li>
      <li>
        <NavLink to="/news/sport">Sport</NavLink>
      </li>
      <li>
        <NavLink to="/news/sport/123">Parameter Sport New</NavLink>
      </li>
      <li>
        <NavLink to="/news/economy/financial">Financial</NavLink>
      </li>
      <li>
        <NavLink to="/news/economy/financial/worldnews">
          World Financial
        </NavLink>
      </li>
      <li>
        <NavLink to="/news/economy/financial/turkiyenews">
          Turkey Financial
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
