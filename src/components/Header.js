import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
  const { pathname } = location;
  return (
    <nav className='flex justify-between bg-[#f6f8fa] shadow-md px-14 p-4'>
        <Link to="/" className='text-4xl font-bold text-red-600'>Blood Bridge</Link>
        <ul className='flex items-center text-lg font-semibold'>
         {pathname !== '/registration' ?  <Link to='/registration' className='mx-2 cursor-pointer hover:scale-105'>Register as Blood Donar</Link>
            :<Link to='/find-donar' className='mx-2 cursor-pointer hover:scale-105'>Find a Blood Donar</Link>}
        </ul>
    </nav>
  )
}

export default Header