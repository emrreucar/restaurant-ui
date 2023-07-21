import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] ">
      {/* TEXT CONTAINER */}
      <div className='flex-1 text-white flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
        <p className='xl:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus at consequuntur, facere eos dolor.</p>
        <CountDown />
        <button className='bg-red-500 py-3 px-6 rounded-md text-white'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='flex-1 w-full relative md:h-full'>
        <Image src={'/offerProduct.png'} alt='' fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer