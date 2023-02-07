let mathOperation = prompt('Яку дію з наступними двома числами повинен виконати калькулятор? Введіть add або +, sub або -, mult або *, чи div або /:', '+, -, *, /, add, sub, mult, div');
let nomber1 = +prompt('Введіть перше число', '');
let nomber2 = +prompt('Введіть друге число', '');

switch (mathOperation) {
    case '+': 
    case 'add':
    let resultAdd = nomber1 + nomber2;
        alert (`${nomber1} + ${nomber2} = ${resultAdd}`);
        break;
    case '-': 
    case 'sub': 
    let resultSub = nomber1 - nomber2;
        alert (`${nomber1} - ${nomber2} = ${resultSub}`);
        break;
    case '*': 
    case 'mult': 
    let resultMult = nomber1 * nomber2;
        alert (`${nomber1} * ${nomber2} = ${resultMult}`);
        break;
    case '/': 
    case 'div': 
    let resultDiv = nomber1 / nomber2;
        alert (`${nomber1} / ${nomber2} = ${resultDiv}`);
        break;
}









