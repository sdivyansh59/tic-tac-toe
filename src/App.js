import React,{useState} from 'react'
import './App.css';
import Card from './components/Card';
import checkWin from './checkWin';
import resetGame from './reset';
import updateArray from './update'


function App() {

  
  const [arr,setArr]=useState([
     ['*','*','*'],
     ['*','*','*'],
     ['*','*','*'],
  ])

  const [turn,setTurn]=useState(1)


  const clickedFunction=(id)=>{
    //
    console.log(`${id} btn clicked`);
    // check if it is already cicked?
    let row=parseInt(id/10)
    let col=(id%10)
    
    if(arr[row][col]==='*'){

      //arr[row][col]= turn==1 ? 1  : 0
       setArr(updateArray(row,col,arr,turn)) 

     // setArr()
     // checkWin(arr)? console.log(`${turn} win the Game`)  : (console.log("no one win.."))
     if(checkWin(arr)){
       console.log("inside check win")
       let result =window.confirm(`${turn} WIN THE GAME`)
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
      <h2 > {`${turn}  Turn`} </h2>
      <div className='grid-container'>
        {board}   
      </div>
      <button type="reset"  onClick={ ()=>resetGame(turn,arr,setTurn,setArr)}>Reset Game</button>
      
    </div>
  );
}



export default App ;
