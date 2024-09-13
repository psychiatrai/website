import React from 'react';

const Modal = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#242B51] rounded-lg shadow-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4 text-dark dark:text-white">Notification</h3>
        <p className="mb-6 text-dark dark:text-white">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-primary py-2 px-4 text-white rounded hover:bg-opacity-80 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
