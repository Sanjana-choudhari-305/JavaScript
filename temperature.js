/*Description
Objective:
To work with JS functions.

Scenario:
Liam is planning a trip across different countries and needs to quickly convert the local temperature readings from Celsius to Fahrenheit. 
He needs a simple JavaScript program where a function accepts the Celsius value, applies the conversion formula, 
and returns the Fahrenheit value. Liam should then be able to call this function and view the converted temperature.
Use the formula:
Fahrenheit = (Celsius × 9/5) + 32

Sample Inputs:
console.log("0°C = " + celsiusToFahrenheit(0) + "°F");
console.log("25°C = " + celsiusToFahrenheit(25) + "°F");*/

function celsiusToFahrenheit(celsius){
    let fahren = (celsius * (9/5))+32;
    return fahren;
}
console.log("0°C="+celsiusToFahrenheit(0)+"°F");
console.log("25°C="+celsiusToFahrenheit(25)+"°F");
