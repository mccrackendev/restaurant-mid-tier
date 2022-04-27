import { galleryImages } from "../data/data";
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
          <div className={styles.galleryImageWrapper}>
            <img
              key={Math.random()}
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
