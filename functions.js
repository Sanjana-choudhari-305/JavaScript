//Program to calculate the E-Commerce bill(price,quantity,discount) --Declarative
/*function calculateOrderTotal(price,quantity,discountpercent){
    const subtotal=price * quantity;
    const discount = subtotal*(discountpercent/100);
    const finalamount=subtotal-discount;
    console.log("Total Value of bill is",finalamount);
    //return finalamount;
}

const productprice = 5000;
const quantity = 2;
const discount = 10;
const totalValue=calculateOrderTotal(productprice,quantity,discount);*/


//Anonymous fn - self-executing
(function(){
    console.log("Anonymous self executing");
})();

//Anonymous fn - assigned to a variable
const variable = function(){console.log("Anonymous to variable");};
variable();

//Passing value to Anonymous fn
const fact = function(n){
    return n<=1?1:n*fact(n-1);  //Ternary operator!!!
};
console.log(fact(5));

//Passing 2 values
const add = function(a,b){
    return a+b;
};
console.log(add(2,3));

//Anonymous fn in an Array
const numbers = [10,20,30];
numbers.forEach(function(num){
    console.log(num);
});

//function expressions
function greet(choice){
    let msg = choice();
    console.log(msg);
}
let message = function(){return "Hello JS";};