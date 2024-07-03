import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);
  // redirecting to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Account creation successfully done!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
  }
  return (
    <div className="min-h-screen bg-cyan-gradient flex items-center justify-center">
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-gray-500 text-center">Sign Up!</h3>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#656565]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-white "
                // required
                {...register("email")}
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#656565]">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-white"
                // required
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* error text */}

            {/* Login button */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-Cyan border-none text-white shadow-lg"
              />
            </div>
            <p className="text-center my-2 text-[#656565]">
              Have an account?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="underline text-red ml-1"
              >
                Login
              </button>
            </p>

            <Link
              to="/"
              className="btn btn-sm btn-circle bg-[#F1F2F4] hover:bg-Cyan hover:border-Cyan text-gray-500 hover:text-white border-2 border-Cyan btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-Cyan hover:border-Cyan text-gray-500 hover:text-white border-2 border-Cyan">
              <FaGoogle />
            </button>
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-Cyan hover:border-Cyan text-gray-500 hover:text-white border-2 border-Cyan">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle bg-[#F1F2F4] hover:bg-Cyan hover:border-Cyan text-gray-500 hover:text-white border-2 border-Cyan">
              <FaGithub />
            </button>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default Signup;
