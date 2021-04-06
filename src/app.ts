import { ListTemplate } from './classes/ListTemplate.js';

let initial_amt= prompt("enter initial amount");
let initial_amt1=Number(initial_amt);
let initamt:HTMLHeadingElement = document.getElementById("initial-amount") as HTMLHeadingElement;            
initamt.innerText = "Initial Amount : " + initial_amt;
let AvailAmount:number=initial_amt1;
let greeter:HTMLHeadingElement = document.getElementById("avail-amount") as HTMLHeadingElement;
            greeter.innerText = "Available Amount : " + AvailAmount;

const formSelector=document.querySelector(".new-item-form") as HTMLFormElement;

const type=document.querySelector("#type") as HTMLSelectElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=(document.querySelector("#amount") as HTMLInputElement);
const amt=document.getElementById('amount') as HTMLInputElement;
formSelector.addEventListener('submit',(e:Event)=>
{
    e.preventDefault();

    console.log(
        type.value,details.value,amount.valueAsNumber,amt.valueAsNumber
    );

    
    if (type.value === 'income') {
        if(amount.value) {
          AvailAmount = AvailAmount + parseInt(amount.value);
            const ul = document.querySelector('.income-list') as HTMLUListElement;
            const list = new ListTemplate(ul);
            list.render(details.value,amount.value);
            let greeter:HTMLHeadingElement = document.getElementById("avail-amount") as HTMLHeadingElement;
            greeter.innerText = "Available Amount : " + AvailAmount;
        }
      }
    else
    {
        if(amount.value) {
            AvailAmount = AvailAmount - parseInt(amount.value);
            const ul = document.querySelector('.expenditure-list') as HTMLUListElement;
            const list = new ListTemplate(ul);
            list.render(details.value,amount.value);
            let greeter:HTMLHeadingElement = document.getElementById("avail-amount") as HTMLHeadingElement;
            greeter.innerText = "Available Amount : " + AvailAmount;
          }
    }
      console.log(AvailAmount);

      

})
