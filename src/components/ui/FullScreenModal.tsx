import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const FullScreenModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:fixed md:fixed inset-0 z-50 flex items-center justify-center bg-black lg:bg-opacity-50 md:bg-opacity-50 bg-opacity-0">
      <div className="bg-white rounded-lg shadow-lg  max-w-4xl w-full lg:mx-4 md:mx-4 mx-0 mt-4">
        {title && (
          <div className="border-b px-5 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-green-500">{title}</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
              onClick={onClose}
            >
              X
            </button>
          </div>
        )}
        <div className="p-5 lg:p-7 md:p-6 w-full">{children}</div>
      </div>
    </div>
  );
};

export default FullScreenModal;
