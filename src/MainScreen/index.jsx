import React, { useState, useCallback } from "react";

import { initialState } from "./state";

import Form from "./components/form";
import Card from "./components/card";

import "./../index.css";

const MainScreen = () => {
  const [state, setState] = useState(initialState);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName],
      });
    },
    [state]
  );

  return (
    <div className="mainScreen">
      <Card {...state} />
      <Form
        updateStateValues={updateStateValues}
        cardNumber={state.cardNumber}
        cardHolder={state.cardHolder}
        cardCVV={state.cardCVV}
        isFlipped={state.isFlipped}
      />
    </div>
  );
};

export default MainScreen;
