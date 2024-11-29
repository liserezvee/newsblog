import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    //create user
    createUser(email, password).then((result) => {
      console.log(result.user);
    }).catch(error =>{
        console.log(error);
    })
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero-content text-center flex-col w-full">
        <h1 className="text-5xl font-bold">Register Here!</h1>
        <form onSubmit={handleSignUp} className="md:w-3/4 lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="photo"
              className="input input-bordered"
              required
              name="photo"
            />
          </div>
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
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="text-center mt-5">
          Already Have an Account!!!
          <Link to="/login" className="text-blue-500 ml-3">
            Sign In!!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
