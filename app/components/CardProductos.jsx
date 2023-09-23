
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default async function CardProductos({ data }) {

  /*  const comidas = productos.filter((producto)=>{
    return producto. =="comida"
  })  */
  return (
    <motion.div className="w-full h-full  grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 grid-flow-row justify-center items-center gap-8 py-24 px-10"   initial={{ opacity: 0.5 ,scale:0.7}}
    animate={{ opacity: 1 ,scale:1}} transition={{duration:0.5}}>
      {data.map((e) => {
        return (
          <Link
            className="w-[400px]  min-w-[250px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto"
            href={`/productos/${e.id}`}
            key={e.id}
           
          >
            <img
              className="rounded-t-lg w-full h-[250px] object-cover"
              src={e.imagen}
              alt={e.nombre}
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {e.nombre}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {e.descripcion}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${e.precio}
              </p>
            </div>
          </Link>
        );
      })}
    </motion.div>
  );
}
