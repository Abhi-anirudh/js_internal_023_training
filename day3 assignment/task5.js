let user = { name: "Aman", age: 21, course: "JS" };

// Convert object to JSON
let jsonString = JSON.stringify(user);
console.log("Converted to JSON:");
console.log(jsonString);

// Convert back to object
let userObject = JSON.parse(jsonString);
console.log("\nConverted back to Object:");
console.log(userObject);

// Verify the object
console.log("\nUser Details:");
console.log(`Name: ${userObject.name}`);
console.log(`Age: ${userObject.age}`);
console.log(`Course: ${userObject.course}`);
