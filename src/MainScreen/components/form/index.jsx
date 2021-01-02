import React from "react";

import "./form.scss";

const Form = ({ updateStateValues, cardNumber, cardHolder, cardCVV }) => {
  const monthsArr = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? "0" + month : month;
  });

  const currentYear = new Date().getFullYear();
  const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

  const handeleForm = (event) => {
    const { name, value } = event.target;

    updateStateValues(name, value);
  };

  const handeleFormValidation = (event) => {
    const { name, value } = event.target;
    if (name === "cardNumber" && cardCVV.length !== 8) {
      updateStateValues(name, value);
    }
    if (name === "cardCVV" && cardCVV.length !== 4) {
      updateStateValues(name, value);
    }
  };

  return (
    <div className="cardForm">
      <div className="cardForm-inputText">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          name="cardNumber"
          id="cardNumber"
          value={cardNumber}
          type="text"
          placeholder="Number Card"
          onChange={(e) => handeleFormValidation(e)}
        />
      </div>

      <div className="cardForm-inputText">
        <label htmlFor="cardHolder">Card Holder</label>
        <input
          name="cardHolder"
          id="cardHolder"
          value={cardHolder}
          type="text"
          placeholder="Number Holder"
          onChange={(e) => handeleForm(e)}
        />
      </div>

      <div className="cardForm-container">
        <div className="cardForm-select">
          <select
            defaultValue="Month"
            onChange={(e) => handeleForm(e)}
            name="cardMonth"
          >
            <option disabled>Month</option>
            {monthsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="cardForm-select">
          <select
            defaultValue="Year"
            onChange={(e) => handeleForm(e)}
            name="cardYear"
          >
            <option disabled>Year</option>
            {yearsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="cardForm-container-inputText">
          <input
            name="cardCVV"
            value={cardCVV}
            type="text"
            placeholder="CVV"
            onChange={(e) => handeleFormValidation(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
