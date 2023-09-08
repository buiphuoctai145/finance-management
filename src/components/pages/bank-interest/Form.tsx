import React, { useContext, useEffect } from 'react';

import { CalcCtx } from '@/context/CalcValueContext';
import { GraphCtx } from '@/context/GraphDataContext';
import type { GraphItem } from '@/types/data';

import DropDown from './BankDropdown';
import Text from './Text';

export default function Form() {
  const [calcCtx, setCalcCtx] = useContext(CalcCtx);
  const [graphCtx, setGraphCtx] = useContext(GraphCtx);

  const Rate = (
    interest: number,
    payment: number,
    compoundFrequency: number,
  ): number => {
    return (
      (1 + interest / compoundFrequency) ** (compoundFrequency / payment) - 1
    );
  };

  const nPer = (payment: number, years: number): number => {
    return payment * years;
  };

  const FV = (
    initial: number,
    interest: number,
    percent: number,
    payment: number,
  ): number => {
    return (
      initial * (1 + interest) ** percent +
      (payment * ((1 + interest) ** percent - 1)) / interest
    );
  };

  function* Calculate(): IterableIterator<GraphItem> {
    const frequencyMap = {
      monthly: 12,
      quarterly: 4,
      semiannual: 2,
      yearly: 1,
    };

    const { initial, payment, years } = calcCtx;

    let { compoundFrequency, paymentFrequency, interest } = calcCtx;

    paymentFrequency = frequencyMap[paymentFrequency];
    compoundFrequency = frequencyMap[compoundFrequency];
    interest /= 100;

    const rate = Rate(interest, paymentFrequency, compoundFrequency);
    let fv = 0;

    for (let i = 1; i <= years; i++) {
      const nper = nPer(paymentFrequency, i);
      fv = FV(initial, rate, nper, payment);
      const totalPayments = payment * nper + initial;
      const totalInterest = fv - totalPayments;
      const graphItem: GraphItem = {
        year: i,
        totalPayment: totalPayments,
        totalInterest,
        totalMoney: fv,
      };
      yield graphItem;
    }

    return fv;
  }

  const buildGraphData = () => {
    const graph: GraphItem[] = [];

    for (const amount of Calculate()) {
      graph.push(amount);
    }
    setGraphCtx({ values: graph });
  };
  useEffect(() => {
    buildGraphData();
  }, []);

  return (
    <div className="mt-10">
      <div className="mt-1 grid select-none grid-cols-1 gap-4 p-8 md:grid-cols-4 md:p-0">
        <div className="relative col-span-1 block rounded-lg border p-4 shadow">
          <span className="mb-1 block text-sm text-white">I have a</span>
          <Text
            defaultValue={{ name: 'initial', value: calcCtx.initial }}
            increment={1000}
            type="money"
            bounds={{ min: 0, max: 999999999 }}
          />
          <span className="mt-2 block text-sm text-white">
            initial investment
          </span>
        </div>
        <div className="relative col-span-1 block rounded-lg border p-4 text-white shadow">
          <span className="mb-1 block text-sm">I will add</span>
          <Text
            defaultValue={{ name: 'payment', value: calcCtx.payment }}
            increment={1000}
            type="money"
            bounds={{ min: 0, max: 999999 }}
          />
          <span className="mt-2 block text-sm">
            {/* each{' '}
            <DropDown
              text="month"
              property="paymentFrequency"
              fields={[
                { value: 'monthly', label: 'month' },
                { value: 'yearly', label: 'year' },
              ]}
            /> */}
            each month
          </span>
        </div>
        <div className="relative col-span-1 block rounded-lg border p-4 shadow">
          <span className="mb-1 block text-sm text-white">I will get</span>
          <Text
            defaultValue={{
              name: 'interest',
              value: calcCtx.interest,
            }}
            increment={1}
            type="percent"
            showArrows
            bounds={{ min: 0.01, max: 35 }}
          />
          {/* <span className="mt-2 block text-sm text-white">
            return compounded{' '}
            <DropDown
              text="monthly"
              property="compoundFrequency"
              fields={[
                { value: 'monthly', label: 'monthly' },
                { value: 'quarterly', label: 'quarterly' },
                { value: 'semiannual', label: 'semi-annually' },
                { value: 'yearly', label: 'annually' },
              ]}
            />
          </span> */}
        </div>
        <div className="relative col-span-1 block rounded-lg border p-4 shadow">
          <span className="mb-1 block text-sm text-white">I have got</span>
          <Text
            defaultValue={{ name: 'years', value: calcCtx.years }}
            increment={1}
            type="year"
            showArrows
            bounds={{ min: 1, max: 100 }}
          />
          <span className="mt-2 block text-sm text-white">
            years to watch my money grow
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="button-container py-2">
          <button
            type="button"
            onClick={buildGraphData}
            className="w-10 text-center"
          >
            <span>Calculate</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-1 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  );
}
