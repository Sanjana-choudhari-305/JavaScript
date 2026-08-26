//Exception handling in the promises
function getUserbyId(id){
    if(typeof id!=="number" || id<=0){
        throw new Error("Invalid id Argument");
    }
    return new Promise((resolve,reject)=>{
        resolve({
            id: id,
            username: "Admin",
        });
    });
}
try{
    getUserbyId("a")
    .then((user)=>console.log(user))
    .catch((err)=>console.log("Caught by catch ${err}"));
}
catch(error){
    console.log("Caught by catch block",error);
}