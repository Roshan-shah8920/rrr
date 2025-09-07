import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";

const CheckoutPage = () => {
  const { cart, fetchCart, user } = useProductContext();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Fetch cart on load if empty
  useEffect(() => {
    if (user?._id && cart.length === 0) {
      fetchCart();
    }
  }, [user?._id]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      alert("Please fill all details before proceeding.");
      return;
    }
    alert("Checkout successful! Payment page will open.");
  };

  if (!cart.length) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning text-center">No items in cart.</div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Cart Summary */}
        <div className="col-md-6">
          {cart.map((item) => (
            <div key={item._id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/150"}
                    alt={item.productName}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Price: ₹{item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Subtotal: ₹{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="card p-3 shadow-sm mt-4">
            <h4>Total: ₹{total}</h4>
          </div>
        </div>

        {/* User Details Form */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h4 className="mb-3">Your Details</h4>
            <input type="text" name="name" placeholder="Name" className="form-control mb-2" value={userDetails.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="form-control mb-2" value={userDetails.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" className="form-control mb-2" value={userDetails.phone} onChange={handleChange} />
            <textarea name="address" placeholder="Address" className="form-control mb-2" rows="3" value={userDetails.address} onChange={handleChange}></textarea>
            <button className="btn btn-success w-100" onClick={handleCheckout}>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
