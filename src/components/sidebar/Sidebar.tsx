import React from 'react';
import { BtnInterestCalculate } from '../../utilities/BtnInterestCalculate';

export const NavBar = () => {
    const classLinkActive =
    "text-rose-500 bg-gray-700 border-rounded-400"
    return (
        <header className="h-full flex flex-col">
            <h1 className="font-bold uppercase text-sm text-center mt-8 xl:block">
                Finance Management
            </h1>
            <BtnInterestCalculate className="my-8 mx-4" />
        </header>
    );
};
