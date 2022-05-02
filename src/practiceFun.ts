// type alaises
type objWithname= {name: string, age : number}

let fun : Function;

fun = (argOne : number, argTwo : string) : void => {
    console.log(`${argOne} of ${argTwo}`)
}
fun(10, 'developer');

const add = (a: number, b:number, c?: string):number => { // ? mean it's optional
    return a+b
}

add(2,5);

const minus = (a: number, b: number, c: number = 10) : number => { // defullt value of the user doesnt pass the c value
    return a+b+c
}

minus(20,1)

//fun signature
let calc : (a:number, b:number) => number;
calc = (numOne: number, numTwo: number) => {
    return numOne+numTwo
}

calc(10,15)
