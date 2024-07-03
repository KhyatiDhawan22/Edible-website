import React, { useState, useEffect, useContext } from "react";
import logo from "/logo.png";
import { FaRegUser } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";


const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [cart,refetch] = useCart();
  
  
  
  // handle scroll functions
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a href="/" className="custom-link text-lg ">
          Home
        </a>
      </li>
      <li tabIndex={0} >
        <details>
          <summary className=" custom-link text-lg ">Menu</summary>
          <ul className="p-2 custom-dropdown">
            <li>
              <a href="/menu" className="custom-dropdown-link">
                All
              </a>
            </li>
            <li>
              <a className="custom-dropdown-link">Cakes</a>
            </li>
            <li>
              <a className="custom-dropdown-link">Shakes</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className=" custom-link text-lg ">Services</summary>
          <ul className="p-2 custom-dropdown">
            <li>
              <a className="custom-dropdown-link">Online Order</a>
            </li>
            <li>
              <a className="custom-dropdown-link">Table Booking</a>
            </li>
            <li>
              <a className="custom-dropdown-link">Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a className=" custom-link text-lg text-Grey">Offers</a>
      </li>
    </>
  );
  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-Pink transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <div tabIndex={0} role="button" className="btn btn-ghost text-Grey lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Search icon (hidden on mobile) */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <FiSearch className="h-5 w-5 text-gray-500" />
          </button>
          
          
          {/* Cart Items */}
          <Link to="cart-page">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 md:flex hidden flex items-center justify-center"
          >
            <div className="indicator">
              <FiShoppingBag className="h-5 w-5 text-gray-500" />
              <span className="badge badge-sm indicator-item bg-puce text-white border-none">
                {cart.length || 0} 
              </span>
            </div>
          </div>
          </Link>
          

          {/* login button */}
          {user ? (
            <>
              <Profile user={user}/>
            </>
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn bg-puce border-none rounded-full px-6 text-white flex items-center gap-2"
            >
              <FaRegUser />
              Login
            </button>
          )}

          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
