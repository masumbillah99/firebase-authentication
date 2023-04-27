import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./providers/AuthProviders";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // handle google sign in button
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-contentflex-col lg:flex-row-reverse">
        <div className="text-center text-black lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div
          className="card flex-shrink-0
         w-full max-w-sm shadow-2xl"
        >
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-black"
                required
              />
              <label className="label mt-3">
                <a
                  href="#"
                  className="label-text-alt link link-hover  text-black"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Login</button>
            </div>
          </form>
          <Link to="/register" className="text-black text-center mb-3">
            New to Auth Master.{" "}
            <button className="text-secondary">Register</button>
          </Link>
          <div className="text-black mb-3 ms-3">
            <span>Sign in with</span>
            <span onClick={handleGoogleSignIn} className="cursor-pointer text-info text-xl ms-2">
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
