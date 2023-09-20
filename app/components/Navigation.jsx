/* eslint-disable no-return-assign */
import Link from "next/link";
import React from "react";
import styles from './Navigation.module.css'


export default function Navigation() {
  const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Contacto",
      route: "/contacto",
    },
    {
      label: "Productos",
      route: "/productos",
    },
  ];
  return (
    <div className={styles.navigation_container}>
      <p className="text-2xl">LOG</p> 
      <nav>
        <ul className={styles.nav_links}>
          {links.map(({ label, route }) => {
            return (
              <li key={label} >
                <Link href={route} className="text-gray-900 font-black mr-12">
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
