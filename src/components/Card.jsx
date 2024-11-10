import React from 'react'
import Button from './Button'

const Card = ({ containerStyle, img, title, type,}) => {
  return (
    <div className={`${containerStyle} flex`}>
        <div className='backdrop-blur-md bg-opacity-10 bg-white/5 border border-gray-600 max-h-[450px] max-w-[375px] rounded-[75px] p-10'>
            <div className='relative -top-32'>
                <img src={img} alt="Image" className='' />
                <div className='mt-10'>
                    <p className=''>{type}</p>
                    <h3 className='text-3xl mt-3'>{title}</h3>
                    <Button cardStyles="mt-4 px-8">Buy Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card