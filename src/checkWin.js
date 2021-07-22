

 const checkWin= (arr)=>{
   // look horizontal 
   console.log(arr,"indise check win function ")
   let ans=false

// check vertical

 for(let i=0;i<3;i++){
       let match=undefined
       let k=0
     for(let j=0;j<3;j++){ 
         if(arr[i][j]==='*') break;
        if(match===undefined){
            match=arr[i][j]
        }
         if(arr[i][j]===match){
             k++
         }else{
             break;
         }
     }
     if(k===3){
         ans=true;
         return ans;
     }
  }


   // check horizontal

  for(let j=0;j<3;j++){
       let match=undefined
       let k=0
     for(let i=0;i<3;i++){ 
         if(arr[i][j]==='*') break;
        if(match===undefined){
            match=arr[i][j]
        }
       
         if(arr[i][j]===match){
             k++
         }else{
             break;
         }
     }
     if(k===3){
         ans=true;
         return ans;
     }
  }




   // check diagonal   \
  //console.log("inside diagonal")
   let k=0;
   let match=arr[0][0]
   for(let i=0, j=0;i<3 && j<3 ;i++,j++){
         if(arr[i][j]==='*') break;
         if(arr[i][j]===match) k++
         else  break
   }
   //console.log(k)
    if(k===3){
         ans=true;
         return ans;
     }


     k=0;
    match=arr[2][0]
   for(let i=2, j=0;i>=0 ;i--,j++){
         if(arr[i][j]==='*') break;
         if(arr[i][j]===match) k++
         else  break
   }
    if(k===3){
         ans=true;
         return ans;
     }

   
   return ans
 }



 export default checkWin