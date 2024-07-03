import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems,setCartItems] = useState([])

  //Calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };
  //Calculate total price
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartSubtotal;

  //handleIncrease btn
  const handleIncrease = (item) => {
    fetch(`http://localhost:3000/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem._id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
            
          }
          refetch();
          return cartItem;
        });
        
        setCartItems(updatedCart);
      })
      refetch();
  };


  //handleDecrease btn
  const handleDecrease = (item) => {
    if(item.quantity > 1) {
      fetch(`http://localhost:3000/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem._id === item._id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
              
            }
            refetch();
            return cartItem;
          });
          
          setCartItems(updatedCart);
        })
        refetch();
    } else{
      handleDelete(item);
    }
  };
  //handleDelete btn
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-custom-gradient min-h-screen">
      {/* banner */}
      <div className="py-36 flex flex-col  justify-center items-center ">
        {/* texts */}
        <div className="space-y-7 px-4">
          <h2 className="text-black md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Items added to the <span className="text-puce">Cart</span>
          </h2>
        </div>
      </div>

      {/* Table Content */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-puce text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="text-gray-600">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium text-gray-600">{item.name}</td>

                  <td className="flex items-center text-gray-600">
                    <button
                      className="btn btn-xs bg-gray-200 text-black border-none px-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="bg-Pink w-10 mx-2 text-center overflow-hidden appearance-none"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                    />
                    <button className="btn btn-xs bg-gray-200 text-black border-none px-2" onClick={() => handleIncrease(item)}>
                      +
                    </button>
                  </td>
                  <td>${calculatePrice(item).toFixed(2)}</td>
                  <th>
                    <button
                      className="btn btn-ghost text-red btn-xs"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* customer details */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium">Customer Details</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>User_id: {user.uid}</p>
        </div>
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium">Shopping Details</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${orderTotal.toFixed(2)}</p>
          <button className="btn bg-puce text-white border-none">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
