// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

function deleteElem (str, elements) {
    return str.split('').filter(elem => !elements.includes(elem)).join('');
}
console.log(deleteElem('hello world', ['l', 'd']));