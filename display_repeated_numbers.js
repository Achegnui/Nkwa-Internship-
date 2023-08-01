function displayRepeatedNumbers(numbers){
    size = numbers.length;
    repeated_nums=[];
    let count = 0;
    for(let i=0; i<size; i++){
        for(let j=i+1; j<=size; j++){
            if(numbers[i] === numbers[j]){
                count++;
                
            }else{
                count=0;
            }
            if(count>=1){
                repeated_nums.push(numbers[i]);
            }
        }   
    }
    return repeated_nums;
}

let numbers = [2, 2, 3, 7, 4, 4];
console.log(displayRepeatedNumbers(numbers));