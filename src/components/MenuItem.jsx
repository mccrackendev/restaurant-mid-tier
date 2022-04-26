const MenuItem = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.alt}></img>
      <div>
        <h3>{props.itemName}</h3>
        <p>{props.itemDescription}</p>
      </div>
      <p>{props.price}</p>
    </div>
  );
};

export default MenuItem;
