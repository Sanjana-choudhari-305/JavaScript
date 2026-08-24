//Synchronous
/*let a=1; 
let b=2;
let Sum = a+b;
console.log(Sum);


//Asynchronous
console.log("First step");
console.log("Second Step");
setTimeout(()=>console.log("Third Step"),2000);
console.log("Fourth step");*/

//Callback Function
function createQuote(quote,callback){
    var myQuote = "Like I always say "+quote;
    callback(myQuote);
}
function logquote(quote){
    console.log(quote);
}
createQuote("'Never Give up!'",logquote);

//example2-callback
function serverRequest(query, getresults){
    setTimeout(function(){
        var response = query + " full";
        getresults(response);
    },5000);
}
function getresults(results){
    console.log("Response from Server: "+results);
}
serverRequest("The glass is half",getresults);

//example3-callback
function isOdd(number){
    return number%2!=0;
}
function isEven(number){
    return number%2==0;
}

function filter(numbers,fn){
    let results = [];
    for(const number of numbers){
        if(fn(number)){
            results.push(number);
        }
        //return results;
    }
    return results;
}

let numbers=[1,2,3,4,5,6,7,8,9];
console.log(filter(numbers,isOdd));
console.log(filter(numbers,isEven));

//Asynchronous Callback
function download(url,callback){
    setTimeout(()=>{
        console.log(`Downloading picture ${url}...`);
        callback(url);
    },1000);
}

function process(picture){
    console.log(`Processing ${picture}`);
}
let url="https://www.javascript/pic.jpg";
download(url,process);

//nesting callbacks
function download1(url,callback){
    setTimeout(()=>{
        console.log(`Downloading picture ${url}...`);
        callback(url);
    },1000);
}

let url1="https://www.javascript/pic1.jpg";
let url2="https://www.javascript/pic2.jpg";
let url3="https://www.javascript/pic3.jpg";
download(url1,function(url){
    console.log(`Processing ${url}`);
    download(url2,function(url){
        console.log(`Processing ${url}`);
    download(url3,function(url){
        console.log(`Processing ${url}`);
    });
    });
});