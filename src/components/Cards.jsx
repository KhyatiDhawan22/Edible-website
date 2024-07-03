/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2';

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  //add to cart btn
  const handleAddtoCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
       });
    }else{
      Swal.fire({
        title: "Failed to Add!",
        text: "Looks like you have not Signed in..",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#A9DFE4",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup',{state:{from: location}})
        }
      })
    }
  };
 
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-xl relative mr-5 md:my-5 bg-white"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-Cyan ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>

      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 transition-all duration-300 rounded-full mt-5 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title text-[#383636]">{item.name}!</h2>
        </Link>

        <p className="text-[#6A6868]"> Description of the item</p>
        <div className="card-actions justify-between item-center mt-2">
          <h5 className="font-semibold text-[#6A6868]">
            <span className="text-sm text-red">$</span> {item.price}
          </h5>
          <button
            className="btn bg-puce text-white border-none"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
