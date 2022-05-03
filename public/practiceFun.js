"use strict";
let fun;
fun = (argOne, argTwo) => {
    console.log(`${argOne} of ${argTwo}`);
};
fun(10, 'developer');
const add = (a, b, c) => {
    return a + b;
};
add(2, 5);
const minus = (a, b, c = 10) => {
    return a + b + c;
};
minus(20, 1);
//fun signature
let calc;
calc = (numOne, numTwo) => {
    return numOne + numTwo;
};
calc(10, 15);
let me;
me = {
    name: 'samera',
    age: 28,
    speak(text) {
        console.log(text);
    }
};
let grating;
grating = (person) => {
    return `hello ${person}`;
};
grating(me);
