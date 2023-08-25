import React, { useContext } from 'react';

import { GraphCtx } from '@/context/GraphDataContext';
import { formatMoney } from '@/utils/calculateUtils';

export default function Table() {
  const [graphCtx, setGraphCtx] = useContext(GraphCtx);

  if (graphCtx.values.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-center text-base font-semibold uppercase tracking-wider text-white">
        Details interest
      </h2>
      <p className="mt-2 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Your year-by-year breakdown
      </p>
      <div className="mt-10 flex flex-col rounded-xl bg-gray-50 p-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-900"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-900"
                    >
                      Payment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-900"
                    >
                      Interest
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-900"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {graphCtx.values.map((item) => (
                    <tr
                      key={item.year}
                      className={
                        item.year % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {item.year}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                        {formatMoney(item.totalPayment.toFixed(2))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                        {formatMoney(item.totalInterest.toFixed(2))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-md font-bold text-red-600">
                        {formatMoney(item.totalMoney.toFixed(2))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
