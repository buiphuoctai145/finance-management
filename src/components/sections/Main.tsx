import React from 'react';

import DoubleInterestCard from '../base/cards/CompoundInterestCard';
import GrossNetCard from '../base/cards/GrossNetCard';
import InterestCard from '../base/cards/InterestCard';

const MainSection = () => {
  return (
    <div id="main" className="flex flex-wrap items-center justify-center">
      <InterestCard />
      <DoubleInterestCard />
      <GrossNetCard />
      <GrossNetCard />
    </div>
  );
};

export default MainSection;
