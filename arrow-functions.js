/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addNumbers1(a, b) {
    return a + b
}

let sum1 = addNumbers1(1, 2)
console.log(sum1)

// Arrow Function With Parameters
const addNumbers2 = (a, b) => {
    return a + b
}

let sum2 = addNumbers2(1, 2)
console.log(sum2)

// Single Line Arrow Function With Parameters
const addNumbers3 = (a, b) => a + b;
let sum3 = addNumbers3(1, 2)
console.log(sum3)

// Implicit Returns
const saySomething = message => console.log(message)
saySomething("Hello there")

const sayHello = () => console.log("hello")
sayHello()

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p> 
    This is a multiple line string
    <p>`
)
console.log(returnMultipleLines())