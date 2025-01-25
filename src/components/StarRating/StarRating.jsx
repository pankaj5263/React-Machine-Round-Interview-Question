import React, {useState} from 'react'
import Stars from './Stars'
function StarRating() {
   const [rating, setRating] = useState(null);
   const handleRating =(index) => {
    setRating(index);
   }
  return (
    <div className='mt-10 flex justify-center'><Stars rating={rating} handleRating={handleRating}/></div>
  )
}

export default StarRating