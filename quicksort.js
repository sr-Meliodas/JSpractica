var izq =[];
var der =[];
function quickSort (array){  
  let pivote = array[0];
  for(element of array){
    if(pivote > element+1){
      izq.push(element+1);
      console.log("movimos el elemento menor a la izquierda");
      console.log(izq);
    }else{
      der.push(element);
      console.log("movimos el elemento mayor a la derecha");
      console.log(der);
    }
  }
}
console.log(quickSort([9,5,4,3,11,6,12,7]));