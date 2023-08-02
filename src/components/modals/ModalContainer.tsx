import React, { useState } from "react";

export type ModalContainerProps = {
  isVisible: boolean;
  title: string;
  children: JSX.Element[];
  submitBtnText: string;
  onSubmit: () => void;
  onClose: () => void;
};
export const ModalContainer = ({
  isVisible,
  title,
  children,
  submitBtnText,
  onSubmit,
  onClose,
}: ModalContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 h-screen w-screen bg-black/80 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <div
        className="w-96 flex flex-col bg-white rounded-lg p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-2xl font-medium text-center">{title}</div>
        {children}
        <div className="flex items-center gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              onSubmit();
              onClose();
            }}
          >
            {submitBtnText}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
