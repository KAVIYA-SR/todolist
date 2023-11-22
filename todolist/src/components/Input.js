import React, { useState } from 'react'

const Input = (props) => {
    const [text,setText]=useState("");
    const handleChange = (event) =>{
        setText(event.target.value);
    }
  return (
    <div className='form'>
        <input type='text' onChange={handleChange} value={text}></input>
        <button onClick={() =>{
            props.addItems(text);
            setText("");
        }}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default Input