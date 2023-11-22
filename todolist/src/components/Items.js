import React from 'react'

const Items = (props) => {
  return (
    <div onClick = {() =>props.deleteItems(props.id)}>
        <li>{props.item}</li>
    </div>
  )
}

export default Items