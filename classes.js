/*class Calculator{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    add(){
        return this.num1 + this.num2;
    }
    sub(){
        return this.num1 - this.num2;
    }
}

let cal = new Calculator(300,100);
console.log("Addition: ",cal.add());
console.log("Subtraction: ",cal.sub());*/

//Getter Setter
/*class Person{
    constructor(name){
        this.setName(name);
    }
    getName(){
        return this.name;
    }
    setName(newName){
        if(newName===" "){
            throw "The name cannot be empty";
        }
        this.name=newName;
    }
}

let person = new Person("Namjoon");
console.log(person);
console.log(person.getName());
person.setName("Jin");
console.log(person.getName());
*/
//Static method
/*class Validator{
    static check(input){
        return Array.isArray(input);
    }

    static isEven(number){
        return number % 2 === 0;
    }

    static count = 0;
    static increment(){
        return ++this.count;
    }
}
Validator.count = 11;
console.log(Validator.increment());
console.log(Validator.increment());
console.log(Validator.isEven(4));
console.log(Validator.isEven(7));
console.log(Validator.check([1,2,3]));
console.log(Validator.check("Hello"));
*/

//Inheritance
/*class Employee{
    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    swipeIn(){
        console.log("Employee with id "+this.id+" with name as "+this.name+" has swiped at "+new Date());
    }

    static code(){
        console.log("Employee is logging in");
    }
}

class parttimeemployee extends Employee{
    constructor(id,name,age,contractPeriod){
        super(id,name,age);
        this.contractPeriod = contractPeriod;
    }
}

let emp1 = new parttimeemployee(101,"Sanjana",55,3);
let emp2 = new Employee(100,"Ammu",34);
console.log("Contract period of employee",emp1.contractPeriod);
emp1.swipeIn();
emp2.swipeIn();
Employee.code();*/

//Private data members and functions #
class Employee{
    #salary;
    constructor(name,salary){
        this.name = name;
        this.#salary = salary;
    }
    getSalary(){
        return this.#salary;
    }
}
const emp = new Employee("Sanjana",50000);
emp.salary=100000;
console.log(emp.salary);
console.log(emp.getSalary());

class User{
    #validatePassword(password){
        return password.length>=8;
    }
    createAccount(password){
        if(this.#validatePassword(password)){
            console.log("Account created");
        }else{
            console.log("password is short");
        }
    }
}
const user=new User();
user.createAccount("12345678");
//user.#validatePassword("1234343");
console.log(user instanceof User);