import React from "react";
import { Link } from "react-router-dom";

const MenuBtn = ({ content, way }) => {
  return (
    <Link className="menu--item" to={way}>
      <div>{content}</div>
    </Link>
  );
};

export default MenuBtn;
