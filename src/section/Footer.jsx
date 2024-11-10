import React from 'react'
import Logo from '../assets/images/logo.png'
import Button from '../components/Button'

const Footer = () => {
  return (
    <footer className='bg-[#222C1D] p-10'>
        <div className='flex flex-col md:flex-row gap-y-12 md:gap-y-0 text-white justify-between md:h-[280px]'>
            <div className='md:w-2/5 flex flex-col justify-between'>
                <div>
                    <div className='flex items-center'>
                        <img src={Logo} alt="Logo" className='w-14 h-14'/>
                        <h1 className='text-white text-3xl font-bold'>Planto.</h1>
                    </div>
                    <p className='mx-2 my-4 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='mx-2 flex gap-x-4 font-bold items-end'>
                    <h2>FB</h2>
                    <h2>TW</h2>
                    <h2>LI</h2>
                </div>
            </div>
            <div className='md:w-1/5'>
                <h1 className='font-bold text-xl'>Quick Link's</h1>
                <div className='mt-4 flex md:flex-col gap-x-2 md:gap-y-4'>
                    <p>Home</p>
                    <p>Type's Of Plant's</p>
                    <p>Contact</p>
                    <p>Privacy</p>
                </div>
            </div>
            <div className='md:w-[30%] flex flex-col justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>For Every Update.</h1>
                    <div className='flex relative border border-white rounded p-0.5 mt-4'>
                        <input className="w-full bg-transparent py-2 px-3 placeholder:text-gray-300" type="text" placeholder="Enter Email" />
                        <Button cardStyles='bg-white text-black px-4 absolute right-0.5'>Subscribe</Button>
                    </div>
                </div>
                <p className='font-semibold'>planto © all right reserve</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer