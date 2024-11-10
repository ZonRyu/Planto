import React from 'react'
import Button from '../Button'
import { GoPlay } from 'react-icons/go'
import Card from '../Card'
import { LiaStarHalf, LiaStarSolid } from 'react-icons/lia'
import Plant1 from '../../assets/images/plants/plant1.png'
import Anna from '../../assets/images/anna.png'
import useWindowSize from '../../hooks/useWindowSize'

const Header = () => {
const size = useWindowSize()
  return (
    <div className='home flex my-20 lg:my-32 justify-between text-gray-300 w-full'>
        <div className='flex flex-col lg:basis-4/6 lg:max-w-[725px]'>
            <div className='w-full'>
                <h2 className='text-6xl lg:text-8xl font-bold'>Breath Natureal</h2>
                <p className='lg:ml-1.5 lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex items-center gap-x-6'>
                <Button cardStyles="my-4 px-8">Explore</Button>
                <div className='flex items-center gap-x-1.5'>
                    <GoPlay className='w-8 h-8' />
                    <p>Live Demo...</p>
                </div>
            </div>
        </div>
        {
            size.width > 1024 && (
                <>
                    <Card containerStyle="basis-2/6 justify-end" img={Plant1} title="Calathea plant" type="Trendy House Plant" />
                    <div className='absolute -bottom-36'>
                        <div className='backdrop-blur-sm bg-opacity-10 bg-white/5 border border-gray-500 rounded-[55px] p-7'>
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
                            <div className='w-[300px]'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default Header