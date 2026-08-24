/*Description
Objective:
To work with functional parameter destructuring in JavaScript.

Scenario:
Imagine you are building a feature for an online food delivery system. Whenever a customer places an order, the system collects multiple 
details such as the customer's name, delivery address, restaurant name, dish ordered, price, estimated delivery time, and more.
However, for the customer's order summary screen, not all details are required. You only need to display the essential order details:

The restaurant name from which the food is ordered
The dish name that the customer has chosen
The price of the dish
The estimated delivery time
Your task is to build a function that accepts the entire order object as its parameter but uses functional parameter destructuring to extract only these required details.
The function should then neatly display an order summary so the customer can easily view the important information about their order.

Sample Input:

const order = {
  customer: "Alice Johnson",
  address: "45 Park Avenue, New York",
  restaurant: "New York Deli & Grill",
  dish: "Classic New York Cheesecake",
  price: 15.5,
  expectedDeliveryTime: 40,
  paymentMethod: "UPI",
  orderId: "ORD56789"
};

displayOrderSummary(order);*/

function displayOrderSummary({restaurant,dish,price,
    expectedDeliveryTime}){
    console.log("Order Summary");
    console.log("Restaurant: "+restaurant);
    console.log("Dish: "+dish);
    console.log("Price: $"+price);
    console.log("Estimated Delivery Time: "+expectedDeliveryTime+" minutes");
}
const order= {
    customer:"Alice Johnson",
    address:"45 Park Avenue, New York",
    restaurant:"New York Deli & Grill",
    dish:"Classic New York Cheesecake",
    price:15.5,
    expectedDeliveryTime: 40,
    paymentMethod:"UPI",
    orderId:"ORD56789"
};
console.log(displayOrderSummary(order));
