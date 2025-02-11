import React from 'react'

function ButtonDiv({handlePrevious, handleNext}) {
  return (
    <div className='flex justify-between w-180 m-30'>
    <button className='cursor-pointer p-2 rounded-2xl text-amber-100 bg-blue-500' onClick={handlePrevious}>Prvious</button>
    <button className='cursor-pointer p-2 rounded-2xl text-amber-100 bg-blue-500' onClick={handleNext}>Next</button>
    </div>
  )
}

export default ButtonDiv