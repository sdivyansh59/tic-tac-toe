
// update  2d stte array

const updateArray=(r,c,arr,turn)=>{
   
    
  let newArr= arr.map((row,rowIndex)=>{
        
        if(rowIndex===r){
               let a=[]
           a= row.map((val,valIndex)=>{
                 if(valIndex===c){
                     // a.push(turn)
                     return turn
                 }else{
                    // a.push(val)
                    return val
                 }
            })
            return a
        }else{
           // a=[...row]
           return row
        }
     /// newArr.push(a)
     })

  //  console.log(newArr)
     //console.log("inside update function ")
   
     return newArr
}



export default updateArray