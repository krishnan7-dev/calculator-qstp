const display = document.getElementById('display')
const operators = ['+', '-', '/', '*']

let operand1
let operand2
let operation

let computed = false

function handleClick(clicked) {
    if (clicked === 'ac') {
        display.innerHTML = ''
        return
    }

    if (computed) {
        display.innerHTML = ''
        computed = false
    }

    if (clicked === '.' && display.innerHTML.includes('.')) {
        return
    }

    if (clicked === '=') {
        if (!operand1 && !operand2 && !operation) {
            return
        }
        console.log(display.innerHTML.slice(display.innerHTML.indexOf(operation) + 1))
        operand2 = parseFloat(display.innerHTML.slice(display.innerHTML.indexOf(operation) + 1))
        display.innerHTML = compute(operand1, operand2, operation)
        computed = true
        operand1 = undefined
        operand2 = undefined
        operation = undefined
        return
    }

    if (operators.includes(clicked)) {
        if (operation) {
            display.innerHTML = display.innerHTML.slice(0, -1)
        }
        operation = clicked
        operand1 = parseFloat(display.innerHTML)
    }

    if (clicked === 'del') {
        display.innerHTML = display.innerHTML.slice(0, -1)
        return
    }

    display.innerHTML += clicked
}

function compute(operand1, operand2, operation) {
    if (isNaN(operand1) || isNaN(operand2)) {
        return
    }

    switch (operation) {
        case '+':
            return operand1 + operand2
        case '*':
            return operand1 * operand2
        case '/':
            return operand1 / operand2
        case '-':
            return operand1 - operand2
    }
}