import Link from "next/link";
import React from "react";

function PromoComida() {
  return (
    <div className="w-full h-screen bg-sky-200 ">
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 grid-rows-2  overflow-hidden">
        <section className="w-full h-screen bg-center bg-cover  bg-no-repeat bg-[url('https://res.cloudinary.com/dxi9fwjsu/image/upload/v1694624893/fotos_portafolio2/wallapaperubicacion1.jpg')] bg-gray-500 bg-blend-multiply">
          <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl uppercase">
              Prueba nuestra mejor hamburguesa
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Elaborada con pan de masa madre de ajonjolis
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/productos"  className="text-gray-900 bg-gradient-to-br from-gray-50 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-max">Comida</Link>
            </div>
          </div>
        </section>
        
        <section className="w-full h-screen bg-center bg-cover  bg-no-repeat bg-[url('https://res.cloudinary.com/dxi9fwjsu/image/upload/v1694648498/fotos_portafolio2/Designer_Clothes_Shoes_Bags_for_Women___SSENSE_csphtd.jpg')] bg-gray-50 bg-blend-multiply">
          <div className=" mx-auto max-w-screen-xl text-center py-24 lg:py-56">
         
           
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/*   <Link href="/productos"  className="text-gray-900 bg-gradient-to-br from-gray-50 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-max">Hamburguesas</Link> */}
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default PromoComida;
