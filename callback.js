/*Description
Objective:
To work with Callback functions


Scenario:
You are building a feature for "QuickBite", an online food delivery platform.
When a customer places an order, the system needs to:

Process the order (simulate with a short delay).
Notify the customer once the order is processed.
Since the notification should only happen after the order is processed, you will use a callback function to ensure proper execution order.

Requirements:
Your task is to:
Create a function to process the order that should have argument for (order, callback)
The function should Logs "Processing order: <order>".
You can use time functions to simulate a 2-second delay for processing.
After the delay, calls the callback function.
Create another function for sending Notification with argument order.
This  function should Log "Your order for <order> has been confirmed and is on the way!".
*/

function processOrder(order,callback){
    setTimeout(function(){
        var response = "Processing order: "+order+"...";
        console.log(response);
        console.log("Order processed successfully.");
        callback(order);
    },2000);
}

function sendNotification(order){
   // processOrder(order,callback);
    console.log(`Your order for ${order} has been confirmed and is on the way!`);
}

processOrder("Paneer",sendNotification);
