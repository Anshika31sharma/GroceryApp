import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded-lg relative block">
          <Link to={`/product/${product.id}`} className="flex flex-col">
            <FaHeart
              className={`absolute top-0 right-2 ${
                product.price > 50 ? "text-red-500" : "text-black"
              } cursor-pointer`}
            />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover mb-2 transition-transform duration-300 transform hover:scale-105"
            /> 
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </Link>
          <button
            className="absolute bottom-7 right-0 mt-2 mr-2 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            <FaPlus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
