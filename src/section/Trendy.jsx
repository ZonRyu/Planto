import React from 'react'
import Plant2 from '../assets/images/plants/plant2.png'
import Plant3 from '../assets/images/plants/plant3.png'
import Card from '../components/trendy/Card'
import SectionTitle from '../components/SectionTitle'

const Trendy = () => {
  return (
    <div className='flex flex-col items-center gap-y-32 lg:gap-y-20 mb-20'>
        <SectionTitle title='Our Trendy plants' />
        <Card 
         img={Plant2} 
         title='For Small Decs Ai Plat'
         desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
         price='599'
         containerStyles="md:flex-row"
         imgStyles='w-3/4 md:w-2/5 -top-32 md:-top-16'
        />
        <Card 
         img={Plant3} 
         title='For Small Decs Ai Plat'
         desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
         price='579'
         containerStyles="md:flex-row-reverse"
         imgStyles='w-[90%] md:w-[60%] lg:w-[45%] -top-32 md:-top-10 md:-right-20'
        />
    </div>
  )
}

export default Trendy