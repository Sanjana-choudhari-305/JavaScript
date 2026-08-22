//Math methods
console.log("Sqrt ",Math.sqrt(25));
console.log("Math pow ",Math.pow(2,3));
console.log("Math.max ",Math.max(25,26,27));
console.log("Random ",Math.random());
console.log("Math abs ",Math.abs(-10));


//String ethods
let str = "JavaScript";
console.log("Length ", str.length);
console.log("Lowercase ",str.toLowerCase());
console.log("Slice ",str.slice(0,4));
console.log("Split ",str.split(""));

//Array Methods
let arr = [10,20,30,40,50];
arr.push(60);
console.log("Push ",arr);
console.log(arr.includes(20));
console.log(arr.indexOf(20));

//Object Methods
const employee = {
    id:101,
    name:"John",
    salary:50000
};
console.log("Object keys: ",Object.keys(employee));
console.log("Object Values: ",Object.values(employee));
console.log("Object entries: ",Object.entries(employee));
//creating clone object
const employee1=Object.assign({},employee);
console.log(employee1)

//Date methods
const date = new Date();
console.log("Current Date ",date);
console.log("Year ",date.getFullYear());
console.log("Month ",date.getMonth()+1);
console.log("Day: ",date.getDay());
console.log("Hours: ",date.getHours());
console.log("Minutes: ",date.getMinutes());