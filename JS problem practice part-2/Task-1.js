// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const heights2 = [167, 190, 120, 165, 137];

let lowestNumber = heights2[0];

for (const number of heights2) {
    if(number < lowestNumber){
        lowestNumber = number;
    }
}

console.log(lowestNumber);


// alternative solution
console.log(Math.min(...heights2));// ans is 120