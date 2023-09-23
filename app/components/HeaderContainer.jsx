

import React from "react";
import styles from "./HeaderContainer.module.css";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";

const HeaderContainer = () => {




  return (
    <div className={styles.wallpaper}>
      <div
        className="w-full  max-w-[400px] p-4  flex  flex-col gap-10 pt-40" 
       
      >
        <h1 className=" w-max lg:text-5xl sm:text-4xl md:text-4xl text-gray-50 font-black uppercase"  >
          Come la Mejor Hamburguesa
        </h1>

        <Link
          href="/productos"
          className="text-gray-900 bg-gradient-to-br from-gray-50 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-max"
        >
          Ver nuestras Hamburguesas
        </Link>
      </div>
    </div>
  );
};

export default HeaderContainer;
