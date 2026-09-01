/*Description
Objective:
To work with promise chaining

Scenario:
Imagine you are creating a simple movie ticket booking system for an online cinema app.
When a user wants to book a movie ticket, the process happens in three steps:
Search for Movie - The user selects a movie, and the system checks if it's available.
Reserve Seat -If the movie is available, the system reserves a seat for the user. 
(Hint: You can use Math.random() > 0.2 to decide seat availability.)
Process Payment - After reserving the seat, the system processes the payment. 
(Hint: You can use Math.random() > 0.1 to decide payment sucess.)
Send Confirmation - Finally, the system sends a booking confirmation message.

You must:
Use Promise chaining to ensure each step happens in order.
Use .then() to pass the result from one step to the next.
Use .catch() to handle any errors in the process.
*/

const dataset={
    movie:"Inception"
}
var isAvailable = false;
let searchMovie=(movie) => new Promise((resolve,reject)=>{
    setTimeout(()=>
    {if(dataset.movie===movie){
        isAvailable=true
        resolve(`Movie "${movie}" is available`);
    }else{
        reject(isAvailable=false);
    }},1000);
})

let reserve=(movie) => new Promise((resolve,reject)=>{
    let seat = Math.random();
    setTimeout(()=>{
        if(seat>0.2){
            resolve(`Seat reserved for "${movie}"`);
        }else{
            reject(false);
        }
    },1000);
})

let payment=(movie) => new Promise((resolve,reject)=>{
    let paid = Math.random();
    setTimeout(()=>{
        if(paid>0.1){
            resolve(`Payment successful for "${movie}"`);
        }else{
            reject(false);
        }
    },1000);
})

let movie = "Inception"
console.log(`Searching for "${movie}" in the database...`);
searchMovie(movie)
.then((result)=>{
    console.log(result);
    console.log(`Reserving seat for "${movie}"...`);
    return reserve(movie)})
.then((result)=>{console.log(result);
    console.log(`Processing payment for ${movie}...`);
    return payment(movie)})
.then((result)=>{
    console.log(result);
    console.log("Booking confirmed! Enjoy your movie.")
})
.catch((error)=>{
    console.log(error);
})
