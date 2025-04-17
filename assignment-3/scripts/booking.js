
// Variables
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const costDisplay = document.getElementById('calculated-cost');

let selectedDays = new Set();
let dailyRate = 35;

// Toggle day selection
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            selectedDays.add(button.id);
        } else {
            button.classList.remove('clicked');
            selectedDays.delete(button.id);
        }
        calculateTotal();
    });
});

// Toggle full/half day
fullButton.addEventListener('click', () => {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculateTotal();
});

halfButton.addEventListener('click', () => {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotal();
});

// Clear all selections
clearButton.addEventListener('click', () => {
    selectedDays.clear();
    dayButtons.forEach(button => button.classList.remove('clicked'));
    costDisplay.innerHTML = 0;
});

// Calculate total cost
function calculateTotal() {
    const total = selectedDays.size * dailyRate;
    costDisplay.innerHTML = total;
}
