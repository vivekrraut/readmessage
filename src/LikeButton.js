import React, { useState } from "react";
import styles from "./Message.module.css";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.likeButtonContainer}>
      <div className={styles.flexes}>
        <button
          className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
          onClick={handleLikeClick}
        >
          <svg
            className={styles.heart}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isLiked ? "red" : "gray"}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <div className={styles.liked}>
          {isLiked && <span className={styles.likedText}>Liked !</span>}
        </div>
      </div>{" "}
    </div>
  );
};

export default LikeButton;
