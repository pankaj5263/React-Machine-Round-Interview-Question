import React from 'react'

function ShowData({data, currentStage}) {
  return (
    data?.filter(item => item.stage==currentStage && item.name)
        .map(item => (
          <div key={item.id}>{item.name}</div> 
        ))
  )
}

export default ShowData