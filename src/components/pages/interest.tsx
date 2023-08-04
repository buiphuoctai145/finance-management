import React, { useState } from 'react';

export const InterestCalculate = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [interest, setInterest] = useState(0);
  const [totalAmountReceived, setTotalAmountReceived] = useState<number>(0);
  const [principalError, setPrincipalError] = useState<string>('');
  const [interestRateError, setInterestRateError] = useState<string>('');
  const [termError, setTermError] = useState<string>('');

  const formatCurrency = (value: number) => {
    return value
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formatInterestRate = (value: number) => {
    return value.toFixed(2);
  };

  const formatTerm = (value: number) => {
    return value.toFixed(0);
  };

  const parseCurrency = (value: string) => {
    const numericValue = Number(value.replace(/[^0-9.-]+/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const parseInterestRate = (value: string) => {
    const numericValue = Number(value.replace(/[^0-9.]+/g, ''));
    return isNaN(numericValue) ? 0 : numericValue / 100;
  };

  const parseTerm = (value: string) => {
    const numericValue = Number(value.replace(/[^0-9]+/g, ''));
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseCurrency(inputValue);
    if (numericValue <= 0) {
      alert('Please enter a valid principal amount greater than 0.');
      return;
    }
    setPrincipalError('');

    setPrincipal(numericValue);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInterestRate(inputValue);
    if (numericValue <= 0) {
      alert('Please enter a valid interest rate greater than 0.');
      return;
    }
    setInterestRateError('');

    setInterestRate(numericValue);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseTerm(inputValue);
    if (numericValue <= 0) {
      alert('Please enter a valid term greater than 0.');
      return;
    }
    setTermError('');

    setTerm(numericValue);
  };

  const calculateInterest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const monthlyInterestRate = interestRate / 12;
    const sumAmountReceived = principal * (1 + monthlyInterestRate) ** term;
    const interestEarned = sumAmountReceived - principal;
    setInterest(interestEarned);
    setTotalAmountReceived(sumAmountReceived);
  };

  return (
    <div className="background">
      <div className="center">
        <div className="container">
          <h1 className="header font-bold text-white">Finance Management</h1>
          <h2>Bank interest calculator for everyone</h2>
          <form className="" onSubmit={calculateInterest}>
            <div className="currency-input box-content">
              <label>Principal amount: </label>
              <input
                type="text"
                value={formatCurrency(principal)}
                onChange={handlePrincipalChange}
              />
              <span>đ</span>
            </div>
            {principalError && (
              <div className="error-message">{principalError}</div>
            )}
            <div className="error-message">{principalError}</div>
            <div className="rate-input box-content">
              <label>Interest rate (% per term): </label>
              <input
                type="text"
                value={formatInterestRate(interestRate * 100)}
                onChange={handleInterestRateChange}
              />
              <span>%</span>
            </div>
            {interestRateError && (
              <div className="error-message">{interestRateError}</div>
            )}
            <div className="error-message">{interestRateError}</div>
            <div className="term-input box-content">
              <label>Term: </label>
              <input
                type="text"
                value={formatTerm(term)}
                onChange={handleTermChange}
              />
              <span>month</span>
            </div>
            {termError && <div className="error-message">{termError}</div>}
            <div className="error-message">{termError}</div>
            <p>
              (*) Estimated deposit interest according to the method of paying
              interest at the end of the period
            </p>
            <div className="button-container">
              <button type="submit">Calculate</button>
            </div>
          </form>

          <div className="result">
            <h2>Interest Amount:</h2>
            <p>{formatCurrency(interest)}đ</p>
            <h2>Total amount received when due:</h2>
            <p>{formatCurrency(totalAmountReceived)}đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
