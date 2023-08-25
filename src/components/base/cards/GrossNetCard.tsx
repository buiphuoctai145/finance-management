import React from 'react';

import BtnGrossNetSalary from '../buttons/BtnGrossNet';
import CardsContainer from './CardsContainer';

const GrossNet = () => {
  return (
    <div className="flex flex-col justify-between">
      <CardsContainer
        imageUrl=""
        title="Gross to Net salary"
        description="Net salary and Gross salary are both the salary agreed between the employee and the employer. However, there is a relatively large difference between Net salary and Gross salary"
        button={BtnGrossNetSalary}
      />
    </div>
  );
};

export default GrossNet;
