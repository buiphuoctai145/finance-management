import React, { useState } from "react";
import Modal from "react-modal";

const FinanceInterest = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const openSignUpModal = () => {
    setShowSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };
  return (
    <div>
      <Modal isOpen={showSignUpModal} onRequestClose={closeSignUpModal}>
        {/* Sign Up Form or content */}
        <button onClick={closeSignUpModal}>Close</button>
      </Modal>
      <Modal isOpen={showSignInModal} onRequestClose={closeSignInModal}>
        {/* Sign In Form or content */}
        <button onClick={closeSignInModal}>Close</button>
      </Modal>
    </div>
  );
};
