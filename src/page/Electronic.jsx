import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ElectronicsPage = () => {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();

        // Electronics category ke sabhi products (case-insensitive)
        const electronicsProducts = data.filter(
          (p) =>
            p.category &&
            ["electronics", "electronic"].includes(p.category.toLowerCase())
        );

        setProducts(electronicsProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [productName]);

  if (products.length === 0) {
    return (
      <p className="text-center my-5">No products found</p>
    );
  }

  const renderProductCard = (product) => (
    <div key={product._id} className="col-6 col-sm-4 col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.images[0]}
          alt={product.name}
          className="card-img-top"
          style={{ height: "150px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h6 className="card-title" style={{ fontSize: "0.9rem" }}>
            {product.name}
          </h6>
          <p className="text-primary fw-bold" style={{ fontSize: "0.9rem" }}>
            ₹{product.finalPrice || product.price}
          </p>
          <Link
            to="/customnext"
            state={{ product }}
            className="btn btn-sm btn-primary w-100"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4 text-center">All Electronics</h2>
      <div className="row">
        {products.map(renderProductCard)}
      </div>
    </div>
  );
};

export default ElectronicsPage;
