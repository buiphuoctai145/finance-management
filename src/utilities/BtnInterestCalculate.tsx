import React, { useState } from "react";
import { Link } from 'react-router-dom';



export const BtnInterestCalculate = ({ className = "" }) => {

  return (
    <>
      <button
        className={`btn ${className}`}
      >
        <Link to="InterestCalculate">Interest Calculate</Link>
      </button>
    </>
  );
};
