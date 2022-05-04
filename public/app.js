import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
// let invOne : HasFormmater;
// let invTwo : HasFormmater;
// invOne = new Invoice('Ashar','create the website',250);
// invTwo = new Payment('Nahla', 'do the calculation', 500);
// let invoices:Invoice[] = []
// invoices.push(invOne)
// // invOne.client = 'zaid'
// console.log(invOne.client  ,invOne.amount, invOne.format())
// console.log(invoices)
const ul = document.querySelector("ul"); // ! mean it's not null
// or we can make list?.children
import { ListTemplate } from "./classes/listTemplate.js";
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// enum 
var role;
(function (role) {
    role[role["ADEMIN"] = 0] = "ADEMIN";
    role[role["USERS"] = 1] = "USERS";
})(role || (role = {}));
;
console.log(role.USERS);
let doc;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // tuples
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
});
