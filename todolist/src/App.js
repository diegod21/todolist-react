import './App.css';
import React, { useState } from 'react'

import List from './list';
import Form from './form'

function App() {
  
  const [items, setItems] = useState([])
  function onAddItem(item){
    setItems([...items, item])
  }
   
  return (
    <div className="">
      <h1>Todo</h1>

      <Form onAddItem={onAddItem}></Form>

      <List items={items}></List>
    </div>
  );
}

export default App;
