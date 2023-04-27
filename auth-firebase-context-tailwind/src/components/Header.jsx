import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="navbar bg-info text-primary-content rounded">
      <div className="container mx-auto">
        <a className="normal-case text-black text-2xl">Auth Firebase Context</a>
        <div className="ms-auto text-black text-xl space-x-3">
          <Link className="hover:text-blue-600" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-600" to="/login">
            Login
          </Link>
          <Link className="hover:text-blue-600" to="/register">
            Register
          </Link>
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogOut} className="btn btn-xs">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
