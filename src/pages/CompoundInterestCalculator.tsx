import React, { useMemo, useState } from 'react';

import Form from '@/components/pages/compound-interest/Form';
import Graph from '@/components/pages/compound-interest/Graph';
import Table from '@/components/pages/compound-interest/Table';
import { CalcCtx } from '@/context/CalcValueContext';
import { GraphCtx } from '@/context/GraphDataContext';
import type { CalculateProps, GraphProps } from '@/types/data';

const CompoundInterestCalculator = () => {
  const initialCalcProps: CalculateProps = {
    initial: 1000,
    payment: 1000,
    paymentFrequency: 'monthly',
    interest: 5,
    compoundFrequency: 'monthly',
    years: 1,
  };

  const initialGraphProps: GraphProps = {
    values: [],
  };
  const [calcCtx, setCalcCtx] = useState(initialCalcProps);
  const [graphCtx, setGraphCtx] = useState(initialGraphProps);
  const calcCtxValue = useMemo(
    () => [calcCtx, setCalcCtx],
    [calcCtx, setCalcCtx],
  );
  return (
    <div className="bg-gray-900">
      <main className="mx-auto mb-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="mb-4 text-center text-5xl font-bold text-white">
            Compound Interest Calculator
          </h1>
          <p className="text-center text-white">
            Get your money in the market and watch it grow over time. We are
            talking stacks on stacks on stacks.
          </p>
          <CalcCtx.Provider value={calcCtxValue}>
            <GraphCtx.Provider value={[graphCtx, setGraphCtx]}>
              <Form />
              <Graph />
              <Table />
            </GraphCtx.Provider>
          </CalcCtx.Provider>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center sm:flex-row" />
        </div>
      </main>
    </div>
  );
};

export default CompoundInterestCalculator;
