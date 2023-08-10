import React, { useState } from 'react';

const DoubleInterestCalculate = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(0);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);
  const [contributionDuration, setContributionDuration] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [totalAmountReceived, setTotalAmountReceived] = useState<number>(0);

  const calculateDoubleInterest = () => {
    const totalContributions = monthlyContribution * contributionDuration;
    const totalAmount =
      initialInvestment +
      (totalContributions * ((1 + interestRate / 100) ** term - 1)) /
        (interestRate / 100);
    setTotalAmountReceived(totalAmount);
  };

  // const formatCurrency = (value: number) => {
  //   return value
  //     .toFixed(0)
  //     .toString()
  //     .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // };
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="absolute rounded-md">
        <div className="my-6 w-[700px] overflow-hidden rounded-xl bg-transparent p-6 backdrop-blur-md">
          <h1>Double Interest Calculator</h1>
          <div>
            <label>Initial Investment:</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Monthly Contribution: </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) =>
                setMonthlyContribution(parseFloat(e.target.value))
              }
            />
          </div>
          <div>
            <label>Contribution Duration (months): </label>
            <input
              type="number"
              value={contributionDuration}
              onChange={(e) =>
                setContributionDuration(parseFloat(e.target.value))
              }
            />
          </div>
          <div>
            <label>Interest rate (% per term): </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Term (months): </label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <button onClick={calculateDoubleInterest}>Calculate</button>
          </div>
          <div>
            <h2>Total amount received after double interest:</h2>
            <p>{totalAmountReceived.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleInterestCalculate;
