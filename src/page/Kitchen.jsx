import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Kitchen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();

        // Filter products with category = kitchen
        const kitchenProducts = data.filter(
          (p) => p.category?.toLowerCase() === "kitchen"
        );

        setProducts(kitchenProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return (
      <p className="text-center my-5">No kitchen products found</p>
    );
  }

  const renderProductCard = (product) => {
    const finalPrice = Math.round(
      product.price - (product.price * product.discount) / 100
    );

    return (
      <div key={product._id} className="col-6 col-md-3 mb-4">
        <div className="card h-100 shadow-sm position-relative">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="card-img-top"
            style={{ height: "150px", objectFit: "contain" }}
          />

          {/* Out of Stock Badge */}
          

          <div className="card-body text-center">
            <h6 className="card-title">{product.name}</h6>
            <p className="text-primary fw-bold">₹{finalPrice}</p>
            
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
    );
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">All Kitchen Products</h2>
      <div className="row">
        {products.map(renderProductCard)}
      </div>
    </div>
  );
};

export default Kitchen;
