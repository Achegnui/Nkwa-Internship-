let myArray=[['Fish', 100], ['meat', 200], ['gnut', 100]];

//Function to delete item
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


 //function to add items
function addItems(myArray, elt, price){
    let new_item = [elt, price];
    myArray.push(new_item);
    return myArray;
}

console.log(addItems(myArray, 'garri', 200));
 
//function to add prices
function addPrices(myArray){
    let sum = 0;
    for(let i=0; i<myArray.length; i++){
        let item = myArray[i];
        sum += myArray[i][1];
     }
    return sum;
}

console.log(addPrices(myArray))