// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [5, true, 'a', 'b', 10, false, null, 15, 'c', 'd', 30];

function averageNum(arr) {
    let sum = arr.reduce((acc, elem) => {
        if (typeof elem === 'number') {
            return acc + elem;
        } else {
            return acc;
        }
    }, 0);

    let count = arr.reduce((acc, elem) => {
        if (typeof elem === 'number') {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return sum / count;
}

console.log(averageNum(arr));