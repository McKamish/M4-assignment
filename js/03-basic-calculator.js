/* The basic Calculator

In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions. 
You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. 
Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

1. Create a function that will serve as the main calculation logic of your application. 
This function should be called calculate and will accept three parameters: x, y, and operation.
2. In the script, prompt the user for a number and store that in a variable. Convert that to a number.
3. Then, prompt the user for a second number and store that in a variable. Convert that to a number.
4. Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
5. Finally, pass the three parameters into the calculate function to return the result of the calculation. 
You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers 
based on the operation passed in. 
6. Display the result of the calculation within an alert.
7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. 
Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. 
You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.

*/

// ADD A FUNCTION CALLED CALCULATE

/*
function calculate(x,y,operation) {
    if (operation === 'add') {
        let result = x + y
        alert(`${x} plus ${y} is ${result}`)
    } else if (operation === 'subtract') {
        let result = x - y
        alert(`${x} minus ${y} is ${result}`)
    } else if (operation === 'multiply') {
        let result = x * y
        alert(`${x} times ${y} is ${result}`)
    } else if (operation === 'divide') {
        let result = x / y
        alert(`${x} divided by ${y} is ${result}`)
    }
}
*/

function calculate(x,y,operation) {
    switch (operation) {
        case 'add':
            result = x + y
            alert(`${x} plus ${y} is ${result}`)
            break
        case 'subtract':
            result = x - y
            alert(`${x} minus ${y} is ${result}`)
            break
        case 'multiply':
            result = x * y
            alert(`${x} times ${y} is ${result}`)
            break
        case 'divide':
            result = x / y
            alert(`${x} divided by ${y} is ${result}`)
            break
        default:
            alert('User made invalid operator choice. Try again.')
    }
}


// COLLECT FIRST NUMBER FROM USER
let firstNumber = Number(prompt('Pick a number: '))

// COLLECT SECOND NUMBER FROM USER
let secondNumber = Number(prompt('Pick a second number: '))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let operator = prompt('Pick an operation (add, substract, multiply, or divide): ').toLowerCase()

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT

do {
    calculate(firstNumber, secondNumber, operator)
} while (operator == 'add' || operator == 'subtract' || operator == 'multiply' || operator == 'divide')


