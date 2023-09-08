import Link from 'next/link';
import React, { useState } from 'react';

import Dropdown from './HeaderDropdown';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: 'Home', url: '/' },
    {
      name: 'Services',
      url: '/',
      dropdown: [
        { name: 'Service 1', url: '' },
        { name: 'Service 2', url: '' },
        { name: 'Service 3', url: '' },
      ],
    },
    { name: 'About', url: '/' },
    { name: 'Contact', url: '/' },
  ];
  return (
    <nav className="w-full bg-gray-800 shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#" className="">
              <div className="avatar">
                <div className="w-16 rounded">
                  {/* <img src="" /> */}
                  <h1 className="text-3xl font-bold text-white">NEXT JS</h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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

export default Navbar;
