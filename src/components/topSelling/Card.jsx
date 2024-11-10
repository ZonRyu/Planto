import React from 'react'
import Button from '../Button'
import { LiaShoppingBagSolid } from 'react-icons/lia'

const Card = ({ img, imgStyles }) => {
  return (
    <div className='backdrop-blur-md bg-opacity-10 bg-white/5 border border-gray-600 max-h-[450px] max-w-[375px] rounded-[75px] p-10'>
        <div className='relative -top-32 flex flex-col items-center'>
            <img src={img} alt="Image" className={`${imgStyles}`} />
            <div className='mt-10 flex flex-col gap-y-5 mx-4 text-gray-300'>
                <h4 className=' text-3xl'>Calathea plant</h4>
                <p className=' max-w-[80%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className='flex flex-row items-center gap-x-4 justify-between'>
                    <p className='text-3xl'>
                        Rs. 359/-
                    </p>
                    <Button cardStyles="text-2xl px-2 float-right"><LiaShoppingBagSolid /></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card