
var formSelector = document.querySelector(".new-item-form");
var AvailAmount = 0;
var type = document.querySelector("#type");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
formSelector.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, details.value, amount.valueAsNumber);
});
console.log(parseInt(amount.value));
if (type.value === 'income') {
    AvailAmount = AvailAmount + parseInt(amount.value);
}
console.log(AvailAmount);

