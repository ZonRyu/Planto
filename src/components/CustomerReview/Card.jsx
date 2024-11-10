import React from 'react'
import { LiaStarHalf, LiaStarSolid } from 'react-icons/lia'
import Anna from '../../assets/images/anna.png'

const Card = () => {
  return (
    <div className='backdrop-blur-md bg-opacity-10 bg-white/5 border border-gray-600 max-h-[450px] max-w-[375px] rounded-[50px] p-10'>
      <div className='flex gap-x-4 mb-4'>
        <img src={Anna} alt="" />
        <div className='flex flex-col justify-center gap-y-1'>
            <h4 className='text-2xl'>Anna Patel</h4>
            <div className='flex text-md text-yellow-500 justify-between'>
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarHalf />
            </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam,
      </p>
    </div>
  )
}

export default Card