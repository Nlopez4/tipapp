let tipTotal = 0;
let dividedTotal = 0;
let billTotal = document.querySelector('.bill-input');
let tips = document.querySelectorAll('.tips');
let numOfPeople = document.querySelector('.people-input')

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
            tipTotal += billTotal.value * tip.value
            console.log(tipTotal);
        })
    });
};
handleTipsInput();

function handleNumOfPeople() {
    numOfPeople.addEventListener('input', function () {
    dividedTotal += (tipTotal / numOfPeople.value);
    });
};
handleNumOfPeople();

