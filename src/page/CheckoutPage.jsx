import React from "react";
import { useProductContext } from "../context/ProductContext";

const CheckoutPage = () => {
  const { cart } = useProductContext(); // Cart data context se
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <div className="container my-5">
        <div className="alert alert-warning">
          No items in cart.
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
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
        <h4>Grand Total : ₹{total}</h4>
      </div>
    </div>
  );
};

export default CheckoutPage;
