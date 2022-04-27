import MenuSection from "./MenuSection";
import styles from "./Menu.module.css";
const Menu = (props) => {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>Menu</h2>
      {props.menuData.map((section) => (
        <MenuSection key={Math.random()} sectionTitle={section.title} items={section.items} />
      ))}
    </section>
  );
};

export default Menu;
