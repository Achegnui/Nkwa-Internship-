`create a function that is a two dimensional array that takes in items and prices.
-The user should be able to input item and prices
-Delete items and prices
-Add
-sum up prices to give a total amount and display

`

let myArray=[['Fish', 100], ['meat', 200], ['gnut', 100]];
 
function delItem(myArray, itemdel){
    for(let i=0; i<myArray.length; i++){
        let item = myArray[i];
        if(myArray[i][0] === itemdel){
            myArray.splice(i--, 1);
            break;
        }  
     }
    return myArray;
}

console.log(delItem(myArray, 'Fish'));



