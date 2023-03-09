import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = useState([]);

  function dismissToast(toastId) {
    setToasts((previousToasts) => {
      const filteredToasts = previousToasts.filter(({ id }) => id !== toastId);
      return filteredToasts;
    });
  }
  function addToast(event) {
    event.preventDefault();
    setToasts((previousToasts) => {
      return [...previousToasts, { variant, message, id: crypto.randomUUID() }];
    });
    setVariant(VARIANT_OPTIONS[0])
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf toasts={toasts} dismissToast={dismissToast} />
      )}

      <form onSubmit={(event) => addToast(event)}className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={(event) => setVariant(event.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button >Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
