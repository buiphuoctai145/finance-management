import React from 'react';

import AnimatedTextCharacter from '../base/animations/AnimatedTextCharacter';
import AnimatedTextWord from '../base/animations/AnimatedTextWord';
import GoToMain from '../base/buttons/BtnGoToMain';

type WelcomeHeaderProps = {
  scrollToMain: () => void;
};
const WelcomeText = ({ scrollToMain }: WelcomeHeaderProps) => {
  return (
    <div
      id="home"
      className="container flex h-screen flex-col items-center justify-center"
    >
      <AnimatedTextWord text="Compound  Return" />
      <br />
      <AnimatedTextCharacter text="Interest Calculator" />
      <AnimatedTextCharacter text="Deposit Value" />
      <AnimatedTextCharacter text="Free Investment" />
      <GoToMain scrollToMain={scrollToMain} />
    </div>
  );
};

export default WelcomeText;
