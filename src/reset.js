



const resetGame= (turn,arr,setTurn,setArr) =>{
    
   console.log('inside reset function',turn,arr)
   setTurn(1)
    setArr([
      ['*','*','*'],
      ['*','*','*'],
     ['*','*','*'],
  ] )

}





export default resetGame;