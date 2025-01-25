import React from 'react'
import ListItem from './ListItem';
import { useNavigate } from 'react-router-dom';
function DropDown({dropDownList}) {
  const navigate = useNavigate();

  const handleChange = (evt)=>{
    const path = evt.target.value && evt.target.value;
    navigate(path);
  }
  const options = dropDownList?.map(item => <ListItem item={item}/>)
  return (
    <select onChange={handleChange}>
        <option disabled >Select Page</option>
        {options}
    </select>
  )
}

export default DropDown