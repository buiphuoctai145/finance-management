import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

import Dropdown from './HeaderDropdown';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: 'Home', url: '/' },
    {
      name: 'Calculate',
      url: '/',
      dropdown: [
        { name: 'Bank interest', url: 'BankInterestCalculator' },
        { name: 'Compound interest', url: 'CompoundInterestCalculator' },
      ],
    },
    { name: 'About', url: '/' },
    { name: 'Contact', url: '/' },
  ];

  return (
    <nav className="w-full bg-gray-800 shadow">
      <div className="mx-auto justify-between px-2 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="/src/pages/index" className="">
              <div>
                <div className="w-40 rounded">
                  {/* <img src="" /> */}
                  <h1 className="text-xl font-bold text-white">
                    Calculate Tools
                  </h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url}>{name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
