import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/topSelling/Card'
import Plant2 from '../assets/images/plants/plant2.png'
import Plant4 from '../assets/images/plants/plant4.png'
import Plant5 from '../assets/images/plants/plant5.png'
import Plant6 from '../assets/images/plants/plant6.png'
import Plant7 from '../assets/images/plants/plant7.png'
import Plant8 from '../assets/images/plants/plant8.png'

const TopSelling = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <SectionTitle title='Our Top Selling' />
      <div className='mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-28'>
        <Card img={Plant4} />
        <Card img={Plant2} imgStyles='w-[83%]' />
        <Card img={Plant5} />
        <Card img={Plant6} />
        <Card img={Plant7} />
        <Card img={Plant8} />
      </div>
    </div>
  )
}

export default TopSelling