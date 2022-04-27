import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import styles from "./Header.module.css";
import hamgurgerSVG from "../assests/hamburger-menu-svgrepo-com.svg";
import xIcon from "../assests/x-svgrepo-com.svg";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavHandler = () => {
    setToggleNav(!toggleNav);
  };

  let toggleContent;
  if (toggleNav) {
    toggleContent = (
      <img src={xIcon} alt="close navigation menu" height={20} width={20} />
    );
  } else {
    toggleContent = (
      <img
        src={hamgurgerSVG}
        alt="open navigation menu"
        height={20}
        width={20}
      />
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <img src={logo} alt="company logo" height={100} width={100}></img>
        <h1>Restaurant Mid-tier</h1>
      </div>
      <div className={styles.dropdownWrapper}>
        <button onClick={toggleNavHandler}>{toggleContent}</button>
      </div>
      <nav className={styles.nav} style={{ display: !toggleNav && "none" }}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link to="/" onClick={toggleNavHandler}>
              home
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="about" onClick={toggleNavHandler}>
              about
            </Link>
          </li>
          <li className={styles.navListItem}>
            <Link to="gallery" onClick={toggleNavHandler}>
              gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
