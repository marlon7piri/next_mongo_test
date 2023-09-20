import Link from "next/link";
import React from "react";

export default async function CardProductos({ productos }) {


  const comidas = productos.filter((producto)=>{
    return producto.categoria =="comida"
  })
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-24">
      {comidas.map((e) => {
        return <Link className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" href={`/productos/detalles/${e.id}`}>
        <img className="rounded-t-lg w-full h-[250px] object-cover" src={e.imagen} alt={e.nombre} />

        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {e.nombre}
            </h5>
        
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {e.short_description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${e.precio}
          </p>
        </div>
      </Link>
      })}
    </div>
  );
}
