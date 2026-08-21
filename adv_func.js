//default arguments
/*function multiply(num1=2,num2=3){
    return num1*num2;
}
console.log(multiply(4,5));
console.log(multiply(4));
console.log(multiply());
console.log(multiply(undefined,undefined));*/

//Rest Parameters
/*function showNums(x,y,...z){
    console.log("x=",x+" y=",y+" z=",z);
}
console.log(showNums(1,2,3,4,5,6,7,8));
console.log(showNums(3,4,5,6,7,8,9,10));*/

/*function show(...input){
    let sum=0;
    for(let i in input){
        sum+=i;
    }
    return sum;
}
console.log(show(1,2,3,4,5,6,7,8));*/

//not destructured parameters
function displayUser1(user){
    console.log(user.name);
    console.log(user.age);
}

//Destructured parameters
function displayUser2({name,age}){
    console.log("Name ",name);
    console.log("Age ",age);
}

const user = {name:"Sachin",age:36};
displayUser1(user);
displayUser2(user);

//destructure the arrays
function sum([a=3,b=4,c=7]){
    return a+b+c;
}

const numbers = [ ];
console.log(sum(numbers));

//default values
function display({name="Guest",role="Admin"}={}){
    console.log(`Name: ${name},Role:${role}`);
}
display();