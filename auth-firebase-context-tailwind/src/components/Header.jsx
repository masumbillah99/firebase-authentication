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
    <nav className="bg-blue-400">
      <div className="container mx-auto">
        <div className="navbar flex-col md:flex-row text-primary-content rounded">
          <a className="normal-case text-black text-2xl">
            Auth Firebase Context
          </a>
          <div className="flex-col md:flex-row gap-2 text-black text-xl md:ms-auto md:space-x-3 my-3 md:my-0">
            <Link className="hover:text-white" to="/">
              Home
            </Link>
            <Link className="hover:text-white" to="/login">
              Login
            </Link>
            <Link className="hover:text-white" to="/register">
              Register
            </Link>
            {user && (
              <Link className="hover:text-white" to="/orders">
                Orders
              </Link>
            )}
            {user ? (
              <>
                <span className="text-white">{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-xs">
                  Sign out
                </button>
              </>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
