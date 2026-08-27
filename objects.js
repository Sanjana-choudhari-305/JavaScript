//Ex 1
/*const car = {
    brand:"BMW",
    model:"X5",
    year:"2025",
    //member function used
    display: function(){
        return `${this.brand} ${this.model} ${this.year}`;
    },
    //arrow operator 
    display1:()=>`${car.brand} ${car.model} ${car.year}`
};

console.log(car.brand);
console.log(car.display());
console.log(car.display1());

//Ex 2:
let name = "Sanjana";
let age = 20;
let empobj = {
    Empname: name,
    Empage: age
};
console.log("Employee info: ",empobj);

//ex 3
let empobj1 = {
    Empname: "Ammu",
    Empage: 21,
    Empemail:"Ammu@gmail.com"
};
for(let prop in empobj1)
    console.log(prop+" "+empobj1[prop]);

//ex 4:
function Person(){      //Its like constructor
    this.name = "Sanj",
    this.age = 21;
}
const person = new Person();
console.log(person.name);
console.log(person.age);

//passing variable
function Person1(name,age){      //Its like constructor
    this.name = name,
    this.age = age;
}
const p1 = new Person1("Sanjana",20);
const p2 = new Person1("ana",25);
console.log(p1.name);
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);*/

//Working with getters and setters inside object
//Object properties
/*let personObj={};
personObj.name = "Someone";
personObj.age = 25;
personObj.ssn = 123456789;
Object.defineProperty(personObj,"ssn",{
    enumerable:false
});

for(let prop in personObj){
    console.log(personObj[prop]);
}

let personObj1={};
personObj1.age = 25;
personObj1.ssn = 123456789;
Object.defineProperty(personObj1,"name",{
    value:"John",
    configurable:false
});
delete personObj1.name;
console.log(personObj1.name);*/

//Accessor Properties
/*let person ={
    firstname: "John",
    second: "Doe"
};
Object.defineProperty(person, "fullname",{
    get: function(){
        return this.firstname+" "+this.second;
    },
    set: function(value){
        let parts = value.split(" ");
        if(parts.length == 2){
            this.firstname=parts[0];
            this.second=parts[1];
        }else{
            throw "Invalid name format";
        }
    }
});
console.log(person.fullname);*/


/*const rectangle = {
    width: 10,
    height: 5,
    get area(){
        return this.width * this.height;
    },
    set dimensions({width,height}){
        this.width=width;
        this.height=height;
    }
};
console.log(rectangle.area);
rectangle.dimensions={width: 20, height:30};
console.log(rectangle.area);*/

//Cloning of objects using spread operator
/*const circle = {
    radius: 10,
    style:{
        color: "Blue"
    }
};
const clonedCircle={...circle}; //shallowCopy (changes not reflected in og)
clonedCircle.radius=20;
clonedCircle.style="Red";
console.log(clonedCircle);
console.log(circle);    //Original is not affected

const deepCopy = JSON.parse(JSON.stringify(circle));
deepCopy.style.color="Pink";
console.log(circle.style.color);
console.log(deepCopy.style.color);*/

const original={
    name:"Alice",
    address:{city:"Wonderland",zip:1234}
};

const shallowCopy={...original};
shallowCopy.address.city="New wonderland";
shallowCopy.name="Alia";
console.log(original.address.city);     //This is changed
console.log(original.name);             //This remains same

const deepCopy=JSON.parse(JSON.stringify(original));
deepCopy.address.city="Old wonderland";
console.log(original.address.city);
console.log(deepCopy.address.city); 