import React from 'react'
import Button from '../Button'
import Plant1 from '../../assets/images/plants/plant1.png'
import useWindowSize from '../../hooks/useWindowSize'

const Card = () => {
  const size = useWindowSize()
  const isMobile = size.width < 768 && 'relative -top-32'
  return (
    <div className='flex flex-col md:flex-row gap-y-16 md:gap-y-0 items-center justify-between backdrop-blur-md bg-opacity-10 bg-white/5 border h-[800px] md:h-[450px] border-gray-600 rounded-[75px] p-10'>
        <img src={Plant1} alt="" className='md:w-[80%] relative -top-32 md:-top-10 md:-left-20' />
        <div className={`${isMobile} flex flex-col text-gray-300 gap-y-4 md:max-w-[50%]`}>
            <h5 className='font-bold text-2xl max-w-[80%]'>We Have Small And Best O2 Plants Collection's</h5>
            <div className='flex flex-col gap-y-4 text-lg font-semibold md:w-[85%]'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua
                </p>
            </div>
            <div className='flex'>
                <Button cardStyles='px-8'>Explore</Button>
            </div>
        </div>
    </div>
  )
}

export default Card