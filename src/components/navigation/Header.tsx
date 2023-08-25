import Link from 'next/link';
import React, { useState } from 'react';

// import CompoundInterestCalculator from '@/pages/double-interest';
// import InterestCalculate from '@/pages/interest';
const Header = () => {
  const pages = [
    { label: 'Interest Calculator', href: '../../../pages/' },
    { label: 'Double Interest Calculator', href: '/page2' },
    { label: 'Gross To Nett', href: '/page3' },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container sticky top-0 z-50 mx-auto flex h-24 items-center border-b-2 px-2 py-6">
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <Link href="#home">Home</Link>
          <ul>
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span>Pages</span>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  {pages.map((page) => (
                    <Link key={page.href} href={page.href}>
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
