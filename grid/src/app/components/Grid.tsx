import React from 'react';

const Grid = () => {
  return (
    <main className='grid grid-cols-6 grid-rows-4 h-screen gap-2 p-4'>
      <div className=' col-span-6 bg-cyan-950 text-white flex justify-center items-center'>Header</div>
      <div className='bg-orange-600 text-white flex justify-center items-center row-span-2'>Left Side Bar</div>
      <div className='bg-lime-500 text-white flex justify-center items-center col-span-2'>Content 1</div>
      <div className='bg-lime-500 text-white flex justify-center items-center col-span-2'>Content 2</div>
      <div className='bg-lime-500 text-white flex justify-center items-center col-span-2'>Content 3</div>
      <div className='bg-lime-500 text-white flex justify-center items-center col-span-2'>Content 4</div>
      
      <div className='bg-orange-600 text-white flex justify-center items-center row-span-2 row-start-2 col-start-6'>Right Side Bar</div>
      
      <div className='bg-cyan-950 text-white flex justify-center items-center col-span-6'>Footer</div>
    </main>
  )
}

export default Grid;
