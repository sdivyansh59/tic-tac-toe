import React from 'react'

function Card(props) {
    const {id,clickedFunction,arr } = props
    let row=parseInt(id/10)
    let col=(id%10)
   // console.log(id/10,id%10)
   let val=arr[row][col] 
    return (
        
             <div className="card" id={id} onClick={()=>clickedFunction(id)}> {val} </div>
        
    )
}



export default Card
