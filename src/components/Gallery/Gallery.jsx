import React, { useState } from "react";
import styles from "./Gallery.module.css";
import PropTypes from "prop-types";
import GalleryModal from "./Modal/GalleryModal";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Galeria </h2>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleClick(image)}
            className={styles.image}
          />
        ))}
        {selectedImage && (
          <GalleryModal
            src={selectedImage.src}
            tags={selectedImage.alt}
            onClick={handleClose}
          />
        )}
      </div>
    </div>
  );
};
Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Gallery;
