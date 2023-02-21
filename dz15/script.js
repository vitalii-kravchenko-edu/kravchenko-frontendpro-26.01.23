// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]


function removeElement(myArr, elem) {
    const index = myArr.findIndex(i => i === elem);
    if (index > 0) {
        myArr.splice(index, 1);
    }
}