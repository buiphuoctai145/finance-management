import React, { useRef } from 'react';

import Header from '@/components/base/header/Header';
import MainSection from '@/components/sections/Main';
import WelcomeText from '@/components/welcomepage/WelcomeText';

const WelcomePage = () => {
  const mainRef = useRef<any>(null);

  const scrollToMain = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center bg-gray-800"
        style={{
          backgroundSize: 'cover',
          backgroundImage: "url('./img/wallpaperflare.com_wallpaper.jpg')",
          backgroundRepeat: 'none',
        }}
      >
        <Header />
        <WelcomeText scrollToMain={scrollToMain} />
      </div>
      <div
        ref={mainRef}
        className="flex h-screen w-full flex-col justify-center rounded-sm bg-gray-900 px-6 py-4 text-white"
      >
        <MainSection />
      </div>
    </div>
  );
};

export default WelcomePage;
