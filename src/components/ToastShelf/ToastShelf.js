import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol role='region' aria-live="polite" aria-label="notification" className={styles.wrapper}>
      {toasts.map(({ variant, message, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              message={message}
              id={id}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
