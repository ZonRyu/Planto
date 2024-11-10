import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className='w-auto mb-20 relative'>
        <div className='w-10 h-10 border-white/45 border-t-[3px] border-r-[3px] rounded border-gradient absolute -right-5 -top-2'></div>
        <div className='w-10 h-10 border-white/45 border-b-[3px] border-l-[3px] rounded border-gradient absolute -left-5 -bottom-3'></div>
        <h4 className='text-white w text-4xl font-bold '>{title}</h4>
    </div>
  )
}

export default SectionTitle