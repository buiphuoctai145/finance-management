import React from 'react';

import BtnDoubleInterestCalculator from '../buttons/BtnDoubleInterestCalculate';
import CardsContainer from './CardsContainer';

const DoubleInterestCard = () => {
  return (
    <div className="flex flex-col justify-between">
      <CardsContainer
        imageUrl="src/components/assets/img/banner-1.jpg"
        title="Compound Interest"
        description="Compound interest application tool to calculate deposits, future investment returns based on savings plans, monthly investments and expected interest rates completely free"
        button={BtnDoubleInterestCalculator}
      />
    </div>
  );
};

export default DoubleInterestCard;
