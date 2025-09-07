import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cart, setCart, user } = useProductContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch cart
  const fetchCart = async () => {
    if (!user?.id) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:4000/api/cart/cart/${user.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      console.log("Fetched cart data:", data);

      // Fix: backend response might be data.items or data.cart
      const items = data.items || data.cart || [];
      setCart(items);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Unable to load cart. Please try again.");
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  // Update quantity
  const updateQty = async (item, change) => {
    try {
      const newQty = item.quantity + change;
      if (newQty < 1) return;

      const res = await fetch(`http://localhost:4000/api/cart/cart/update/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ quantity: newQty }),
      });
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // Remove item
  const removeItem = async (item) => {
    try {
      const res = await fetch(`http://localhost:4000/api/cart/cart/remove/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  // Total calculation
  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => navigate("/checkout-page");

  if (!user) return <div className="alert alert-warning">Please login to view your cart.</div>;
  if (loading) return <div className="alert alert-info">Loading cart...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Shopping Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {cart.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.images?.[0] || "https://via.placeholder.com/150"}
                  alt={item.productName}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain", borderRadius: "10px" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => updateQty(item, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => updateQty(item, 1)}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => removeItem(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 mt-4">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
