import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = {

    toasts,
    addToast,
    dismissToast,
  };
  function dismissToast(toastId) {
    setToasts((previousToasts) => {
      const filteredToasts = previousToasts.filter(({ id }) => id !== toastId);
      return filteredToasts;
    });
  }
  function addToast(event, variant, message) {
    event.preventDefault();
    setToasts((previousToasts) => {
      return [...previousToasts, { variant, message, id: crypto.randomUUID() }];
    });

  }
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
