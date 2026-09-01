/*
Description
Food Delivery Order Tracking

Objective:
To work with promises

Scenario:
You are building a simulation for a food delivery app.
When a customer places an order, the system should take some time to prepare the food before updating the delivery status.
After a short delay (around 3 seconds), the system must decide the outcome:
If the preparation is successful, the status should display "Order delivered successfully!"
If something goes wrong (for example, the kitchen runs out of ingredients), the status should display "Order failed. Please try again."

(Hint: You can use Math.random() > 0.2 to decide the delivery status.)
Model this workflow using Promises in JavaScript. The Promise should represent the process of preparing and delivering the food. Make sure the code handles both outcomes:
Use .then() to process and display the success message.

Use .catch() to handle and display the failure message
*/
let order=(item) => new Promise((resolve,reject)=>{
    console.log("Preparing your food...")
    let ingredients= true;
    let delivery = Math.random()
    setTimeout(()=>{
        if(ingredients && delivery>0.2){
            resolve("Order delivered successfully!");
        }else{
            reject("Order failed. Please try again");
        }
    },3000)
});
let item = "Pizza"
console.log("Placing order for: ",item)
order(item).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
