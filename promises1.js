/*let task = new Promise((resolve,reject)=>{
    let studentFound = false; //true;
    setTimeout(()=>{
        if(studentFound){
            resolve({
                id:101,
                name:"Sachin",
                course: "javascript"
            });
        }
        else{
            reject("Promise is rejected");
        }
    },2000);
});

task
    .then((data)=>{console.log(data);},)
    .catch((error)=>{console.log(error);})
    .finally(()=>{console.log("This is a finally block");});*/

//Chaining of promises(maybe)
/*let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
});
p.then((result=>{
    console.log(result);
    return result*2;
})).then((result=>{
    console.log(result);
    return result*3;
})).then((result)=>{
    console.log(result);
    return result*4;
});*/

//Chaining of promises
/*let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3000);
});
p1.then((result=>{
    console.log(result);
    return result*2;
}));
p1.then((result=>{
    console.log(result);
    return result*3;
}));
p1.then((result)=>{
    console.log(result);
    return result*4;
});*/

/*let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise is rejected");
    },3000);
});
p2.catch((result=>{
    console.log(result);
    return result*2;
}));
p2.catch((result=>{
    console.log(result);
    return result*3;
}));
p2.catch((result)=>{
    console.log(result);
    return result*4;
});*/

//Promise.all()
/*let a1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },1000);
});
let a2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },1000);
});
let a3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },1000);
});
Promise.all([a1,a2,a3]).then((results=>{
    const total = results.reduce((p,c)=>p+c);
    console.log(`results: ${results}`);
    console.log(`Total: ${total}`);
}));*/

//Promise.race()
/*let b1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
});
let b2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },3000);
});
let b3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },1000);
});
Promise.race([b1,b2,b3])
                .then((results=>{console.log(`resolved ${results}`);}))
                .catch((reason=>{console.log(`Reason is ${reason}`);}));*/

//Promise.allSettled()
/*let b1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
});
let b2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },3000);
});
let b3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(30);
    },1000);
});
Promise.allSettled([b1,b2,b3])
                .then((results=>{console.log({results});}))
                .catch((reason=>{console.log(`Reason is ${reason}`);}));*/
