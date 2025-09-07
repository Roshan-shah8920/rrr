import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Speed from "../page/Speed";

const HeroSection = () => {
  return (
    <>
      {/* Top Free Shipping Banner */}
      <div className="text-center p-2 bg-light">
        <h5 className="m-0">FREE SHIPPING ON ALL ORDERS | USE CODE: SHIP</h5>
      </div>

      {/* Hero Carousel */}
      <div className="container-fluid p-0">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <img
                src="https://www.portronics.com/cdn/shop/files/Corporate_Gifting_Banner_f0af93c0-63ad-417c-99cd-e694fe1cdb7a.png?v=1719557738"
                className="d-block w-100 hero-banner"
                alt="Slide 1"
              />
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <img
                src="https://deq64r0ss2hgl.cloudfront.net/images/contentimages/images/SME_banner_6_3_.jpg?v=8787"
                className="d-block w-100 hero-banner"
                alt="Slide 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold">Exclusive Deals</h2>
                <p>Grab the best offers before they’re gone!</p>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          </div>
        </div>
      </div>

      {/* Speed Component */}
      <Speed />
    </>
  );
};

export default HeroSection;
