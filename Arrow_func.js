
/*
//Scenario1 : mul params and mul lines of code
let calcCost=(price,noOfpersons)=>{
    let Total = price * noOfpersons;
    return Total;
};
console.log("Total Cost"+calcCost(200,5));

//Scenario2 : no params and single line of code
let trip=()=>console.log("Welcome to India");
trip();

//Scenario3 : single param and single line of code
let trip2=place=>console.log("Let's go to "+place);
trip2("Los Angeles");

let trip3=_=>console.log("Let's go to "+_);
trip3("USAAA");*/

//Implicit return
const divide=(a,b)=>a/b;
console.log("Division",(divide(10,5)));

//Explicit return
const multiply=(a,b)=>{return a*b;};
console.log("Multiplication",(multiply(3,5)));

//returning object literal
const getUser=()=>({
    id:1,
    name:"Sanjana"
});
console.log(getUser());

//With rest parameters
const sum=(...numbers)=>{
    let sumnum=0;
    for(const num of numbers){
        sumnum+=num;
    }
    return sumnum;
};
console.log(sum(4,5,6,7,8,9));

//nesting of Arrow operator
const multiply1=a=>b=>c=> a*b*c;
console.log(multiply1(10)(20)(30));
//without arrow operator



//global and local variable
let globalvar = "global variable";
function demo(){
    let localvar = "Local variable";
    let globalvar = "New Global";
    console.log(globalvar);
    console.log(localvar);
}
demo();
console.log("Outside function"+globalvar);

//block scope
function testVar(){
    if(10===10){
        var flag = "True";
    }
    console.log(flag);
}
testVar();

let age = 20;
if(age>=18){
    var status = "Adult"
}