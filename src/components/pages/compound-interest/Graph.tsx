import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useContext, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { GraphCtx } from '@/context/GraphDataContext';
import { formatMoney } from '@/utils/calculateUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Graph() {
  const [graphCtx, setGraphCtx] = useContext<any>(GraphCtx);
  const [chartData, setChartData] = useState({});

  if (graphCtx.values.length === 0) return null;

  const labels = graphCtx.values.map((value) => `Year ${value.year}`);
  const totalMoney = graphCtx.values.map((value) => value.totalMoney);
  const totalInterest = graphCtx.values.map((value) => value.totalInterest);
  const totalPayment = graphCtx.values.map((value) => value.totalPayment);

  const tp = formatMoney(totalPayment[totalPayment.length - 1]?.toFixed(0));
  const ti = formatMoney(totalInterest[totalInterest.length - 1]?.toFixed(0));
  const tm = formatMoney(totalMoney[totalMoney.length - 1]?.toFixed(0));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '',
      },
      tooltip: {
        callbacks: {
          footer: function (items) {
            return `Total: ${formatMoney(
              totalMoney[items[0].dataIndex].toFixed(2),
            )}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'payments',
        data: totalPayment,
        backgroundColor: 'rgba(0, 0, 255, 0.4)',
      },
      {
        label: 'interest',
        data: totalInterest,
        backgroundColor: 'rgb(0, 0, 255)',
      },
    ],
  };

  return (
    <div className="mt-10 rounded-xl bg-gray-50">
      <div className="mt-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl pt-8">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-4 text-center sm:border-0 sm:border-r">
                <dd className="text-3xl font-extrabold">{tp}</dd>
                <dt className="mt-0 leading-6">Total Payments Made</dt>
              </div>
              <div className="flex flex-col border-y border-gray-100 p-4 text-center sm:border-0 sm:border-x">
                <dd className="text-3xl font-extrabold">{ti}</dd>
                <dt className="mt-0 leading-6">Total Interest Earned</dt>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-4 text-center sm:border-0 sm:border-l">
                <dd className="text-3xl font-extrabold text-red-600">{tm}</dd>
                <dt className="mt-0 leading-6">Grand Total</dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
