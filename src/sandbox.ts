let character = 'Ashar';

const inputs = document.querySelectorAll('input');

character = 'Ghala'

const circle = (diameter : number)=>{
    return diameter * Math.PI;
}

console.log(circle(10))

let obj = {
    name : 'soso',
    age: 26,
    belt: 'black'
}

// explicit types
let nameChar : string
let age : number;
let isActive : boolean;
let testArr : number[] = [];
testArr.push(20)

// union types : to could be more than one option

let testName : string|boolean;
let arr : (string|number|boolean)[]= [] // equal to [] to allow push method

// objects
let testObj : object
testObj = {name : 'hello'}
testObj = [1,2]
// console.log(testObj)

// strict obj
let testObjTwo : {
    name: string,
    age : number,
    hasAJob : boolean
}
testObjTwo = {
    name : 'Nahla',
    age : 26,
    hasAJob : true
}

// any type // use it when i dont know what is the type

let char: any
char = 'helllo'