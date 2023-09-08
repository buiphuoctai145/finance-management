import Link from 'next/link';
import React from 'react';

const BtnInterestCalculate = () => {
  return (
    <Link
      href="BankInterestCalculator"
      className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-center text-base font-medium text-white no-underline"
    >
      <span className="mr-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-dollar-sign"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </span>
      Interest calculator
    </Link>
  );
};

export default BtnInterestCalculate;
