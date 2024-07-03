import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  //Redirect to Home page or Specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    //console.log(email,password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successfull");
        document.getElementById("my_modal_5").close()
        navigate(from,{replace: true})
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Provide a correct email and password!");
      });
  };

  //google signin
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login successfull!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-gray-500 text-center">Please Login!</h3>

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
            {errorMessage ? (
              <p className="text-red text-xs italic">{errorMessage}</p>
            ) : (
              ""
            )}

            {/* Login button */}
            <div className="form-control mt-4">
              <input
                type="submit"
                value="Login"
                className="btn bg-Cyan border-none text-white shadow-lg"
              />
            </div>
            <p className="text-center my-2 text-[#656565]">
              Do not have an account?{" "}
              <Link to="/signup" className="underline text-red ml-1">
                Signup Now
              </Link>
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>

          {/* social sign in */}
          <div className="text-center space-x-3 mb-5">
            <button
              className="btn btn-circle bg-[#F1F2F4] hover:bg-Cyan hover:border-Cyan text-gray-500 hover:text-white border-2 border-Cyan"
              onClick={handleLogin}
            >
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
      </div>
    </dialog>
  );
};

export default Modal;

// this involves few installations:
//     1. go to react hook form - https://react-hook-form.com/get-started
