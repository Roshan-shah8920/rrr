import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomNext = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { user } = useProductContext();

  if (!product) return <p>No product selected!</p>;

  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState(product.images?.[0] || "");

  useEffect(() => {
    if (product.images?.length) setMainImage(product.images[0]);

    // Fetch related products
    const fetchRelatedProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();

        const related = data.filter(
          (p) => p.category === product.category && p._id !== product._id
        );
        setRelatedProducts(related);
      } catch (err) {
        console.error("Error fetching related products:", err);
      }
    };
    fetchRelatedProducts();
  }, [product]);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    if (!user) {
      toast.warning("Please login first!", { position: "top-center" });
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: user.id,
          productId: product._id,
          productName: product.name,
          price: product.price,
          quantity,
          images: product.images || [],
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`${product.name} added to cart!`, { position: "top-center" });
        navigate("/cart");
      } else {
        toast.error(data.error || "Failed to add to cart", { position: "top-center" });
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Something went wrong!", { position: "top-center" });
    }
  };

  const handleBuyRelated = (p) => {
    navigate("/customnext", { state: { product: p } });
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="container my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      {/* Main Product */}
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4">
          <img
            src={mainImage || "https://via.placeholder.com/400x400?text=No+Image"}
            alt={product.name}
            className="img-fluid rounded shadow mb-3"
            style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          />
          <div className="d-flex gap-2 flex-wrap">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="img-fluid rounded border"
                style={{
                  width: "22%",
                  height: "70px",
                  objectFit: "contain",
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid #007bff" : "1px solid #ddd",
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="mb-3">{product.description || "No description available."}</p>
          <h4 className="text-primary fw-bold mb-3">₹{totalPrice}</h4>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-primary" onClick={handleDecrease}>-</button>
            <span className="mx-3">{quantity}</span>
            <button className="btn btn-outline-primary" onClick={handleIncrease}>+</button>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-5">
           <button className="btn btn-primary fw-bold mb-3" disabled>
      Related Products
    </button>
          <div className="row g-3">
            {relatedProducts.map((p) => (
              <div key={p._id} className="col-6 col-md-3">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={p.images?.[0] || "https://via.placeholder.com/150"}
                    alt={p.name}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "contain", borderRadius: "10px" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">{p.name}</h6>
                    <p className="text-primary fw-bold">₹{p.price}</p>
                    <button className="btn btn-sm btn-primary" onClick={() => handleBuyRelated(p)}>
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNext;
