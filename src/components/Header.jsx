import React from 'react'
import SubHeader from './SubHeader'
import MainMenu from './MainMenu'


export default function Header() {
  
  return (
    <div className='w-full h-[12%] bg-slate-800 text-white absolute flex flex-col justify-end'>
      
      <div className='flex justify-end grow relative'>
        <MainMenu/>
      </div>
      <SubHeader/>
    </div>
  )
}
