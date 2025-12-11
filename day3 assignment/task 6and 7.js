// Task 6: Find Max Number in Array
let arr = [10, 40, 25, 80, 15];

let maxNum = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}

console.log("Task 6: Find Max Number");
console.log(`Array: [${arr}]`);
console.log(`Maximum Number: ${maxNum}`);

// Task 7: Transform Names Using map()
console.log("\nTask 7: Transform Names Using map()");
let names = ["ram", "shyam", "mohan"];
let upperNames = names.map(name => name.toUpperCase());

console.log(`Input: [${names.map(n => `"${n}"`).join(",")}]`);
console.log(`Output: [${upperNames.map(n => `"${n}"`).join(",")}]`);
