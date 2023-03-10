import React, { createContext, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = createContext();

function ToastProvider({ children }) {
  useEscapeKey(clearToasts)
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
  function clearToasts(){
    setToasts([])
  }
  function addToast(variant, message) {
    setToasts((previousToasts) => {
      return [...previousToasts, { variant, message, id: crypto.randomUUID() }];
    });
  }
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
