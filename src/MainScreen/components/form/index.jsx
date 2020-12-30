import React from "react";

import "./form.scss";

const Form = ({ setState, state }) => {
  const monthsArr = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? "0" + month : month;
  });

  const currentYear = new Date().getFullYear();
  const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

  const handeleCard = (e, field) => {
    setState({ ...state, [field]: e.target.value });
  };

  return (
    <div className="cardForm">
      <div className="cardForm-inputText">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          value={state.cardNumber}
          type="text"
          placeholder="Number Card"
          onChange={(e) => handeleCard(e, "cardNumber")}
        />
      </div>
      <div className="cardForm-inputText">
        <label htmlFor="cardHolder">Card Holder</label>
        <input
          id="cardHolder"
          value={state.cardHolder}
          type="text"
          placeholder="Number Holder"
          onChange={(e) => handeleCard(e, "cardHolder")}
        />
      </div>
      <div className="cardForm-container">
        <div className="cardForm-select">
          <select onChange={(e) => handeleCard(e, "cardMonth")} name="month">
            {monthsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="cardForm-select">
          <select onChange={(e) => handeleCard(e, "cardYear")} name="month">
            {yearsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="cardForm-container-inputText">
          <input
            value={state.cardCVV}
            type="text"
            placeholder="CVV"
            onChange={(e) => handeleCard(e, "cardCVV")}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
