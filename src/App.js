import React,{useState} from 'react'
import './App.css';
import Card from './components/Card';
import checkWin from './checkWin';
import resetGame from './reset';
import updateArray from './update'
//import Test from './components/Test'



function App() {

  
  const [arr,setArr]=useState([
     ['*','*','*'],
     ['*','*','*'],
     ['*','*','*'],
  ])

  const [turn,setTurn]=useState(1)


  const clickedFunction= (id)=>{
    //
    console.log(`${id} btn clicked`);
    // check if it is already cicked?
    let row=parseInt(id/10)
    let col=(id%10)
    
    if(arr[row][col]==='*'){

     // arr[row][col]= turn==1 ? '1'  : '0'

       let t=turn===1 ? '1'  : '0'
       setArr((prev)=>updateArray(row,col,prev,t) ) 
      
     // console.log("after update ")

     // checkWin(arr)? console.log(`${turn} win the Game`)  : (console.log("no one win.."))

    // Doubt : This checkWin fun is taking previous state value
              
              if(checkWin(arr)){
              console.log("inside check win")
              let t2= turn===1 ? 0: 1
              let result =window.confirm(` Player ${t2} WIN THE GAME`)
              if(result){
              resetGame(turn,arr,setTurn,setArr)
                 }
              }

      setTurn((prev)=>( prev===1 ? prev=0 : prev=1))
    }


  }


  const board=arr.map((row,rowIndex)=>(
             row.map((val,colIndex)=>(
                
                   <Card  key={(rowIndex * 10+colIndex)} id={(rowIndex * 10+colIndex)} arr={arr} clickedFunction={clickedFunction}/>
             ))
               
        ))



  return (
    <div className="App">
      <h2 > {`Player ${turn}  Turn`} </h2>
      <div className='grid-container'>
        {board}   
      </div>
      <button type="reset"  onClick={ ()=>resetGame(turn,arr,setTurn,setArr)}>Reset Game</button>
     
    </div>
  );
}


export default App ;
