import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-center text-black bg-error rounded">
      <a className="normal-case text-xl">Auth Firebase Context</a>
      <div className="ms-auto gap-3">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
