"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navigation() {
  const [isactive, setIsactive] = useState(true);
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

  const handlerToggle = () => {

    document.querySelector(".menu").classList.toggle("show");
      setIsactive(!isactive);
   
  };

  return (
    <div className="navigation_container">
      <p className="text-2xl">LOG</p>

      
        <ul className="menu">
          {links.map(({ label, route }) => {
            return (
              <li key={label}>
                <Link
                  href={route}
                  className="text-gray-900 font-black px-8 hover:text-sky-500  hover:underline transition duration-500 ease-in-out uppercase"
                  onClick={() => handlerToggle()}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      
      {isactive ? (
        <span className="toggle_menu" onClick={handlerToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </span>
      ) : (
        <span className="toggle_menu" onClick={handlerToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
      )}
    </div>
  );
}
