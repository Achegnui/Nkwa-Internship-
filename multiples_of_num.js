function displayMultiples(number){
    for(let i=number; i<=100; i++){
        if(i%number === 0){
            console.log(i);
        }
    }
}

let number = 2;
console.log(displayMultiples(number));