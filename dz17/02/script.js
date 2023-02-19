// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


const x = +prompt('x =', '');
const znak = prompt('знак математической операции (+, -, *, /, %, ^)', '');
const y = +prompt('y =', '');

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
    }
    console.log(`${x} ${znak} ${y} = ${result}`);
};

doMath(x, znak, y)