import React from 'react'
import Navbar from './Navbar'
import Header from '../components/home/Header'
import Trendy from './Trendy'
import TopSelling from './TopSelling'
import CustomerReview from './CustomerReview'
import OurBest from './OurBest'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className='head px-10 py-7'>
        <Navbar />
        <div className='flex flex-col gap-y-36'>
          <Header />
          <Trendy />
        </div>
      </div>
      <div className='body px-10 bg-[#1B2316] py-24 flex flex-col gap-y-40'>
        <TopSelling />
        <CustomerReview />
        <OurBest />
      </div>
      <Footer />
    </>
  )
}

export default Home