import React from "react";

import chip from "../../../img/chip.png";
import visa_logo from "../../../img/visa_logo.png";

const Front = ({ cardNumber, cardHolder, cardMonth, cardYear }) => {
  return (
    <>
      <div className="card-header">
        <div className="card-chip">
          <img src={chip} alt="chip" />
        </div>
        <div className="card-logo">
          <img src={visa_logo} alt="logo" />
        </div>
      </div>

      <div className="card-number">
        {cardNumber ? <div>{cardNumber}</div> : <div> #### **** **** ####</div>}
      </div>

      <div className="card-bottom">
        <div className="card-bottom-item">
          <div>Card Holder</div>
          {cardHolder ? <div>{cardHolder}</div> : <div>FULL NAME</div>}
        </div>

        <div className="card-bottom-item">
          <div>Expires</div>
          <div>
            {cardMonth ? <span>{cardMonth}</span> : <span>MM</span>}/
            {cardYear ? <span>{cardYear}</span> : <span>YY</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
