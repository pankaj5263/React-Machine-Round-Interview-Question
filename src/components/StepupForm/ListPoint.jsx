import React from 'react';
import Point from './Point';

function ListPoint({data, currentStage}) {
  return (
    data?.map((item) =><Point value={item.stage} currentStage={currentStage}/>)
  )
}

export default ListPoint