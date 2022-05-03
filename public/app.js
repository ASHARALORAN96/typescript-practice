// import { Invoice } from "./modules/invoice.js";
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
let invOne;
let invTwo;
invOne = new Invoice('Ashar', 'create the website', 250);
invTwo = new Payment('Nahla', 'do the calculation', 500);
// let invoices:Invoice[] = []
// invoices.push(invOne)
// // invOne.client = 'zaid'
// console.log(invOne.client  ,invOne.amount, invOne.format())
// console.log(invoices)
const list = document.querySelector('ul'); // ! mean it's not null
console.log(list.children); // or we can make list?.children
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
let doc;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
