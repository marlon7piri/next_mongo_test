"use client";

import React from "react";
import { motion } from "framer-motion";

const useFetch = async (id) => {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  const data = await res.json();
  /* await new Promise((resolve)=>setTimeout(resolve,3000)) */
  return data;
};
export default async function Detalles({ params }) {
  /*  const productosfiltrados = productos.filter((producto) => {
    return producto.id == params.id;
  });  */

  const data = await useFetch(params.id);
  console.log(params.id);

  return (
    <div className=" w-full h-full flex justify-center items-center px-12 py-24 ">
      <div className="w-full bg-white   rounded-lg  dark:bg-gray-800  lg:flex lg:flex-row lg:justify-between lg:items-center  md:flex md:flex-col sm:flex sm:flex-col selection:gap-4">
        <motion.img
          className="rounded-t-lg w-[30%] h-[400px] object-cover min-w-min"
          src={data.imagen}
          alt=""
          transition={{ duration: 1 }}
          initial={{translateX:-200,opacity:0.4 }}
         animate={{opacity:1,translateX:0}}
        />

        <div className="p-5 lg:w-[60%] sm:w-[100%] min-w-min">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.nombre}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.descripcion}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${data.precio}
          </p>

          <ul>
            <li>Ingrediente 1</li>
            <li>Ingrediente 2</li>
            <li>Ingrediente 3</li>
            <li>Ingrediente 4</li>
            <li>Ingrediente 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
