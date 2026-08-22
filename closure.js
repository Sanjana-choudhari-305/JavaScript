function outer(){
    let message = "Hello Closure";
    function inner(){
        console.log(message);
    }
    return inner;
}
const myFunction = outer();
myFunction();

//Closure with parameters
function greet(name){
    return function(){
        console.log("Hello ",name);
    };
}
const greeting = greet("Sir");
greeting();

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const incre=counter();
const incre1=counter();
console.log(incre());
console.log(incre());
console.log(incre1());
console.log(incre1());

//How data privacy is implemented with closure?
function createBankAccount(initBalance){
    let balance = initBalance;
    return{
        deposit(amount){
            balance+=amount;
            console.log("Balance: ",balance);
        },
        withdraw(amount){
            balance-=amount;
            console.log("Balance ",balance);
        },
        getBalance(){
            return balance;
        }
    };
}
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance);   //Shows as undefined (data privacy)
console.log(account.getBalance());