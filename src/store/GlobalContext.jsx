import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (error) => {
    console.error(error.response.data.message);
    setErrorMessage(error.response.data.message);
    setIsModalVisible(true);
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          query,
          setQuery,
          submittedQuery,
          setSubmittedQuery,
          isModalVisible,
          setIsModalVisible,
          errorMessage,
          setErrorMessage,
          handleError,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default ContextProvider;
