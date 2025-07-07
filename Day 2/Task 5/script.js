//Task Five 

const arr = [];
const resultsDiv = document.getElementById('results');

while (arr.length < 3) {
  const input = prompt(`Enter element ${arr.length + 1} (must be a number):`);

  if (input === null) {
    alert("Operation cancelled");
    arr.length = 0;
    break;
  }
  const num = Number(input);
  
  if (isNaN(num)) {
    alert("Invalid input Please enter a number.");
  } else {
    arr.push(num);
  }
}

if (arr.length === 3) {
const sum = arr[0] + arr[1] + arr[2];
const product = arr[0] * arr[1] * arr[2];
let division;
            
if (arr[1] === 0 || arr[2] === 0) {
division = "Cannot divide by zero";
} else {
division = arr[0] / arr[1] / arr[2];
}

resultsDiv.innerHTML = `
<div class="result">
  <div class="operation"><span style="color: red;">Sum of the 3 values:</span> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${sum}</div>
  <div class="operation"><span style="color: red;">Multiplication of the 3 values:</span> ${arr[0]} × ${arr[1]} × ${arr[2]} = ${product}</div>
  <div class="operation"><span style="color: red;">Division of the 3 values:</span> ${arr[0]} ÷ ${arr[1]} ÷ ${arr[2]} = 
  ${typeof division === 'string' ? division : division.toFixed(2)}
</div>`;
}
