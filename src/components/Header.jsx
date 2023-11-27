import React from 'react'
import SubHeader from './SubHeader'
import MainMenu from './MainMenu'
import { ShopCart } from '../../icons'
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../shared/CartContext.jsx";

export default function Header() {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  
  return (
    <div className='w-full absolute h-[12vh] bg-slate-800 text-white  flex flex-col justify-end'>
      
      <div className='flex justify-end grow relative items-center'>
        <NavLink to={'/'} className='flex absolute left-2'>
          <img className='h-full w-24' src="/logo.png" alt="logo" />
        </NavLink>
        <NavLink to={'/Cart'} className='flex group text-white h-full w-10 justify-center items-center relative'>
          <ShopCart/>
                {productCount > 0 && 
                <div className="absolute bottom-1/2 right-0 mb-1 inline-flex items-center px-[5px] rounded-full text-xs font-semibold bg-opacity-60 bg-slate-400 text-white">
                  {productCount}
                </div>}
        </NavLink>
        <MainMenu/>
      </div>
      <SubHeader/>
    </div>
  )
}
