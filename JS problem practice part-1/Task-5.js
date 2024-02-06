//Generate a random number between 10 to 20.


function randomNumberGenerator(){
    let randomNumber = Math.floor((Math.random() * 10)) + 10 ;
    return randomNumber;
}


console.log(randomNumberGenerator());