import React, { useEffect } from "react";

export default function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [callback]);
}
