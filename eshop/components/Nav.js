import React from "react";
import Link from "next/link";

import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.navList}>
        <li className={navStyles.navItem}>
          <Link  href="/" >
          <a  className={navStyles.navLink} >Home</a> 
          </Link>
        </li>
        <li className={navStyles.navItem}>
          <Link  href="/shop" className={navStyles.navLink}>
          <a  className={navStyles.navLink} >Shop</a> 
          </Link>
        </li>
        <li className={navStyles.navItem}>
          <Link href="/deliever" className={navStyles.navLink}>
            <a  className={navStyles.navLink} > We deliever to:</a> 
          </Link>
        </li>
        <li className={navStyles.navItem}>
          <Link href="/submitlist" className={navStyles.navLink}>
             <a  className={navStyles.navLink} >Post a Product</a> 
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
