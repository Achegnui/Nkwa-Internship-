let myArray=[['Fish', 100], ['meat', 200], ['gnut', 100]];

//Function to delete item
function delItem(itemdel){
    for(let i=0; i<myArray.length; i++){
        if(myArray[i][0] === itemdel){
            myArray.splice(i--, 1);
            break;
        }  
     }
    return myArray;
}




 //function to add items
function addItems(elt, price){
    let new_item = [elt, price];
    myArray.push(new_item);
    return myArray;
}


 
//function to add prices
function addPrices(){
    let sum = 0;
    for(let i=0; i<myArray.length; i++){
        sum += myArray[i][1];
     }
    return sum;
}

console.log(addItems('garri', 200))

console.log(delItem('Fish'))

console.log(addPrices())
