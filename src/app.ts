// import { Invoice } from "./modules/invoice.js";
import {Invoice} from './classes/invoice.js';
import {Payment} from './classes/payment.js';
import {HasFormmater} from './interfaces/hasFormmater.js';


let invOne : HasFormmater;
let invTwo : HasFormmater;

invOne = new Invoice('Ashar','create the website',250);
invTwo = new Payment('Nahla', 'do the calculation', 500);




// let invoices:Invoice[] = []
// invoices.push(invOne)
// // invOne.client = 'zaid'
// console.log(invOne.client  ,invOne.amount, invOne.format())
// console.log(invoices)

const list = document.querySelector('ul')!; // ! mean it's not null

console.log(list.children); // or we can make list?.children

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


let doc : HasFormmater;
form.addEventListener('submit', (e : Event)=>{
    e.preventDefault();
    if(type.value === 'invoice'){
        doc =new Invoice(toFrom.value, details.value, amount.valueAsNumber);

    }else {
        doc =new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc)
});


