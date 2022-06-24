// event listener for every every input and button 
// as input or button changes so does the output
let savedTotal = 0;
let billTotal = document.querySelector('.bill-input');
let tips = document.querySelectorAll('.tips');


function billInput() {
    billTotal.addEventListener('input', function (value) {
    });
};
billInput();

// tip will depend on bill total
function tipsInput() {
    tips.forEach(function(tip) {
        tip.addEventListener('click', function (event, value) {
            event.preventDefault();
            if (billTotal.value === billTotal.value) {
                savedTotal += billTotal.value * tip.value
            }
        })
    });
};
tipsInput();

function numOfPeople() {
    document.querySelector('.people-input').addEventListener('input', function () {
    });
};
numOfPeople();

