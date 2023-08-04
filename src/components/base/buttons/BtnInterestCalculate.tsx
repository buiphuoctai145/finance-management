import React from 'react';
import Link from 'next/link';
import { InterestCalculate } from '@/components/pages/interest';


const BtnInterestCalculator = () => {
  return (
    <Link href='/interest'>
        Calculate Interest
    </Link>
  );
};

export default BtnInterestCalculator;