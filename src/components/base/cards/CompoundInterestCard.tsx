import React from 'react';

import BtnCompoundInterestCalculator from '../buttons/BtnCompoundInterestCalculate';
import CardsContainer from './CardsContainer';

const DoubleInterestCard = () => {
  return (
    <div className="flex flex-col justify-between">
      <CardsContainer
        imageUrl="src/components/assets/img/banner-1.jpg"
        title="Compound Interest"
        description="Compound interest application tool to calculate deposits, future investment returns based on savings plans, monthly investments and expected interest rates completely free"
        button={BtnCompoundInterestCalculator}
      />
    </div>
  );
};

export default DoubleInterestCard;
