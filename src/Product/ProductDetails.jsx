import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isProductFavourite, setIsProductFavourite] = useState(false); // Initialize as not favorite

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const renderStars = (rating) => {
    const starArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      starArray.push(<FaStar key={i} className=' text-yellow-500' />);
    }
    if (hasHalfStar) {
      starArray.push(<FaStarHalfAlt key={fullStars} className=' text-yellow-500' />);
    }
    return starArray;
  };

  const toggleFavourite = () => {
    setIsProductFavourite(!isProductFavourite);
  };

  return (
    <div className="container mx-auto mt-8">
  <Link to="/cart">
        <div className="flex items-end justify-end space-x-2 mr-5 lg:mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-black"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
</Link>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
        <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </Link>
        </div>
        <h1 className="lg:text-7xl text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-2 text-xl lg:text-5xl"> {product.brand}</p>
        <div className="flex items-center mb-2">
          <p className=" text-gray-600 mr-2 lg:text-2xl " >Rating:</p>
          {renderStars(product.rating)}
        </div>
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Slide ${index}`} className="w-full h-64 object-contain" />
              <FaHeart 
                className={`absolute top-2 right-2 ${isProductFavourite ? 'text-red-500' : 'text-black'} cursor-pointer`} 
                onClick={toggleFavourite} 
              />
            </div>
          ))}
        </Slider>
         <div className='flex gap-5 mt-10 lg:mt-5'>
           <p className="text-blue-900 mb-2 lg:text-xl text-lg">Price: ${product.price}</p>
           <p className="text-white bg-blue-900 rounded-lg lg:p-2 text-sm p-2  mb-2"> {product.discountPercentage}% off</p>
         </div>
         <div className=' lg:gap-5 mt-2'>
           <button className="bg-white text-blue-900 border border-blue-950 py-2 px-4 rounded-lg hover:bg-blue-900 hover:text-white mr-2">
           Add to Cart
           </button>
           <button className="bg-blue-900 text-white border border-blue-950 py-2 px-4 rounded-lg hover:bg-blue-950 ">
           Buy Now
           </button>
         </div>
       <p className="text-gray-600 mb-2 text-lg mt-5">Details</p>
       <p className="text-gray-600 mb-2 text-lg"> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
