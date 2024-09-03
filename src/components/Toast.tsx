import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-hide after 3 seconds

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, [onClose]);

  return (
    <div
      className={`fixed top-28 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-lg flex items-center space-x-4 ${
        type === 'success' ? 'bg-green-300 text-white' : 'bg-red-300 text-white'
      }`}
    >
      <p>{message}</p>
      <button
        className="ml-4 text-lg"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
