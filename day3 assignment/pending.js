// Task 9: Create student object with properties
let student = {
  name: "Aman",
  age: 20,
  course: "JavaScript"
};

console.log("Task 9: Student Object");
console.log(student);

// Task 10: Add a new property city
student.city = "Delhi";
console.log("\nTask 10: After adding city property");
console.log(student);

// Task 11: Remove age property using delete
delete student.age;
console.log("\nTask 11: After deleting age property");
console.log(student);

// Task 12: Loop using for...in and print key-value pairs
console.log("\nTask 12: Loop using for...in");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Task 13: Create person object with nested address
let person = {
  name: "John",
  address: {
    city: "Delhi",
    country: "India"
  }
};

console.log("\nTask 13: Person with nested address");
console.log(`City: ${person.address.city}`);

// Task 14: Change city to "Mumbai" inside nested object
person.address.city = "Mumbai";
console.log("\nTask 14: After changing city to Mumbai");
console.log(`Updated City: ${person.address.city}`);
console.log(person);

// Task 15: Convert object to JSON string
let jsonString = JSON.stringify(person);
console.log("\nTask 15: Object converted to JSON string");
console.log(jsonString);

// Task 16: Convert JSON string back to object
let personObject = JSON.parse(jsonString);
console.log("\nTask 16: JSON string converted back to object");
console.log(personObject);
console.log(`Retrieved City: ${personObject.address.city}`);
