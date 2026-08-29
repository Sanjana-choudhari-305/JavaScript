const original = {
    name : "Jungkook",
    age: 28,
    address : { city:"Seoul"}   //This is changed
};
const shallowCopy={...original};    //Object.assign({},original);
shallowCopy.name = "Taehyung";
shallowCopy.address.city="Jeju";
console.log(original);
console.log(shallowCopy);

const original1 = {
    name : "Jungkook",
    age: 28,
    address : { city:"Seoul"}   //This ain't changes
};
//const deepCopy = structuredClone(original1); //preferred technique for deepcopy
const deepCopy = JSON.parse(JSON.stringify(original1));
deepCopy.address.city = "Bangalore";
deepCopy.name="Sanjana";
console.log(original1);
console.log(deepCopy);

//Limitations of JSON.parse(JSON.stringify(og_obj));
const user = {
    a:NaN,
    b:Infinity,
    name:"Suga",
    age:undefined,
    createdAt: new Date(),
    pattern: /hello/g,
};
const usercopy = JSON.parse(JSON.stringify(user));
console.log(usercopy);
const usercopy1 = structuredClone(user);
console.log(usercopy1);