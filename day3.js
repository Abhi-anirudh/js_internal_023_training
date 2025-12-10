function fun(x)
{
    return x*2;
}
let ch=fun(72);
console.log(ch);
arr=[1,2,3,4,5];

// Array of 5 fruits
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// For loop to iterate through the fruits array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);

}
for(let value of fruits){
    console.log(value);
}

fruits.push("PAPaYA");
fruits.pop();
fruits.unshift("Kiwi");
fruits.shift();

console.log("Updated fruits array:", fruits);

// Find index of a fruit
const index = fruits.indexOf("Orange");
console.log("Index of Orange:", index);

// Check if a fruit exists
const hasMango = fruits.includes("Mango");
console.log("Contains Mango:", hasMango);

a=[1,2,3,4,5];
let doubleArr=a.map(n=>n*2);
console.log(doubleArr);
let nums=[10,25,30,40];
let result=nums.filter(n=>n>20);
console.log(result);

let sum=nums.reduce((acc,cur)=>acc+cur,0);
console.log(sum);
//Q1
arr=[2,4,6,8];
let doubled=a.map(n=>n*2);
console.log(doubled);

//Q2
test=[10,25,30,5,60]
let even=test.filter(n=>n%2==0);
console.log(even);

//Q3
num=[1,2,3,4,5];
let total=num.reduce((acc,cur)=>acc+cur,0);
console.log(total);

//object
let student={
    name:"Mohit",
    age:21,
    course:"Javascript"
};
//accessing object properties
console.log("Name:",student.name);
console.log("Age:",student["age"]);

//adding new property
student.grade="A";
console.log("Updated Student:",student);
//deleting property
delete student.course;
console.log("After Deletion:",student);
let jsonString=JSON.stringify(student);
let obj=JSON.parse(jsonString);