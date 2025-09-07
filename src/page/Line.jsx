import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Line = () => {
  return (
    <div className="bg-light shadow-sm py-2">
      <div className="container d-flex flex-nowrap gap-3 overflow-auto smooth-scroll">
        {/* Greeting Cards Dropdown */}
        <div className="nav-item dropdown flex-shrink-0 hover-dropdown">
          <span className="nav-link dropdown-toggle text-primary fw-semibold">
            Greeting Cards
          </span>
          <ul className="dropdown-menu p-3 shadow border-0">
            <li><a className="dropdown-item" href="#">Birthday Cards</a></li>
            <li><a className="dropdown-item" href="#">Anniversary Cards</a></li>
            <li><a className="dropdown-item" href="#">Thank You Cards</a></li>
          </ul>
        </div>

        {/* Invitations Dropdown */}
        <div className="nav-item dropdown flex-shrink-0 hover-dropdown">
          <span className="nav-link dropdown-toggle text-primary fw-semibold">
            Invitations
          </span>
          <ul className="dropdown-menu p-3 shadow border-0">
            <li><a className="dropdown-item" href="#">Wedding Invitations</a></li>
            <li><a className="dropdown-item" href="#">Birthday Invitations</a></li>
            <li><a className="dropdown-item" href="#">Party Invitations</a></li>
          </ul>
        </div>

        {/* Other Categories */}
        <span className="text-primary fw-semibold flex-shrink-0">Calendars</span>
        <span className="text-primary fw-semibold flex-shrink-0">Posters</span>
        <span className="text-primary fw-semibold flex-shrink-0">Personalised Gifts</span>
        <span className="text-primary fw-semibold flex-shrink-0">Stationery</span>
        <span className="text-primary fw-semibold flex-shrink-0">Corporate Printing</span>
      </div>
    </div>
  );
};

export default Line;
