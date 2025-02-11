import React, {useState} from 'react'
import ShowData from './ShowData';
import ListPoint from './ListPoint';
import ButtonDiv from './ButtonDiv';
import ShowSuccessfullMessage from './ShowSuccessfullMessage';
const data  = [{stage:1, name:"stage1"}, {stage:2, name:"stage2"}, {stage:3, name:"stage3"}, {stage:4, name:"stage4"}];

function StepupForm() {
  const [currentStage, setCurrentStage] = useState(data[0].stage);

  const handleNext = () => {
    if(currentStage==data[data.length-1].stage){
      return;
    }
    setCurrentStage(currentStage+1);
  }

  const handlePrevious = () => {
    if(currentStage==data[0].stage){
      return;
    }
    setCurrentStage(currentStage-1);
  }
  
  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
    <div>StepupForm</div>
    <div className='flex'>
     <ListPoint data={data} currentStage={currentStage}/>
    </div>
    <div>
   <ShowData data={data} currentStage={currentStage}/>
   {currentStage===data[data.length-1]?.stage && <ShowSuccessfullMessage/>}
</div>
<ButtonDiv handleNext={handleNext} handlePrevious={handlePrevious}/>
    </div>
    
  )
}

export default StepupForm