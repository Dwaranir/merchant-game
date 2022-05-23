import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="start--and__settings" onClick={() => test()}>
      <form action="submit"></form>
      <Link className="menu--item" to="/">
        В главное меню
      </Link>
    </div>
  );
};

export default Settings;
