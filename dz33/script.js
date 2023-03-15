// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і 
// генерує список з елементів:

function generateList(array) {
  const list = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");

    if (Array.isArray(array[i])) {
      const sublist = generateList(array[i]);
      item.appendChild(sublist);
    } else if (typeof array[i] === "number" && !isNaN(array[i])) {
      const num = document.createTextNode(array[i]);
      item.appendChild(num);
    }

    list.appendChild(item);
  }

  return list;
}

//Приклад
const myArray = [1, 2, [1, 2, 3], 3];
const myList = generateList(myArray);
document.body.appendChild(myList);