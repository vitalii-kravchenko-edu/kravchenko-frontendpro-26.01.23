// Вивести на сторінку в один рядок через кому числа від 10 до 20.



// 1.1. Рядок на сторінку

for (i = 10; i <= 20; i++) {
    document.write(i + ', ');
}



// 1.2. Рядок в консоль

let str = '';
for (i = 10; i <= 20; i++) {
	str += i + ', ';
}
console.log(str);