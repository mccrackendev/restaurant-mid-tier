import { Fragment, useState } from "react";
import MenuItem from "./MenuItem";

const MenuSection = (props) => {
  const [showSection, setShowSection] = useState(false);
  console.log(props);

  const showSectionHandler = () => {
    setShowSection(!showSection);
  };

  let content;
  if (showSection) {
    content = (
      <Fragment>
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
      </Fragment>
    );
  }

  if (!showSection) {
    content = null;
  }
  return (
    <section>
      <h2 onClick={showSectionHandler}>{props.sectionTitle}</h2>
      <br />
      {content}
    </section>
  );
};

export default MenuSection;
