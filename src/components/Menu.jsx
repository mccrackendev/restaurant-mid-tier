import MenuSection from "./MenuSection";

const Menu = (props) => {
  return (
    <section>
      <h2>Menu</h2>
      {props.menuData.map((section) => (
        <MenuSection key={Math.random()} sectionTitle={section.title} items={section.items} />
      ))}
    </section>
  );
};

export default Menu;
