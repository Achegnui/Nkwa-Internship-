function countNumberRepetition(arr){
    let count = [];
    let size = arr.length;
    for(let i = 0; i < size; i++){
        let num = arr[i];

        if(count[num]){
            count[num]++;
            
        }else{
            count[num] = 1
        }
    }


    let repeated_numbers=[];

    for(let num in count){
        if(count[num]-1 >= 1){
            repeated_numbers.push(num, "repeated", count[num]);
        } 
    }
    return repeated_numbers;
}

let myArray= [2,2,3,4,7,3,6,4,4];
const size= myArray.length;
const repeated_numbers = countNumberRepetition(myArray);
console.log(repeated_numbers);

