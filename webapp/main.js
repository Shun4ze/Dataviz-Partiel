
const counterValue = document.getElementById('counter-value');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const randomButton = document.getElementById('random');


function increaseCounter() {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}


function decreaseCounter() {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
}


function resetCounter() {
    counterValue.textContent = 0;
}


function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    counterValue.textContent = randomNumber;
}


increaseButton.addEventListener('click', increaseCounter);
decreaseButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);
randomButton.addEventListener('click', generateRandomNumber);
