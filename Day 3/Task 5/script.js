//Task Five

const numberInput = document.getElementById('numberInput');

numberInput.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    
    let numbersOnly = inputValue.replace(/[^0-9]/g, '');
    
    if (inputValue !== numbersOnly) {
        event.target.value = numbersOnly;
    }
});