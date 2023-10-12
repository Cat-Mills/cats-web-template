import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bands from './pages/Bands.jsx'
import Calendar from './pages/Calendar.jsx'
import About from './pages/About.jsx'
import Merch from './pages/Merch.jsx'
import Gallery from './pages/Gallery.jsx'
import Header from './elements/Header.jsx'
import Login from './pages/Login.jsx'
import './index.css'
import { useState } from 'react'

export default function App({dark}) {
const [darkMode, setDarkMode] = useState(dark)
  return (
    <div className='dark:text-white dark:bg-zinc-700'>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> } />

        <Route path='/bands' element={<Bands/>} />

        <Route path='/calendar' element={<Calendar darkMode={darkMode}/>} />

        <Route path='/about' element={<About/>} />

        <Route path='/merch' element={<Merch/>} />
        
        <Route path='/gallery' element={<Gallery/>} />

        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}