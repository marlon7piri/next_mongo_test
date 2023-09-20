import React from "react";
import { productos } from "../../../data/api.js";

export default function page({ params }) {
  const productosfiltrados = productos.filter((producto) => {
    return producto.id == params.id;
  });

  return (
    <div className="flex justify-center items-center p-4 py-24">
      {productosfiltrados.map((e) => {
        return (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-[250px] object-cover" src={e.imagen} alt="" />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {e.nombre}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {e.short_description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${e.precio}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
