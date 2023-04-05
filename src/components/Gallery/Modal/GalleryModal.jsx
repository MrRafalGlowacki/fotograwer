import React, { useEffect } from "react";
import styles from "./GalleryModal.module.css";
import PropTypes from "prop-types";

const GalleryModal = ({ onClick, src, tags }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <>
      <div className={styles.modal} onClick={onClick}>
        <div className={styles.modalContent}>
          <img src={src} alt={tags} className={styles.modalImage} />
          <button className={styles.closeButton} onClick={onClick}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;

GalleryModal.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  tags: PropTypes.string,
};
