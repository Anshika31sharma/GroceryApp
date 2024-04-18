import React from "react";
import { FiSearch} from "react-icons/fi";
import { FaHome, FaList, FaHeart, FaEllipsisH } from 'react-icons/fa';
import Product from "./Product";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div style={{ backgroundColor: "#332a9f" }} className=" w-full top-0">
        <header className="flex items-center justify-between w-full lg:p-10 mt-5 lg:mt-0">
          <div className="text-xl text-white ml-7 lg:ml-0">Hey Rahul</div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 mr-5 lg:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
          </div>
        </header>
        <div className="relative mx-auto lg:w-96 w-64 mt-10 lg:mt-0">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 px-2 py-1 rounded-lg w-full lg:h-12 md:h-10 justify-center items-center flex"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)", color: "white" }}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:justify-start md:justify-start w-full p-4 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center space-x-2">
            <select
              className="px-2 py-1 rounded-md  text-white"
              style={{ backgroundColor: "#332a9f" }}
            >
              <option value="Green Way 1000, Sylhet">
                Green Way 1000, Sylhet
              </option>
              <option value="Green Way 2000, Sylhet">
                Green Way 2000, Sylhet
              </option>
              <option value="Green Way 3000, Sylhet">
                Green Way 3000, Sylhet
              </option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <select
              className="px-2 py-1 rounded-md text-white"
              style={{ backgroundColor: "#332a9f" }}
            >
              <option value="Now">1 Hour</option>
              <option value="Now">6 Hour</option>
              <option value="Now">12 Hour</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full p-4 ">
        <div className="w-1/3 p-10">
            <img
              src="data:image/jpeg;base64,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"
              alt="Product"
              className="w-full h-40 object-cover rounded-md mb-2"
            />
       
        </div>
        <div className="w-1/3 p-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2PYSL3Wq71X6wP7RreMUOBWXvxgejsnxMfQ&s"
              alt="Product"
              className="w-full h-40 object-cover rounded-md mb-2"
            />
        </div>
        <div className="w-1/3 p-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkvOMXdz1V0bSHiaEThpWMKobx28AuSAhtQ&s"
              alt="Product"
              className="w-full h-40 object-cover rounded-md mb-2"
            />
        </div>
      </div>
<Product/>
<div className="flex justify-between w-full text-sm lg:text-lg items-center bg-gray-200 p-4">
      <div className="flex items-center space-x-2">
        <FaHome className="text-gray-600 " />
        <span>Home</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaList className="text-gray-600" />
        <span>Category</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaHeart className="text-gray-600" />
        <span>Favorite</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaEllipsisH className="text-gray-600" />
        <span>More</span>
      </div>
    </div>
    </div>
  );
};

export default Home;
