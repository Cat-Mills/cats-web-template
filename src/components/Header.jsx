import React from 'react'
import SubHeader from './SubHeader'
import MainMenu from './MainMenu'
import { ShopCart } from '../../icons'
import { NavLink } from 'react-router-dom'


export default function Header() {
  
  return (
    <div className='w-full h-[12%] bg-slate-800 text-white absolute flex flex-col justify-end'>
      
      <div className='flex justify-end grow relative items-center'>
        <NavLink to={'/'} className='flex absolute left-2'>
          <img className='h-full w-24' src="/logo.png" alt="logo" />
        </NavLink>
        <NavLink to={'/Cart'} className='flex group text-white h-full w-10 justify-center relative'>
          <ShopCart/>
                <div className="absolute bottom-1/2 right-0 mb-1 inline-flex items-center px-[5px] rounded-full text-xs font-semibold bg-opacity-60 bg-slate-400 text-white">
                  3
                </div>
        </NavLink>
        <MainMenu/>
      </div>
      <SubHeader/>
    </div>
  )
}
