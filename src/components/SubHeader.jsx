import React from 'react'
import { NavLink } from 'react-router-dom'
import ShopMenu from './ShopMenu'

export default function SubHeader() {
  return (
    <div className='w-full h-1/3 bg-slate-700 px-2 flex items-center'>
        <div className='w-full h-full flex items-center justify-around'>
            <ShopMenu/>
            <NavLink to={'/SilverSubs'}>Silver Subs</NavLink>
            <NavLink to={'/Calendar'}>Calendar</NavLink>
            <NavLink to={'/AboutUs'}>About Us</NavLink>
            <NavLink to={'/Profile'}>Profile</NavLink>
        </div>
    </div>
  )
}
