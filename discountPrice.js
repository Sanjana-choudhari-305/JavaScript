//Using Arrow Functions
let calculateDiscount=(price,percent)=>{
    let discount = (percent*price)/100;
    return price-discount;
}
let original = 1000;
let discount = 10;
console.log("Original: $"+original+", Discount: "+discount+"% -> Final Price: $"+calculateDiscount(original,discount));
