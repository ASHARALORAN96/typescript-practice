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