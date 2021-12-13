

//  function esayAway(a, b){
//      let motA =[];
//      let motB =[];
   
//      if(a.length != b.length ){
//          return false;
//      }else{
//          for(let i = 0 ; i<a.length;i++){
//              motA.push(a[i]);
//              motB.push(b[i]);
//          }
//          motA.sort();
//          motB.sort();
//          for(let i = 0 ; i<a.length;i++){
//              if(motA[i] !== motB[i]){
//                  return false;
//              }
//          }
//      }
//      return true;
//  }
//  console.log(esayAway("azmah","hamza"))


// function inveentoryList(){

//     let object ={
//         list : [],
//         add :(name)=>{
//          let bool = this.list.some(n=> n===name);
//          if(bool ===undefined){
//              this.list.push(name);
//          }
//         },
//         remove :(name) =>{
//             this.list.filter((iteme)=>iteme !== name);
//         },
//         getlist :()=>this.list,
//     }
//     return object;

// }


// console.log(inveentoryList().add("hamza"));
// console.log(inveentoryList().getlist());



// function inveentoryList(){

//     let object ={
//         list : [],
//         add : function(name){
            
//             let bool = this.list.some(n=> n===name);
//             if(bool ===undefined){
            
//             this.list.push(name);
         
//         },
//         remove :function(name){
//             this.list = this.list.filter((iteme)=>iteme !== name);
//         },
//         getlist :function(){
//             return this.list},
//     }

// }

// inveentoryList();




// function jumps(flagHeight , bigJump){
//     if(flagHeight<bigJump)return flagHeight;
//     else {
//         var jump = Math.floor(flagHeight/bigJump);
//         return jump+(flagHeight-bigJump*jump);
//     }
// }
// console.log(jumps(3,3));


// let num = [1,2,3,4,5]
// let numMap = num.map((iteme)=>iteme *2);
// let numfiltre = num.filter((iteme)=>iteme%2 ===0);
// let numReducer = num.reduce((sum,num)=>sum+=num,0)
// console.log(numReducer)

// let num = [1,2,3,4,5]
// function getMin(mot){
//     let tabresult = [];
//     let result = 0;
//     for(let i = 0 ;i <mot.length;i++){
//         let j = i+1;
//         console.log(tabresult);

//         while(j<mot.length && !tabresult.includes(mot[i])){
//             console.log(mot[j]);   
//             if(mot[j] === mot[i]){
// result++;
//             }
//             j++;

//         }
//         tabresult.push(mot[i]);

        
//     }
//     return result;

// }

// function getmax(){
    
// }

function getMaxValue(arr){
    let taille = arr.length;
    arr.sort((a, b) => b - a);
    let firstresult =arr[taille-2]+1;
    arr.sort((a, b) => a - b);
    let taniresult =taille;
    
    for(let i=0;i<taille;i++){
        var bool= false;

        for(let j =i+1;j<taille;j++){
            if(i+1 === arr[j]){
                bool = true;
            }

        }
        if(bool){
          taniresult--;
        }
       
    }

    return (firstresult > taniresult)? firstresult :taniresult-1;

}



console.log(getMaxValue([10,15,9,1,5,15,3,3,4,6,9]));