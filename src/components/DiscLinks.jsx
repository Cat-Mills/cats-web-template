import React from 'react'

export default function DiscLinks() {
  return (
    <div className='w-full h-[30%] bg-slate-400 text-white py-4'>
        <div className='w-full h-full flex justify-around items-center px-10'>
            <div className='bg-white rounded-full w-40 h-40 overflow-hidden flex justify-center'>
                <img className='' src="/candle.jpg" alt="Candle" />
            </div>
            <div className='bg-white rounded-full w-40 h-40 overflow-hidden flex justify-center'>
                <img src="/hoodie.jpg" alt="" />
            </div>
            <div className='bg-white rounded-full w-40 h-40 overflow-hidden flex justify-center'>
                <img src="/matchbox.png" alt="" />
            </div>
        </div>
    </div>
  )
}
