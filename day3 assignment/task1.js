let marks = [80, 90, 70, 85, 95];

// Calculate average using reduce()
let average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

console.log(`Average Marks: ${average}`);
