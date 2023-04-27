import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-contentflex-col lg:flex-row-reverse">
          <div className="text-center text-black lg:text-left">
            <h1 className="text-3xl font-bold">Please Register</h1>
          </div>
          <div
            className="card flex-shrink-0
         w-full max-w-sm shadow-2xl"
          >
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover  text-black"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link to="/login" className="text-black text-center mb-3">
              If you registered. Please{" "}
              <button className="text-secondary"> Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
