//Map
const products=[
    {id:1,name:"Laptop",price:50000,active:true},
    {id:2,name:"Mobile",price:20000,active:false},
    {id:3,name:"Tablet",price:15000,active:true}
];
const productNames=products.map(product=>product.name);
console.log(productNames);

const pricesWithGST=products.map(price=>price.price*1.18);
console.log(pricesWithGST);

const activeProducts = products.filter(product_type=>product_type.active);
console.log(activeProducts);

const above20k = products.filter(product20=>product20.price>20000);
console.log(above20k);

const total=products.reduce((sum,name)=>sum+name.price,0);  //sum is initialized to 0
console.log(total);

//Group based on dept
const employees = [
    {name:"John",dept:"IT"},
    {name:"Emma",dept:"HR"},
    {name:"David",dept:"IT"},
    {name:"Sophia",dept:"Finance"}
];
const depart = employees.reduce((name,dep)=>name+dep.dept,"IT");
console.log(depart);
//Use reduce and filter 