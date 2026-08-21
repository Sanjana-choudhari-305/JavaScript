//String
let name1="Sanjana";
let name2="Choudhari";
let result=`The name is ${name1} ${name2}`; 
console.log(result);
console.log(name1[3]);
console.log(name1.charAt(1));
console.log(name1.toUpperCase());
console.log(name2.toLowerCase());

//Number
let int_num = 3;
console.log(int_num);
let num1= -3/0;
console.log(num1); //-Infinty
let num2=3/0;
console.log(num2);
let num3= 5.12345;
console.log(num3.toPrecision(5));


//boolean
let data_checked = false;
console.log(data_checked);
const a = true;
const b = false;
console.log(typeof a);
console.log(typeof b);
console.log(5==6);
console.log(5!=6);

//Undefined and null
let name;   //name declared but not assigned any value
console.log(name);
//Null?
let n=null; //null remains null as null is assigned
//null values represent no object values
console.log(n);

//Symbol
let val1 = Symbol("JavaScript");
let val2 = Symbol("JavaScript");
//Although both are JavaScript both are different
console.log(val1==val2);
console.log(val1);
console.log(val2);
console.log(val1.description);
console.log(typeof val1);
//No 2 symbols are same

//Object Type {}
let student = {
    firstname: "Sanjana",
    lastname: "Choudhari",
    representation: "Country"
};
console.log(student);
console.log(student.firstname);
console.log(student.lastname);

student.representation = "State"; //reassigning ig
console.log(student);

//adding properties
student.avg = 60;
student.centuries = 30;
//delete student.centuries;
console.log(student);


//Array 
const age = [17,18,19,12,13];
console.log(age[0]);
age.push(90); //Adds at the end
console.log(age);
age.unshift("work"); //Adds at the start
console.log(age);
age.splice(2,1);    //I didn't get it...
console.log(age);
console.log(age.length);

//Enumerable
//Sir shared 