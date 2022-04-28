import { galleryImages } from "../App.js";
import styles from "./Gallery.module.css";
// Gallery page to highlight photos from the restaurant and provide more marketing depth.
const Gallery = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.gallerySectionHeading}>
        <h2>Gallery</h2>
        <a href="/">Follow us on Instagram</a>
      </div>
      <div className={styles.gallerySectionGalleryWrapper}>
        {galleryImages.map((image) => (
          <div key={Math.random()} className={styles.galleryImageWrapper}>
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              title={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
