import React,{useState} from 'react'


function Test() {

  const [count,setCount]= useState(0)
  
  function fun(){
    setCount((prev)=>10)
  }

    return (
        <div >
             <h1>This is Test component</h1>
             <button onClick={fun}>{count}</button>
        </div>
    )
}

export default Test
