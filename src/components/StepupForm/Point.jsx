import React from 'react'

function Point({value=1, currentStage}) {
    if(value==1){
        return (
            <span className='p-2 border-2 rounded-xl bg-emerald-600 text-amber-50'>{value}</span>
          )
    }
   return(
    <span className='flex justify-center items-center'> <div className={`w-50 h-0 border-1 ${currentStage>=value ? "border-emerald-600": "border-gray-400"}`}></div><span className={`p-2 border-2 rounded-xl bg-emerald-600 text-amber-50 ${currentStage>=value ? "bg-emerald-600": "bg-gray-400"}`}>{value}</span></span>
   )
}

export default Point