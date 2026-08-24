/*function getUsers(){
    return[
        {username:"John",email:"john@gmail.com"},
        {username:"Jack",email:"jack@gmail.com"}
    ];
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user)=>user.username===username);
    return user;
}
console.log(findUser("Jack"));*/

/*function getUsers(callback){
    setTimeout(()=>{
        callback([
            {username:"John",email:"john@gmail.com"},
            {username:"Jack",email:"jack@gmail.com"},
        ]);
    },1000);
}

function findUser(username,callback){
    getUsers((users)=>{;
    const user = users.find((user)=>user.username===username);
    callback(user);
});
}
findUser("Jack",console.log);*/

function getUsers(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const users=[
                {username:"John",email:"john@gmail.com"},
                {username:"Jack",email:"jack@gmail.com"},
            ];

            const existingUser=users.find((user)=>user.username===username);
            if(existingUser){
                resolve(existingUser.username+" "+existingUser.email);
            }else{
                reject("Failed to get user from the list");
            }
        },1000);
    });
}

/*function onfulfilled(user){
    console.log(user);
}

function onRejected(error){
    console.log(error);
}

const promise=getUsers("Jill");
promise.then(onfulfilled,onRejected);*/

const promise=getUsers("Jack");
promise.then((data)=>{console.log(data);});
promise.catch((error)=>console.log(error));