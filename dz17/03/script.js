// Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

function func () {
    const lenghtMain = +prompt('Длина основного массива', '');
    let arrMain = [];
    
    for (i = 0; i < lenghtMain; i++) {
        let lenghtSub = +prompt('Длина подмассива', '');
        let arrSub = [];
        for (j = 0; j < lenghtSub; j++) {
            arrSub.push(prompt('Данные подмассива', ''));
        }
        arrMain = [...arrMain, [arrSub]];
    };
    return arrMain;
}
const userArray = func();
console.log(userArray)