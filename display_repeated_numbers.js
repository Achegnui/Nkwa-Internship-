function displayRepeatedNumbers(numbers){
    let counter=0;
    let size= numbers.length;
    let repeated = [];
    for(let i=0; i<size; i++){
        for(let j=i+1; j<size; j++){
            if(repeated.includes(numbers[i])){
                continue;
            }
            if(numbers[i]==numbers[j]){
                repeated.push(numbers[i]);
            }
        }
    }
    return repeated;
}

let myArray=[2,2,3,6,3,7,7,4,2];
console.log(displayRepeatedNumbers(myArray));