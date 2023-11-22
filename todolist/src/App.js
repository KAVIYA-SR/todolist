import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Items from './components/Items';

function App() {
  const [items,setItems]=useState([]);
  const addItems =(text) =>{
    setItems((prev) =>{
      return [...prev,text];
    })
  }
  const deleteItems =(id) =>{
    setItems((prev) =>{
      return prev.filter((item,index)=>{
        return index!==id;
      }) 
    })
  }
  // console.log(items);
  return (
    <div className="container">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <Input addItems={addItems}/>
      <div>
        <ul>{
          items.map((item,index) =>{
            return <Items key={index} item={item} deleteItems={deleteItems} id={index}/>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
