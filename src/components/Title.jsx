import React from "react";

export const Title = ({ titulo }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{titulo}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
