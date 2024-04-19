import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTrashAlt,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const {
    cartItems,
    cartCount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [removingItemId, setRemovingItemId] = useState(null);

  const handleRemoveFromCart = (itemId) => {
    setRemovingItemId(itemId);
    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItemId(null);
    }, 800);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = 5;
  const total = subtotal + deliveryCharge;

  return (
    <div className="container mx-auto mt-10 p-4">
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="ml-2">Back</span>
        </Link>
        <h1 className="text-3xl font-bold text-center">Your Cart</h1>
        <span></span>
      </div>

      {cartCount > 0 ? (
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between py-6 ${
                removingItemId === item.id ? "removing-item" : ""
              }`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-grow">
                <h3 className="lg:text-lg text-sm md:text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="lg:text-lg md:text-lg text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-2 text-gray-600 hover:text-gray-800 lg:text-lg text-sm md:text-lg"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className="mx-4 text-sm md:text-lg">Qty: {item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-2 text-gray-600 hover:text-gray-800 lg:text-lg text-sm md:text-lg"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4 lg:text-lg text-sm md:text-lg"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center ">
            <div className="flex flex-col py-6">
              <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
              <h4>Delivery Charge: ${deliveryCharge.toFixed(2)}</h4>
              <h4>Total: ${total.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full lg:ml-10 lg:mt-20">
          <div className="empty-cart-message text-center bg-gray-100 lg:w-96 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h3>
            <p className="text-xl text-gray-600">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/" className="flex items-center justify-center space-x-2">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-100 hover:text-black hover:border-green-950 hover:border ">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;