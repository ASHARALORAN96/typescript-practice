"use strict";
let character = 'Ashar';
const inputs = document.querySelectorAll('input');
character = 'Ghala';
const circle = (diameter) => {
    return diameter * Math.PI;
};
console.log(circle(10));
let obj = {
    name: 'soso',
    age: 26,
    belt: 'black'
};
// explicit types
let nameChar;
let age;
let isActive;
let testArr = [];
testArr.push(20);
// union types : to could be more than one option
let testName;
let arr = []; // equal to [] to allow push method
// objects
let testObj;
testObj = { name: 'hello' };
testObj = [1, 2];
// console.log(testObj)
// strict obj
let testObjTwo;
testObjTwo = {
    name: 'Nahla',
    age: 26,
    hasAJob: true
};
// any type // use it when i dont know what is the type
let char;
char = 'helllo';
