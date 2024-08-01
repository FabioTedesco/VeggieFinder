import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";

const Modal = () => {
  const { isModalVisible, errorMessage, setIsModalVisible } =
    useContext(GlobalContext);

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-black text-xl font-semibold mb-4">Error</h2>
        <p className="text-black mb-4">{errorMessage}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={setIsModalVisible}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default Modal;
