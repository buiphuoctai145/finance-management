import React from 'react';

import AnimatedTextCharacter from '../animations/AnimatedTextCharacter';
import AnimatedTextWord from '../animations/AnimatedTextWord';
import GoToMain from '../buttons/BtnGoToMain';

type WelcomeHeaderProps = {
  scrollToMain: () => void;
};
const WelcomeHeader = ({ scrollToMain }: WelcomeHeaderProps) => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <AnimatedTextWord text="Compound  Return" />
      <br />
      <AnimatedTextCharacter text="Interest Calculator" />
      <AnimatedTextCharacter text="Deposit Value" />
      <AnimatedTextCharacter text="Free Investment" />
      <GoToMain scrollToMain={scrollToMain} />
    </div>
  );
};

export default WelcomeHeader;
