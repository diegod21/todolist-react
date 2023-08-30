import React, { useState } from 'react'

function Form(props){

    const [text , setText] = useState('') 

    function changeHandle(event){
        let t = event.target.value
        setText(t)
      }
      function addItem(event){
        event.preventDefault()
            if (text) {
             props.onAddItem(text)
             setText("")
            }
        }
   
    return(
        <form>
        <input onChange={changeHandle} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
      </form>
    )
}
export default Form;