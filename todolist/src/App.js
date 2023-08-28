import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  
  const [text , setText] = useState('') 
  const [items, setItems] = useState([])
    function changeHandle(event){
    let t = event.target.value
    setText(t)
  }
  function addItem(event){
    event.preventDefault()
    if (text) {
      setItems([...items, text])
      setText("")
    }

  }
  return (
    <div className="">
      <h1>Todo</h1>

      <form>
        <input onChange={changeHandle} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
      </form>

      <ul>
      {items.map(item=> <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
