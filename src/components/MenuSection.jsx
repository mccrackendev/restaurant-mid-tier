import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "./MenuSection.module.css";

const MenuSection = (props) => {
  const [showSection, setShowSection] = useState(false);

  const showSectionHandler = () => {
    setShowSection(!showSection);
  };
  const arrowIcon = showSection ? "↑" : "↓";

  let content;
  if (showSection) {
    content = (
      <div className={styles.menuSectionGridWrapper}>
        {props.items.map((item) => (
          <MenuItem
            key={Math.random()}
            image={item.image}
            alt={item.alt}
            itemName={item.name}
            itemDescription={item.description}
            price={item.price}
          />
        ))}
      </div>
    );
  }

  if (!showSection) {
    content = null;
  }
  return (
    <section className={styles.menuSection} onClick={showSectionHandler}>
      <h2>
        {props.sectionTitle} {arrowIcon}
      </h2>
      <br />
      {content}
    </section>
  );
};

export default MenuSection;
