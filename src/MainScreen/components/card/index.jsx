import React from "react";

import "./card.scss";

import chip from "../../../img/chip.png";
import visa_logo from "../../../img/visa_logo.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-chip">
          <img src={chip} alt="chip" />
        </div>
        <div className="card-logo">
          <img src={visa_logo} alt="logo" />
        </div>
      </div>

      <div className="card-number">
        <div>#### **** **** ####</div>
      </div>

      <div className="card-bottom">
        <div className="card-bottom-item">
          <div>Card Holder</div>
          <div>FULL NAME</div>
        </div>
        <div className="card-bottom-item">
          <div>Expires</div>
          <div>MM/YY</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
