import React from 'react';

type GoToMainButtonProps = {
  scrollToMain: () => void;
};
const GoToMain = ({ scrollToMain }: GoToMainButtonProps) => {
  return (
    <div className="my-4">
      <button
        className="rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-blue-500 hover:text-white"
        type="button"
        onClick={scrollToMain}
      >
        Try for free
      </button>
    </div>
  );
};

export default GoToMain;
