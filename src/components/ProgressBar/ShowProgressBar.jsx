import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'
function ShowProgressBar({count}) {
  const arr = new Array(count);
  arr.fill(0);
  const [progressBarList, setProgressBarList] = useState([]);

  useEffect(()=>{
   setProgressBarList(arr);
  },[count]);

  const handleProgressBar=(id)=>{
   const arr = progressBarList.filter((_,i)=> i!=id);
   setProgressBarList(arr);
  }

  console.log(progressBarList);
  return (
    <div className='flex justify-center mt-10'>
      <div className='flex flex-col gap-5'>
      <div>ShowProgressBar</div>
      {progressBarList.map((_, index)=><ProgressBar key={index} index={index} handleProgressBar ={(id)=>{handleProgressBar(id)}}/>)}
      </div>
      
    </div>
  )
}

export default ShowProgressBar