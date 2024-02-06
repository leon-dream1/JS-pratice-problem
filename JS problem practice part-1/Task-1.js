//Write a function to convert temperature from Celsius to Fahrenheit.


function celsiusToFahrenheit(cel){
    const fahrenheit = (cel * (9 / 5)) + 32;
    return `Fahrenheit is: ${fahrenheit}F`;
}

console.log(celsiusToFahrenheit(100));  
