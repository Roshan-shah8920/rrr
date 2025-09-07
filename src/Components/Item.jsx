import React from 'react';

const Item = () => {
  return (
    <div>
      {/* Bottom Category Bar */}
      <div className="bg-light shadow-sm py-2">
        <div
          className="container d-flex flex-nowrap gap-3 overflow-auto"
          style={{ WebkitOverflowScrolling: 'touch' }} // smooth scroll mobile
        >
          {/* Greeting Cards Dropdown */}
          <div className="dropdown hover-dropdown flex-shrink-0">
            <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
              Greeting Cards
            </span>
            <div className="dropdown-menu p-3 shadow border-0">
              <div>Birthday Cards</div>
              <div>Anniversary Cards</div>
              <div>Thank You Cards</div>
            </div>
          </div>

          {/* Invitations Dropdown */}
          <div className="dropdown hover-dropdown flex-shrink-0">
            <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
              Invitations
            </span>
            <div className="dropdown-menu p-3 shadow border-0">
              <div>Wedding Invitations</div>
              <div>Birthday Invitations</div>
              <div>Party Invitations</div>
            </div>
          </div>

          {/* Other Categories */}
          <span className="text-primary fw-semibold flex-shrink-0">Calendars</span>
          <span className="text-primary fw-semibold flex-shrink-0">Posters</span>
          <span className="text-primary fw-semibold flex-shrink-0">Personalised Gifts</span>
          <span className="text-primary fw-semibold flex-shrink-0">Stationery</span>
          <span className="text-primary fw-semibold flex-shrink-0">Corporate Printing</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
