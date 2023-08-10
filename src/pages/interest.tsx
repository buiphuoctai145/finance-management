import React, { useState } from 'react';

const InterestCalculate = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [interest, setInterest] = useState(0);
  const [totalAmountReceived, setTotalAmountReceived] = useState<number>(0);

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
    setPrincipal(numericValue);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseInterestRate(inputValue);
    setInterestRate(numericValue);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = parseTerm(inputValue);
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
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="absolute rounded-md">
        <div className="my-6 w-[700px] overflow-hidden rounded-xl bg-transparent p-6 backdrop-blur-md">
          <h1 className="py-2 text-center text-4xl font-bold text-white">
            Finance Management
          </h1>
          <h2 className="pb-8 text-center text-xl font-medium italic text-white">
            Bank interest calculator for everyone
          </h2>
          <form className="" onSubmit={calculateInterest}>
            <div className="currency-input box-content">
              <label>Principal amount:</label>
              <input
                type="text"
                value={formatCurrency(principal)}
                onChange={handlePrincipalChange}
              />
              <span>đ</span>
            </div>
            <div className="rate-input box-content">
              <label>Interest rate (% per term): </label>
              <input
                type="text"
                value={formatInterestRate(interestRate * 100)}
                onChange={handleInterestRateChange}
              />
              <span>%</span>
            </div>
            <div className="term-input box-content">
              <label>Term: </label>
              <input
                type="text"
                value={formatTerm(term)}
                onChange={handleTermChange}
              />
              <span>month</span>
            </div>
            <p className="pb-2 text-left text-xs font-normal italic text-white">
              (*) Estimated deposit interest according to the method of paying
              interest at the end of the period
            </p>
            <div>
              <button type="submit">Calculate</button>
            </div>
          </form>

          <div className="result">
            <h2 className="pb-4 text-center text-xl font-medium italic text-white">
              Interest Amount:
            </h2>
            <p className="pb-2 text-left text-xs font-normal italic text-white">
              {formatCurrency(interest)}đ
            </p>
            <h2 className="pb-4 text-center text-xl font-medium italic text-white">
              Total amount received when due:
            </h2>
            <p className="pb-2 text-left text-xs font-normal italic text-white">
              {formatCurrency(totalAmountReceived)}đ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestCalculate;
