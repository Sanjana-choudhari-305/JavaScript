/*Description
Objective:
To work with JS for conditional statements.

Scenario:
Charles wants to pick the right internet plan based on his monthly data usage. 
His network provider offers four options:
Basic Plan for usage below 10 GB, 
Standard Plan for 10-50 GB, 
Premium Plan for 51-100 GB, 
and Unlimited Plan for anything above 100 GB. 
You need to write a JavaScript program that checks his usage and recommends the correct plan using (if..else) conditional statements.
*/
let internetUsage = 72;
let RecommendedPlan;
if(internetUsage<10){
    RecommendedPlan = "Basic Plan";
}else if(internetUsage>=10 && internetUsage<=50){
    RecommendedPlan = "Standard Plan";
}else if(internetUsage>=51 && internetUsage<=100){
    RecommendedPlan = "Premium Plan";
}else{
    RecommendedPlan = "Unlimited";
}
console.log("Your usage: "+internetUsage+" GB");
console.log("Recommended Plan: "+RecommendedPlan);
