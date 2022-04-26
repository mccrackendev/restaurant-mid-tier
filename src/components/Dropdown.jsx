import React, { useState } from "react";

const Dropdown = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavHandler = () => {
    setToggleNav(!toggleNav);
  };

  let content;
  if (toggleNav === true) {
    content = (
      <nav>
        <button onClick={toggleNavHandler}>Close Nav</button>
        <ul>
          <li>dropdown menu item 1</li>
          <li>dropdown menu item 2</li>
          <li>dropdown menu item 3</li>
        </ul>
      </nav>
    );
  }

  if (toggleNav === false) {
    content = <button onClick={toggleNavHandler}>Show Nav</button>;
  }

  return <div>{content}</div>;
};

export default Dropdown;
