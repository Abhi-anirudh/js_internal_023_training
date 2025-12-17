// Assignment 2: JavaScript Basics Coding (Day-2)

// 1. Sum of two numbers
function sumOfTwoNumbers(a, b) {
    return a + b;
}
console.log("1. Sum of 5 and 3:", sumOfTwoNumbers(5, 3));

// 2. Print "Hello <name>"
function greetUser(name) {
    return `Hello ${name}`;
}
console.log("2.", greetUser("John"));

// 3. Even/Odd check
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("3. 4 is:", isEvenOrOdd(4));
console.log("3. 7 is:", isEvenOrOdd(7));

// 4. Celsius → Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("4. 0°C =", celsiusToFahrenheit(0), "°F");
console.log("4. 100°C =", celsiusToFahrenheit(100), "°F");

// 5. Max among 3 numbers
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log("5. Max of 10, 25, 15:", maxOfThree(10, 25, 15));

// 6. Find string length
function getStringLength(str) {
    return str.length;
}
console.log("6. Length of 'JavaScript':", getStringLength("JavaScript"));

// 7. Toggle boolean
function toggleBoolean(bool) {
    return !bool;
}
console.log("7. Toggle true:", toggleBoolean(true));
console.log("7. Toggle false:", toggleBoolean(false));

// 8. Concatenate strings
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
console.log("8. Concatenate 'Hello' and 'World':", concatenateStrings("Hello", "World"));

// 9. Positive/Negative/Zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log("9. 5 is:", checkNumber(5));
console.log("9. -3 is:", checkNumber(-3));
console.log("9. 0 is:", checkNumber(0));

// 10. var / let / const example
function variableExample() {
    var varVariable = "I am var"; // function scoped
    let letVariable = "I am let"; // block scoped
    const constVariable = "I am const"; // block scoped, cannot be reassigned
    
    if (true) {
        var varInside = "var is accessible outside block";
        let letInside = "let is block scoped";
        const constInside = "const is block scoped";
    }
    
    console.log("10. Var:", varVariable);
    console.log("10. Let:", letVariable);
    console.log("10. Const:", constVariable);
    console.log("10. Var inside if:", varInside);
    // console.log(letInside); // Would throw error
    // console.log(constInside); // Would throw error
}
variableExample();

// 11. Multiplication table
function multiplicationTable(num) {
    console.log(`11. Multiplication table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(5);

// 12. Sum of first 10 natural numbers
function sumOfFirstTenNaturalNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}
console.log("12. Sum of first 10 natural numbers:", sumOfFirstTenNaturalNumbers());

// 13. Switch-case → day name
function getDayName(dayNumber) {
    let dayName;
    switch(dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
console.log("13. Day 1:", getDayName(1));
console.log("13. Day 5:", getDayName(5));

// 14. Function → Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("14. Factorial of 5:", factorial(5));
console.log("14. Factorial of 0:", factorial(0));

// 15. Function → Voting eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}
console.log("15. Age 20:", checkVotingEligibility(20));
console.log("15. Age 16:", checkVotingEligibility(16));

// ================================================
// Part-B: Moderate (more thinking required)
// ================================================

// 16. Check whether a number is prime or not
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("16. Is 7 prime?", isPrime(7));
console.log("16. Is 10 prime?", isPrime(10));
console.log("16. Is 13 prime?", isPrime(13));

// 17. Print sum of digits of a number
function sumOfDigits(num) {
    let sum = 0;
    num = Math.abs(num); // Handle negative numbers
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log("17. Sum of digits of 123:", sumOfDigits(123));
console.log("17. Sum of digits of 456:", sumOfDigits(456));

// 18. Reverse a string without using reverse()
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("18. Reverse 'hello':", reverseString("hello"));
console.log("18. Reverse 'JavaScript':", reverseString("JavaScript"));

// 19. Take user marks & print Grade
function getGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "Fail";
    }
}
console.log("19. Marks 95:", getGrade(95));
console.log("19. Marks 80:", getGrade(80));
console.log("19. Marks 60:", getGrade(60));
console.log("19. Marks 40:", getGrade(40));

// 20. Function with two numbers & an operator
function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}
console.log("20. 10 + 5 =", calculator(10, 5, '+'));
console.log("20. 10 - 5 =", calculator(10, 5, '-'));
console.log("20. 10 * 5 =", calculator(10, 5, '*'));
console.log("20. 10 / 5 =", calculator(10, 5, '/'));

// 21. Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("21. Vowels in 'Hello World':", countVowels("Hello World"));
console.log("21. Vowels in 'JavaScript':", countVowels("JavaScript"));

// 22. Print Fibonacci series up to n terms
function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib;
}
console.log("22. Fibonacci series (10 terms):", fibonacci(10).join(", "));

// 23. Return minimum and maximum from an array
function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: null, max: null };
    }
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}
const numbers = [5, 2, 9, 1, 7, 6];
console.log("23. Array:", numbers);
console.log("23. Min and Max:", findMinMax(numbers));

// 24. Simple Menu Program using switch-case
function menuProgram(choice, num1, num2) {
    let result;
    switch(choice) {
        case 1:
            result = num1 + num2;
            console.log(`24. Add: ${num1} + ${num2} = ${result}`);
            break;
        case 2:
            result = num1 - num2;
            console.log(`24. Sub: ${num1} - ${num2} = ${result}`);
            break;
        case 3:
            result = num1 * num2;
            console.log(`24. Mul: ${num1} * ${num2} = ${result}`);
            break;
        case 4:
            if (num2 === 0) {
                console.log("24. Div: Error - Division by zero");
            } else {
                result = num1 / num2;
                console.log(`24. Div: ${num1} / ${num2} = ${result}`);
            }
            break;
        default:
            console.log("24. Invalid choice");
    }
}
console.log("24. Simple Menu Program:");
menuProgram(1, 10, 5);
menuProgram(2, 10, 5);
menuProgram(3, 10, 5);
menuProgram(4, 10, 5);

// 25. Check if a number is Armstrong number
function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}
console.log("25. Is 153 Armstrong?", isArmstrong(153)); // 1³ + 5³ + 3³ = 153
console.log("25. Is 370 Armstrong?", isArmstrong(370)); // 3³ + 7³ + 0³ = 370
console.log("25. Is 9474 Armstrong?", isArmstrong(9474)); // 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474
console.log("25. Is 123 Armstrong?", isArmstrong(123)); // Not an Armstrong number

console.log("\n=== All 25 programs completed! ===");
