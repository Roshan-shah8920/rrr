import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Smartwatch = () => {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();

        // Smartwatch category ke sabhi products
        const smartwatchProducts = data.filter(
          (p) => p.category && p.category.toLowerCase() === "smartwatch"
        );

        setProducts(smartwatchProducts);

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

  const renderProductCard = (product) => (
    <div key={product._id} className="col-6 col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain" }}
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
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Smartwatch Collection</h2>
      <div className="row">
        {products.map(renderProductCard)}
      </div>
    </div>
  );
};

export default Smartwatch;
