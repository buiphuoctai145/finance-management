import React from 'react';

import BtnInterestCalculate from '../buttons/BtnInterestCalculate';
import CardsContainer from './CardsContainer';

const GrossNet = () => {
  return (
    <div className="flex flex-col justify-between">
      <CardsContainer
        imageUrl=""
        title="Gross to Net salary calculator"
        description="Net salary and Gross salary are both the salary agreed between the employee and the employer. However, there is a relatively large difference between Net salary and Gross salary. So what is Gross salary, what is Net salary? What is the relationship between Gross salary and Net salary?"
        button={BtnInterestCalculate}
      />
    </div>
  );
};

export default GrossNet;
