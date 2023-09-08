import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

interface DropdownItem {
  name: ReactNode;
  url: string;
}

interface HearDropdownProps {
  name: ReactNode;
  dropdownItems: DropdownItem[];
}
const Dropdown = ({ name, dropdownItems }: HearDropdownProps) => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="">
        {name}
      </label>
      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
        {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
