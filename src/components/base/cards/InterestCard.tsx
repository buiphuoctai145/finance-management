import React from 'react';

import BtnInterestCalculate from '../buttons/BtnInterestCalculate';
import CardsContainer from './CardsContainer';

const InterestCard = () => {
  return (
    <div className="flex flex-col justify-between">
      <CardsContainer
        imageUrl="/components/assets/img/banner-1.jpg"
        title="Bank interest rate"
        description="Our savings bank interest calculator makes it easy to see the amount of interest in the future. From there, you can compare bank interest rates, deposit terms and make the most favorable decision."
        button={BtnInterestCalculate}
      />
    </div>
  );
};

export default InterestCard;
