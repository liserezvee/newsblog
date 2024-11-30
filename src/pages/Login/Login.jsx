import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (result) {
          Swal.fire({
            title: "Wow!",
            text: "Signed In Successful!",
            icon: "success",
          });
        }
        //navigate user after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
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
