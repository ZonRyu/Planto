import React from 'react'
import Logo from '../assets/images/logo.png'
import { CiMenuFries, CiSearch, CiShoppingCart } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'

const Navbar = () => {
  const size = useWindowSize()

  return (
    <nav className='bg-transparent mb-10'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-x-2'>
                <img className='w-10 h-10' src={Logo} alt="Logo" />
                <h1 className='font-bold text-white'>Planto.</h1>
            </div>
            {
                size.width > 768 && (
                    <div className='flex items-center'>
                        <ul className='text-white flex gap-x-6'>
                            <li>Home</li>
                            <li className='flex items-center gap-x-1'>
                                Plants Type
                                <FaChevronDown className='text-xs mt-1' />
                            </li>
                            <li>More</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                )
            }
            <div className='text-2xl flex items-center gap-x-6'>
                <CiSearch className='text-white' />
                <CiShoppingCart className='text-white' />
                <CiMenuFries className='text-white' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar