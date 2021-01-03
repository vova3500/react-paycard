import React from "react";
import Back from "./Back";

import "./card.scss";
import Front from "./Front";

const Card = ({
  cardNumber,
  cardHolder,
  cardMonth,
  cardYear,
  cardCVV,
  isFlipped,
}) => {
  return (
    <div className="card">
      <div
        className="front"
        style={isFlipped ? { transform: "rotateY(180deg)" } : {}}
      >
        <Front
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardMonth={cardMonth}
          cardYear={cardYear}
        />
      </div>
      <div
        className="back"
        style={isFlipped ? { transform: "rotateY(360deg)" } : {}}
      >
        <Back cardCVV={cardCVV} />
      </div>
    </div>
  );
};

export default Card;
