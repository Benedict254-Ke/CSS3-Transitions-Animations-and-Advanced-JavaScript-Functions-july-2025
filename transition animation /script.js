/* ==========================
   JavaScript Functionality
   ========================== */

/* Demonstrating SCOPE:
   - Global scope variable
   - Local scope inside function
*/
let globalMessage = "Hello from the global scope!";

console.log(globalMessage); // Accessible anywhere

// Function with parameters and return value
function addNumbers(a, b) {
  // local scope variable
  let sum = a + b;
  return sum; // return value
}

// DOM references
const box = document.getElementById("animateBox");
const startBtn = document.getElementById("startBtn");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

// Event listener to trigger animation
startBtn.addEventListener("click", () => {
  // Toggle animation class
  box.classList.remove("animate"); // reset if already animating
  void box.offsetWidth; // force reflow
  box.classList.add("animate");
});

// Event listener to calculate sum
calcBtn.addEventListener("click", () => {
  // Get input values
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Check for valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "⚠️ Please enter valid numbers.";
    return;
  }

  // Call function with parameters
  let sum = addNumbers(num1, num2);

  // Display return value
  result.textContent = `✅ The sum of ${num1} and ${num2} is: ${sum}`;
});