import React from 'react'

function Cotizacion() {
  return (
    <div className='w-full h-full bg-gray-950 p-4 py-16'>
      <div className='w-full grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  grid-rows-1 justify-around text-center items-center'>
        <div>
          <p className='text-5xl font-black text-gray-50 uppercase'>Cotiza Ya!</p>
        </div>
        <div>
          <p className='text-left text-gray-50 font-medium text-2xl'>Si desea cotizar nuestro catering de comida y cocteles no dudes en escribirnos</p>
        </div>
        <div>
          <a href='http://wa.me/+50765844123' target='_blank' className='border bg-gray-50 border-gray-50 py-2 px-4 rounded-md hover:bg-sky-500 hover:text-gray-900 transition duration-500 text-2xl font-normal'>Cotizar</a>
        </div>
      </div>
    </div>
  )
}

export default Cotizacion