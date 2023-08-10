import React from 'react';

import DoubleInterestCard from '../cards/DoubleInterestCard';
import GrossNetCard from '../cards/GrossNetCard';
import InterestCard from '../cards/InterestCard';

const MainSection = () => {
  return (
    <div className="flex flex-wrap">
      <InterestCard />
      <DoubleInterestCard />
      <GrossNetCard />
    </div>
  );
};

export default MainSection;
