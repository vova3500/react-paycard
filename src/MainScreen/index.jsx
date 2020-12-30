import React, { useState } from "react";

import { initialState } from "./state";

import Form from "./components/form";
import Card from "./components/card";

import "./../index.css";

const MainScreen = () => {
  const [state, setState] = useState(initialState);

  return (
    <div className="mainScreen">
      <Card setState={setState} state={state} />
      <Form setState={setState} state={state} />
    </div>
  );
};

export default MainScreen;
