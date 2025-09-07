import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((p) => p._id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };

  if (wishlist.length === 0) {
    return <p className="text-center my-5">No products in your wishlist.</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center">My Wishlist</h2>
      <div className="row">
        {wishlist.map((product) => (
          <div key={product._id} className="col-6 col-md-3 mb-4 position-relative">
            <div className="card h-100 shadow-sm">
              <div
                className="position-absolute"
                style={{ top: "10px", right: "10px", cursor: "pointer", fontSize: "1.2rem", zIndex: 10 }}
                onClick={() => removeFromWishlist(product._id)}
              >
                ❤️
              </div>
              <img
                src={product.images[0]}
                alt={product.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "contain", marginBottom: "10px" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title">{product.name}</h6>
                <p className="text-primary fw-bold">₹{product.price}</p>
                <Link
                  to="/customnext"
                  state={{ product }}
                  className="btn btn-sm btn-primary"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
