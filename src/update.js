
// update  2d stte array

const updateArray=(r,c,arr,turn)=>{
     let newArr=[]
     arr.map((row,rowIndex)=>{
         let a=[]
        if(rowIndex===r){
            row.map((val,valIndex)=>{
                 if(valIndex===c){
                      a.push(turn)
                 }else{
                     a.push(val)
                 }
            })
        }else{
            a=[...row]
        }
      newArr.push(a)
     })
    console.log(newArr)
     return newArr
}



export default updateArray