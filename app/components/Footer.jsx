import React from "react";




export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row justify-center items-center text-center p-4 py-16 gap-4 text-2xl">
        <section className="">
          <ul className="flex justify-center flex-col ">
            <div className="flex justify-center gap-4 items-center">
              <li className="text-gray-50">Instagram:</li>
              <label htmlFor="" className="text-gray-50">marlon77_rodriguez</label>
            </div>
            <div className="flex justify-center gap-4 items-start ">
              <li className="text-gray-50">Telefono:</li>
              <label htmlFor="">
                <a
                  href="http://wa.me/+50765844123"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="text-gray-50">
                  +507 6584-4123
                </a>
              </label>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <li className="text-gray-50">Telefono:</li>
              <label htmlFor="">
                <a
                  href="http://wa.me/+50765844123"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="text-gray-50">
                  +507 6852-3696
                </a>
              </label>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <li className="text-gray-50">Email:</li>
              <label htmlFor="" className="text-gray-50">marlon7piri@gmail.com.pa</label>
            </div>
          </ul>
        </section>
        <section className="">
          <ul className="">
            <li className="text-gray-50">Paginas</li>
            <li className="text-gray-50">productos</li>
            <li className="text-gray-50">sobre nosotros</li>
            <li className="text-gray-50">trabaje con nosotros</li>
          </ul>
        </section>
        <section className="">
          <p className="text-gray-50">
            Todos los Derechos Reservados | Marlon y Antonio
            

            
          </p>
        </section>
      </div>
    </div>
  );
}
