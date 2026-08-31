/*Description
Weather Data

Objective
To create a web application that uses async/await and error handling to fetch and display weather data based on user input.

Problem Description
You must create a weather-checking module for a travel app to retrieve temperature data based on city names. For known cities, 
a mock API should return the temperature; for unknown or missing inputs, it should reject with appropriate error messages.

An asynchronous function must call this API using await, handle errors with try...catch, and always log a final message using finally.
The application should provide clear feedback for all outcomes, ensuring a smooth and user-friendly experience.

Sample Output:
Consider that weather data for Sydney is available in the predefined dataset used within the simulated API;
here is the output of the following.

> getWeather("Sydney");
Temperature in Sydney is 28°C
Weather check completed

> getWeather("");
Failed to fetch weather: City name is missing
Weather check completed

> getWeather("Brazil");
Failed to fetch weather: City not found
Weather check completed*/

const dataset = {sydney:25};
function getWeather(place){
    return new Promise((resolve,reject)=>{
        if(!place){
            reject("City name is missing");
        }
        place = place.toLowerCase();
        if(!dataset[place]){
            reject("City not found");
        }
        resolve({
            place:place,
            temp:dataset[place]
        })
    })
}

async function callAPI(city){
    //const result = await getWeather("Sydney");
    try{
        let result= await getWeather(city)
        console.log(`Temperature in ${result.place} is ${result.temp}°C`);
    }catch(error){
        console.log("Failed to fetch weather: ",error);
    }
    finally{
        console.log("Weather check completed");
    }
}
callAPI("Sydney");
