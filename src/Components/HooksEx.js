import React,{useState} from 'react'

function HooksEx() {
    const[count,setCount]=useState(66)
    let inc=()=>{
        setCount(count+1)
    }
  return (
    <div>HooksEx<br/>
    {count}
    <button onclick={inc}>Click{count}</button>
    </div>
  )
}

export default HooksEx