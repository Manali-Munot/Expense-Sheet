import { ListTemplate } from './classes/ListTemplate.js';
var initial_amt = prompt("enter initial amount");
var initial_amt1 = Number(initial_amt);
var initamt = document.getElementById("initial-amount");
initamt.innerText = "Initial Amount : " + initial_amt;
var AvailAmount = initial_amt1;
var greeter = document.getElementById("avail-amount");
greeter.innerText = "Available Amount : " + AvailAmount;
var formSelector = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var amt = document.getElementById('amount');
formSelector.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, details.value, amount.valueAsNumber, amt.valueAsNumber);
    if (type.value === 'income') {
        if (amount.value) {
            AvailAmount = AvailAmount + parseInt(amount.value);
            var ul = document.querySelector('.income-list');
            var list = new ListTemplate(ul);
            list.render(details.value, amount.value);
            var greeter_1 = document.getElementById("avail-amount");
            greeter_1.innerText = "Available Amount : " + AvailAmount;
        }
    }
    else {
        if (amount.value) {
            AvailAmount = AvailAmount - parseInt(amount.value);
            var ul = document.querySelector('.expenditure-list');
            var list = new ListTemplate(ul);
            list.render(details.value, amount.value);
            var greeter_2 = document.getElementById("avail-amount");
            greeter_2.innerText = "Available Amount : " + AvailAmount;
        }
    }
    console.log(AvailAmount);
});
