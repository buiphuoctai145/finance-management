import React from 'react';

type BannerProps = {
  imageUrl: string;
  title: string;
  description: string;
  button: () => JSX.Element;
};

const CardsContainer = ({
  imageUrl,
  title,
  description,
  button,
}: BannerProps) => {
  return (
    <div
      className="mx-6 h-96 w-80 max-w-sm rounded-lg border border-gray-200 bg-white bg-cover bg-center p-6 shadow transition-transform hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="flex flex-col">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-auto text-center">
          <button type="button">{button()}</button>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
