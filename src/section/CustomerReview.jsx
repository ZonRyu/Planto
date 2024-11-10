import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/CustomerReview/Card'

const CustomerReview = () => {
  return (
    <div className='flex flex-col items-center'>
        <SectionTitle title='Customer Review' />
        <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8 text-gray-300 mt-10'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default CustomerReview