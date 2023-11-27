import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-[70%] bg-slate-500 p-2 text-2xl font-bold text-white flex flex-col justify-end  bg-[url(`/img/placeholder.jpg`)]'>
        <div className='p-6'>Call to Action</div>
        <div className='px-6 pb-10'>
        <button className='border-2 border-white px-2 h-10 w-32'>Button</button>
        </div>
        <div className='flex gap-3 justify-center m-2'>
            <div className='bg-white rounded-full w-4 h-4'></div>
            <div className='bg-white rounded-full w-4 h-4'></div>
            <div className='bg-white rounded-full w-4 h-4'></div>
        </div>
    </div>
  )
}
