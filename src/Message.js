import React, { Fragment } from "react";
import styles from "./Message.module.css";
import LikeButton from "./LikeButton";

const Message = ({ message, isSender }) => {
  const messageClass = isSender
    ? `${styles.messageText} ${styles.sender}`
    : styles.messageText;

  return (
    <Fragment>
      <div className={styles.messageContainer}>
        <p className={messageClass}>{message}</p>
        <div>
          <LikeButton />
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
