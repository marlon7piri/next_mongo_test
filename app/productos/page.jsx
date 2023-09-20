'use client'

import React from "react";
import CardProductos from "../components/CardProductos";
import {productos} from '../data/api.js'


/* const useFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}; */

export default async function Productos() {

/*   const res =  await useFetch();
  console.log(res);
 */

 /*  console.log(productos) */

  return (
    <div className="w-full h-full bg-gray-200 p-4">
      <CardProductos productos={productos} key={productos.id}/>
    </div>
  );
}
