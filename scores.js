/*Description
Objective:
To work with built in array and math functions

Scenario:
You are creating a program to analyze a list of student scores.

The program should:
Find the highest and lowest scores.
Calculate the average score.
Identify scores above the average.
Apply a transformation to all scores (e.g., add bonus points).
Check if any student achieved a perfect score(for eg: 100 marks).
Sort the scores in descending order.

Students should use a combination of array methods and built-in Math functions to perform these operations efficiently.*/
Scores = [78,92,85,66,90,74,88,95,61,83];
console.log("Highest Score: "+Math.max(...Scores));
console.log("Lowest Score: "+Math.min(...Scores));
let sum=0;
for(let i of Scores){
    sum+=i;
}
console.log("Average Score: "+sum/Scores.length);
let aboveAvg=[];
for(let i of Scores){
    if(i > sum/Scores.length){
        aboveAvg.push(i);
    }
}
console.log("Scores Above Average: "+aboveAvg);
let bonus = [...Scores];
for(let i in bonus){
    bonus[i] = bonus[i]+5;
}
console.log("Scores after Bonus Points: "+bonus);
let check = Scores.includes(100)?"Yes":"No";
console.log("Any Perfect Score?: "+check);
console.log("Scores in Descending Order: "+Scores.sort((a,b)=>b-a));
