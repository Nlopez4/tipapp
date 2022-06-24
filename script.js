let tipTotal = 0;
let dividedTotal = 0;
let total = 0;
let billTotal = document.querySelector('.bill-input');
let tips = document.querySelectorAll('.tips');
let numOfPeople = document.querySelector('.people-input');
let tipDisplay = document.querySelector('.tip-amount');
let totalDisplay = document.querySelector('.total-person');
let reset = document.querySelector('.reset-btn');


function handleBillInput() {
    billTotal.addEventListener('input', function (value) {
    });
};
handleBillInput();

// tip will depend on bill total
function handleTipsInput() {
    tips.forEach(function(tip) {
        tip.addEventListener('click', function (event, value) {
            event.preventDefault();
            tipTotal += billTotal.value * tip.value;
        });
    });
};
handleTipsInput();

function handleTotals() {
    numOfPeople.addEventListener('input', function () {
    dividedTotal += (tipTotal / numOfPeople.value);
    tipDisplay.textContent = dividedTotal;
    total += (billTotal.value / numOfPeople.value + dividedTotal);
    totalDisplay.textContent = total;
    });
};
handleTotals();

function handleReset() {
    reset.addEventListener('click', function() {
        tipTotal = 0;
        dividedTotal = 0; 
        total = 0;
        billTotal.value = '';
        numOfPeople.value = '';
        tipDisplay.textContent = 0;
        totalDisplay.textContent = 0;
    });
};
handleReset();