let movies = ["Avatar", "Inception", "Interstellar", "The Matrix"];

// Add one movie
movies.push("Oppenheimer");

// Remove last movie
movies.pop();

// Print final list using loop
console.log("Final Movie List:");
for (let i = 0; i < movies.length; i++) {
  console.log(`${i + 1}. ${movies[i]}`);
}
