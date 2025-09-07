import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img22 from "../assets/image/logo1.png"
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitterCircular } from "react-icons/ti";


const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-12 col-md-3 mb-4">
            <img src={img22} alt="" style={{
              width:'60%',
             backgroundColor:"bg-dark"
            }} />
           
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="/terms-and-conditions" className="text-white text-decoration-none">Shipping & Returns</a></li>
              <li><a href="/support" className="text-white text-decoration-none">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="text-white">Email: Info@giftwalah.com</p>
            <p className="text-white">Phone: +91  9999368393,9220479555,<br />9999579239</p>
            <p className="text-white">Adress 158,DSIDC COMPLEX OKHLA INDUSTRIAL AREA PHASE-1 NEW DELHI-110020,
DELHI,INDIA.</p>
          </div>

        </div>

        <hr className="bg-white" />

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0 text-white">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white text-decoration-none"><FaFacebook className="gap-5"/>Facebook</a>
            <a href="#" className="text-white text-decoration-none"><IoLogoInstagram />Instagram</a>
            <a href="#" className="text-white text-decoration-none"><TiSocialTwitterCircular />
Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
