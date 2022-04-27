import styles from "./MenuItem.module.css";
const MenuItem = (props) => {
  return (
    <div className={styles.menuItem}>
      <img src={props.image} alt={props.alt} />
      <div className={styles.menuItemDescription}>
        <h3>{props.itemName}</h3>
        <p>{props.itemDescription}</p>
      </div>
      <p>{props.price}</p>
    </div>
  );
};

export default MenuItem;
