import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import About from "./About";
import HeroSection from "../Components/HeroSection";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const scrollRef = useRef(null);

  // ✅ Use Vite env variable
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/product`);
      const data = await res.json();

      const bottleProducts = data.filter(
        (product) => product.category.toLowerCase() === "bootle"
      );
      setProducts(bottleProducts);

      // Load wishlist safely
      let storedWishlist = [];
      try {
        storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      } catch (err) {
        storedWishlist = [];
      }

      const liked = {};
      storedWishlist.forEach((p) => (liked[p._id] = true));
      setLikedProducts(liked);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    navigate("/customnext", { state: { product } });
  };

  // Toggle wishlist
  const toggleLike = (product) => {
    setLikedProducts((prev) => {
      const newLiked = { ...prev, [product._id]: !prev[product._id] };

      // Update localStorage safely
      let storedWishlist = [];
      try {
        storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      } catch (err) {
        storedWishlist = [];
      }

      if (newLiked[product._id]) {
        if (!storedWishlist.find((p) => p._id === product._id)) {
          storedWishlist.push(product);
        }
      } else {
        const index = storedWishlist.findIndex((p) => p._id === product._id);
        if (index > -1) storedWishlist.splice(index, 1);
      }

      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      return newLiked;
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection />
      <div className="container my-5">
        <h2 className="mb-4 fw-bold text-center">Bottle Products</h2>

        <div className="position-relative">
          {/* Left Arrow */}
          <button
            className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 10, opacity: 0.8 }}
            onClick={scrollLeft}
          >
            &#8249;
          </button>

          {/* Products Slider */}
          <div
            className="d-flex gap-3 py-2 overflow-auto hide-scrollbar"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                className="card flex-shrink-0 border-0 shadow-sm position-relative product-card"
              >
                {/* Heart Icon */}
                <div
                  className="position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    zIndex: 10,
                  }}
                  onClick={() => toggleLike(product)}
                >
                  {likedProducts[product._id] ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart color="grey" />
                  )}
                </div>

                {/* Product Image */}
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.name}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-primary fw-bold">₹{product.price}</p>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10, opacity: 0.8 }}
            onClick={scrollRight}
          >
            &#8250;
          </button>
        </div>

        <About />
      </div>

      {/* CSS for responsive card widths */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .product-card { width: 23%; }

          @media (max-width: 992px) { .product-card { width: 48% !important; } }
          @media (max-width: 768px) { .product-card { width: 90% !important; } }
        `}
      </style>
    </>
  );
};

export default Home;
