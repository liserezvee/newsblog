import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero-content text-center flex-col w-full">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-6">
          Don't Have an Account!!!
          <Link to="/register" className="text-blue-500 ml-3">
            Register!!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;