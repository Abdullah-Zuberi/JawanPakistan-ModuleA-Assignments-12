// 1. Alerts
alert("Hello, this is an alert!");

// 2. Variables for strings
let name = "John";
console.log("My name is " + name);

// 3. Variables for Numbers
let age = 25;
console.log("I am " + age + " years old");

// 4. Variables names legal and illegal
let legalVariableName = "Legal";
// let illegal Variable Name = "Illegal"; // Uncommenting this line will cause an error

// 5. Math Expression: familiar operators
let sum = 10 + 5;
console.log("Sum: " + sum);

// 6. Math Expression: unfamiliar operators
let remainder = 10 % 3;
console.log("Remainder: " + remainder);

// 7. Math Expression: eliminating ambiguity
let result = (4 + 3) * 2;
console.log("Result: " + result);

// 8. Concatenating text strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// 9. Prompts
let userInput = prompt("Enter your age:");
console.log("User entered: " + userInput);

// 10. If statements
let num = 7;
if (num > 5) {
  console.log("Number is greater than 5");
}

// 11. Comparison operators
let x = 10;
let y = 15;
if (x !== y) {
  console.log("x is not equal to y");
}

// 12. If else and else if statements
let grade = 80;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// 13. Testing sets of conditions
let temperature = 25;
let isRaining = false;
if (temperature > 20 && !isRaining) {
  console.log("It's a nice day!");
}

// 14. If statements nested
let num1 = 5;
let num2 = 10;
if (num1 > 0) {
  if (num2 > 5) {
    console.log("Both conditions are true");
  }
}

// 15. Arrays
let fruits = ["apple", "banana", "orange"];
console.log("Fruits: " + fruits);

// 16. Arrays: adding and removing elements
fruits.push("grape");
console.log("Fruits after adding grape: " + fruits);
fruits.pop();
console.log("Fruits after removing last element: " + fruits);

// 17. Arrays: removing, inserting, and extracting elements
fruits.splice(1, 1, "kiwi"); // Remove one element at index 1 and insert "kiwi"
console.log("Fruits after modification: " + fruits);

