import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const GraphicsCards = () => {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();

        // GraphicsCards category ke products (case-insensitive)
        const graphicsProducts = data.filter(
          (p) => p.category && p.category.toLowerCase() === "graphicscards"
        );

        setProducts(graphicsProducts);

      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [productName]);

  if (products.length === 0) {
    return (
      <p className="text-center my-5">
        No products found
      </p>
    );
  }

  // Calculate final price with discount
  const calculateFinalPrice = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return Math.round(discountedPrice).toLocaleString("en-IN");
  };

  const renderProductCard = (product) => {
    const attributes = product.attributes ? JSON.parse(product.attributes) : {};

    return (
      <div key={product._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src={product.images[0]}
            alt={product.name}
            className="card-img-top"
            style={{ height: "250px", objectFit: "contain", padding: "10px" }}
          />
          <div className="card-body text-center">
            <h6 className="card-title">{product.name}</h6>
            <p className="text-primary fw-bold">
              ₹{calculateFinalPrice(product.price, product.discount)}
            </p>
            
            <Link
              to="/customnext"
              state={{ product }}
              className="btn btn-sm btn-primary mt-2"
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
      <h2 className="fw-bold mb-4">Graphics Cards Collection</h2>
      <div className="row">
        {products.map(renderProductCard)}
      </div>
    </div>
  );
};

export default GraphicsCards;
