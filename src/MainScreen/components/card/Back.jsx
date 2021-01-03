import React from "react";

const Back = ({ cardCVV }) => {
  return (
    <>
      <div className="card-blackLine"></div>
      <div className="card-CvvLine">
        <div className="cvvLine-title">cvv</div>
        <div className="cvvLine-line">
          <div>{cardCVV}</div>
        </div>
      </div>
    </>
  );
};

export default Back;
