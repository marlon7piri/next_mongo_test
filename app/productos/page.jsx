'use client'

import React from "react";
import CardProductos from "@/components/CardProductos";




 const useFetch = async () => {
  const res = await fetch("http://localhost:3000/api/products");
 
  const data = await res.json();
  /* await new Promise((resolve)=>setTimeout(resolve,3000)) */
  return data;
}; 

export default async function Productos() {

 const data =  await useFetch();
 




  return (
    <div className="w-full h-full  p-12 flex justify-center items-center">
      <CardProductos data={data}/>
    </div>
  );
}
