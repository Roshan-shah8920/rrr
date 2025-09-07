import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const SearchResults = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const { products, cart, setCart } = useProductContext();

  // Filter products by category (case insensitive)
  const filteredProducts = products.filter((p) =>
    (p.category || "").toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    navigate("/customnext", { state: { product } });
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4">Search Results for Category: "{query}"</h3>
      {filteredProducts.length > 0 ? (
        <div className="row g-3">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="card h-100 text-center"
                style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : ""}
                  alt={product.name}
                  style={{ height: "150px", objectFit: "contain", margin: "15px 0" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h6>{product.name}</h6>
                    <p className="fw-bold">₹{product.finalPrice}</p>
                    <p className="text-secondary">{product.category}</p>
                  </div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in category "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
