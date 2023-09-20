import Link from 'next/link'
import React from 'react'

function PromoCocteleria() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-rows-1 bg-gray-50 h-[600px] relative'>
      <section className='flex justify-center items-center'>
          <h1 className="text-6xl font-black leading-none text-gray-900 md:text-4xl lg:text-6xl uppercase w-[500px]">Combina nuestra<span className='text-pink-950'> comida</span> con los <span className='text-sky-600'>deliciosos </span><span className='text-green-950'>cocteles</span> de autor</h1>
        </section>
        <section className="overflow-hidden">
        <img src="https://res.cloudinary.com/dxi9fwjsu/image/upload/v1694648793/fotos_portafolio2/The_Most_Wish_Listed_Stays_and_Most_Booked_Online_Experiences_by_State_qiwl9n.jpg" alt="" className='w-full h-full object-cover '/></section>
        
      </div>
    </div>
  )
}

export default PromoCocteleria