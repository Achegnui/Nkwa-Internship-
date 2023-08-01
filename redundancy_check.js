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

    for(let key in count){
        if(count[key] !== undefined){
            console.log(key, count[key]-1);
        } 
    }
}

let myArray= [2,2,3,4,7,3,6,4,4];
const size= myArray.length;
countNumberRepetition(myArray);