import { ListTemplate } from './classes/ListTemplate.js';

const formSelector=document.querySelector(".new-item-form") as HTMLFormElement;
let AvailAmount:number=0;
const type=document.querySelector("#type") as HTMLSelectElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;

formSelector.addEventListener('submit',(e:Event)=>
{
    e.preventDefault();

    console.log(
        type.value,details.value,amount.valueAsNumber
    );

})
console.log(parseInt(amount.value));

if (type.value === 'income') {
    AvailAmount=AvailAmount+parseInt(amount.value);
}
console.log(AvailAmount);
const ul = document.querySelector('.income-list') as HTMLUListElement;
const list = new ListTemplate(ul);
list.render(details.value,amount.value);