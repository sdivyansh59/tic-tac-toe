import React,{useState} from 'react'


function Test() {

  const [arr2,setArr2]=useState([
    [1,2,3],
    [11,22,33],
    [111,222,333]
  ])

  

    return (
        <div >
             <h1>This is Test component</h1>
        </div>
    )
}

export default Test
