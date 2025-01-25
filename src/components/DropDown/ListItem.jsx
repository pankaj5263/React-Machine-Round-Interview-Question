import React from 'react'

function ListItem({item}) {
  return (
    <option id={`id-${item.name}`} value={item?.path}>{item.name}</option>
  )
}

export default ListItem;