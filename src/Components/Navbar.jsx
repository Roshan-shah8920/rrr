import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img22 from "../assets/image/logo.png";
import { useProductContext } from "../context/ProductContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(null); // category dropdown index
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // user menu dropdown
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logoutUser, cart } = useProductContext();

  const categories = [
    { name: "Custom Printed T-Shirts", items: ["Electronic", "kitchen"] },
    { name: "Duffle & Gym Bags", items: ["Bags", "Bluetooth"] },
    { name: "Bluetooth", items: ["Buds", "B"] },
    { name: "BluetoothSpeakers", items: ["BluetoothSpeakers", "Notebook 2"] },
    { name: "Smartwatch", items: ["Smartwatch", "Pen 2"] },
    { name: "GraphicsCards", items: ["GraphicsCards", "Polo 2"] },
    { name: "Office Products", items: ["Office 1", "Office 2"] },
    { name: "Corporate Gifts", items: ["Gift 1", "Gift 2"] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setMobileSearchOpen(false);
    }
  };

  const getItemLink = (item) => {
    const lower = item.toLowerCase();
    if (lower === "bags") return "/bags";
    if (lower === "buds") return "/buds";
    if (lower === "kitchen") return "/kitchen";
    if (lower === "bluetoothspeakers") return "/bluetoothspeakers";
    if (lower === "smartwatch") return "/smartwatch";
    if (lower === "graphicscards") return "/graphicscards";
    return `/electronic/${encodeURIComponent(item)}`;
  };

  return (
    <header>
      {/* Top Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={img22} alt="Logo" style={{ width: "100px" }} />
          </Link>

          <div className="d-flex align-items-center gap-3">
            {/* Mobile search */}
            <button className="btn d-lg-none" onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
              <AiOutlineSearch size={22} />
            </button>

            {mobileSearchOpen && (
              <form
                className="d-lg-none position-absolute top-100 start-0 w-100 px-3 py-2 bg-white"
                onSubmit={handleSearch}
                style={{ zIndex: 1100 }}
              >
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-dark" type="submit">Search</button>
                </div>
              </form>
            )}

            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="d-none d-lg-flex mx-auto" style={{ maxWidth: "800px", width: "100%" }}>
              <div className="input-group rounded-pill border overflow-hidden w-100" style={{ height: "55px" }}>
                <span className="input-group-text bg-white border-0"><AiOutlineSearch size={24} /></span>
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn px-4 d-flex align-items-center fs-6" style={{ borderRadius: 0, backgroundColor: "black", color: "white" }}>Search</button>
              </div>
            </form>

            {/* Icons */}
            <div className="d-flex align-items-center gap-3 position-relative">
              <Link to="/cart" className="nav-link position-relative text-dark p-0">
                <FaShoppingCart size={22} />
                {cart?.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
              </Link>

              <Link to="/wishlist"><FaRegHeart size={20} /></Link>

              {user ? (
                <div className="position-relative" onMouseLeave={() => setUserDropdownOpen(false)}>
                  <button className="btn text-dark d-flex align-items-center gap-2" onMouseEnter={() => setUserDropdownOpen(true)}>
                    <FaUser size={20} /> {user.name}
                  </button>
                  {userDropdownOpen && (
                    <ul className="dropdown-menu dropdown-menu-end show" style={{ position: "absolute" }}>
                      <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                      <li><button className="dropdown-item" onClick={logoutUser}>Logout</button></li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to="/login" className="text-dark d-flex align-items-center">
                  <FaUser size={20} /><span className="ms-1 d-none d-lg-inline">Login</span>
                </Link>
              )}

              <button className="btn d-lg-none" onClick={() => setMenuOpen(true)}><FaBars size={22} /></button>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Categories */}
      <nav className="navbar navbar-expand bg-primary d-none d-lg-block">
        <div className="container-fluid">
          <ul className="navbar-nav gap-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="nav-item position-relative"
                onMouseEnter={() => setCategoryDropdownOpen(index)}
                onMouseLeave={() => setCategoryDropdownOpen(null)}
              >
                <button className="btn text-white">{cat.name}</button>
                {categoryDropdownOpen === index && (
                  <ul className="dropdown-menu show" style={{ display: "block", position: "absolute", top: "100%", left: 0, minWidth: "220px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                    {cat.items.map((item, i) => (
                      <li key={i}><Link className="dropdown-item" to={getItemLink(item)}>{item}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`position-fixed top-0 start-0 bg-white h-100 shadow-lg p-3 d-lg-none`}
        style={{ width: "260px", transform: menuOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform 0.3s ease-in-out", zIndex: 1050 }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img src={img22} alt="Logo" style={{ width: "100px" }} />
          <button className="btn" onClick={() => setMenuOpen(false)}><FaTimes size={22} /></button>
        </div>
        <ul className="list-unstyled">
          {categories.map((cat, index) => (
            <li key={index} className="mb-3">
              <strong>{cat.name}</strong>
              <ul className="list-unstyled ps-3">
                {cat.items.map((item, i) => (
                  <li key={i}><Link to={getItemLink(item)} className="text-dark text-decoration-none">{item}</Link></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-lg-none" style={{ opacity: 0.5, zIndex: 1040 }} onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
};

export default Navbar;
