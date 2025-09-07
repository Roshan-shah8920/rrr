import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F28AV4Eeww0AjrN1F6OoxcBc4jAxl5SXUg&s"
            alt="About Us"
            className="img-fluid rounded shadow"
            style={{
              width:"300px"
            }}
          />
        </div>

        {/* Right: Text */}
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">About Our Company</h2>
          <p className="mb-3">
            Welcome to MyShop! We provide the best products with top-notch quality
            and excellent customer service. Our mission is to bring joy and convenience
            to our customers by offering a wide range of products at affordable prices.
          </p>
          <p className="mb-3">
            From greeting cards to personalized gifts, we ensure each product meets
            your expectations. Experience a seamless shopping journey with us!
          </p>
          <a href="/about" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
