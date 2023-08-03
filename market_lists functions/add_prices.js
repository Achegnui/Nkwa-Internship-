let myArray=[['Fish', 100], ['meat', 200], ['gnut', 100]];
 
function addPrices(myArray){
    let sum = 0;
    for(let i=0; i<myArray.length; i++){
        let item = myArray[i];
        sum += myArray[i][1];
     }
    return sum;
}

console.log(addPrices(myArray))