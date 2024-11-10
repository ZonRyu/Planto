import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/OurBestO2/Card'

const OurBest = () => {
  return (
    <div className='flex flex-col items-center gap-y-20 md:gap-y-0'>
        <SectionTitle title='Our Best o2' />
        <Card />
    </div>
  )
}

export default OurBest