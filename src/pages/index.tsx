import React, { useRef } from 'react';

import WelcomeHeader from '@/components/base/headers/WelcomeHeader';
import MainSection from '@/components/base/sections/Main';

const WelcomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-800">
        <WelcomeHeader scrollToMain={scrollToMain} />
      </div>
      <div
        ref={mainRef}
        className="flex h-screen w-full flex-wrap rounded-sm bg-gray-900 px-6 py-4 text-white"
      >
        <MainSection />
      </div>
    </div>
  );
};

export default WelcomePage;
