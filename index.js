const displayResult = document.querySelector('#number-display');

const display = document.querySelector('#result-display')



const dot = document.querySelector('.dot')
    let doSet = false;

dot.addEventListener('click', function () {

    if (doSet == false) {
        if (display.textContent === 0) {
            display.textContent += "."
        } else {
            display.textContent  += "."
        }
        doSet = true;
    }

});



const keys = document.querySelectorAll('.number');

keys.forEach(function (digit) {
    digit.addEventListener('click', function () {
        if (display.textContent === "0") {
            display.textContent = digit.textContent
        } else {
            if (newDigit == true) {
                display.textContent = digit.textContent
                newDigit = false
            } else {
                display.textContent += digit.textContent
            }
        }
    })
});
let newDigit = false;
const operators = document.querySelectorAll('.operator')
operators.forEach(function (sign) {
    sign.addEventListener('click', function () {
        displayResult.textContent += display.textContent + " " + sign.textContent + " "
        newDigit = true
        doSet = false
    })
});

const clear = document.querySelector('#clear')

clear.addEventListener('click', function reset() {
    display.textContent = "0"
    doSet = false
});
const clear2 = document.querySelector('#clear2')

clear2.addEventListener('click', function clearScreen() {
    display.textContent = "0"
    displayResult.textContent = ""
    doSet = false
});

const deleteNum = document.querySelector('.delete');

deleteNum.addEventListener('click', function () {
    if (display.innerText !== "0") {
        if (display.innerText.length !== 1) {
            let a = display.innerText.charAt(display.innerText.length - 1);
            if (a == ".") {
                doSet = false;
            }
            display.innerText = display.innerText.slice(0, -1)


        } else {
            display.innerText = "0";
        }

    }

    
});


const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', function () {
    display.textContent *= display.textContent / 100;
    newDigit = true
    
})

const square = document.querySelector('.square')

square.addEventListener('click', function () {
    displayResult.textContent = ("sqr(" + display.textContent + ")")
    display.textContent = display.textContent * display.textContent;
    newDigit = true
})

const sqrt = document.querySelector('.squareroot')

sqrt.addEventListener('click', function () {

    displayResult.textContent = ("√("+ display.textContent + ")")
    // displayResult.textContent = ("sqr(" + display.textContent + ")")
    display.textContent = Math.sqrt(display.textContent)
    newDigit = true
})

const divideby = document.querySelector('.divideby')

divideby.addEventListener('click', function () {
    displayResult.textContent = ("1/(" + display.textContent + ")")
    display.textContent = 1 / display.textContent;
    newDigit = true
})

const negate = document.querySelector('.negate')

negate.addEventListener('click', function () {
    // displayResult.textContent = ("1/(" + display.textContent + ")")
    
    if (display.textContent == "0") {
        displayResult.textContent = ("negate(" + display.textContent + ")")
    } else {

        displayResult.textContent = ""
    }
    display.textContent *= -1;
})

const equal = document.querySelector('#equal');
function calc(fn) {
    return new Function('return ' + fn)()
}
equal.addEventListener('click', function () {
    value = displayResult.textContent + display.textContent;
    // console.log(displa)
    display.textContent = ""
    display.textContent = calc(value)
    displayResult.textContent = value + "=" 
})
 


const mini = document.querySelector(".mini3")
const mini1 = document.querySelector(".mini1")
const mini2 = document.querySelector(".mini2")
const selector = document.querySelector('.selector1')
const selector1 = document.querySelector('.selector')
const selector2 = document.querySelector('.selector2')

    selector.addEventListener('click', function () {
        mini.classList.replace  ("min", "asdf")
        mini1.classList.replace  ("min", "asdf")
        mini2.classList.replace  ("min", "asdf")
    })
    selector1.addEventListener('click', function () {
        mini.classList.replace  ("min", "asdf")
        mini1.classList.replace  ("min", "asdf")
        mini2.classList.replace  ("min", "asdf")
    })
    selector2.addEventListener('click', function () {
        mini.classList.replace  ("min", "asdf")
        mini1.classList.replace  ("min", "asdf")
        mini2.classList.replace  ("min", "asdf")
    })
    mini1.addEventListener('click', function () {
        mini.classList.replace  ("asdf", "min")
        mini1.classList.replace  ("asdf", "min")
        mini2.classList.replace  ("asdf", "min")
    })



   


// function clearScreen() {
//     display.textContent = ""
// }