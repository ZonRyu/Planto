import React from 'react'
import Button from '../Button'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import useWindowSize from '../../hooks/useWindowSize'

const Card = ({ img, title, desc, price, containerStyles, imgStyles }) => {
  const size = useWindowSize()
  const isMobile = size.width < 768 && 'relative -top-32'
  return (
    <div className={`flex flex-col ${containerStyles} items-center justify-between backdrop-blur-md bg-opacity-10 bg-white/5 border border-gray-600 max-h-[475px] md:max-h-[375px] rounded-[75px] p-10`}>
        <img src={img} alt="Image" className={`relative ${imgStyles}`} />
        <div className={`md:w-3/4 lg:w-1/2 ${isMobile} flex flex-col gap-y-4 mx-4`}>
          <h4 className='text-white font-bold text-xl lg:text-3xl'>{title}</h4>
          <p className='text-white'>
              {desc}
          </p>
          <p className='text-white font-bold text-4xl'>
              Rs. {price}/-
          </p>
          <div className='text-white flex flex-row items-center gap-x-4'>
              <Button cardStyles='px-8'>Explore</Button>
              <Button cardStyles="text-2xl px-2"><LiaShoppingBagSolid /></Button>
          </div>
        </div>
    </div>
  )
}

export default Card