// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function add () {
    let result = 0;
    return function (num) {
        result += num;
        return result;
    }
}
const sum = add();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));


