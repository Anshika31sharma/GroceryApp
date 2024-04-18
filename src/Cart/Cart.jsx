import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center lg:gap-10 mb-4">
        <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        <h1 className="text-3xl lg:text-5xl font-semibold mb-6">Your Cart</h1>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4 text-lg lg:text-3xl">Your cart is empty.</p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;

