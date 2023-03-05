// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. 
// Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
// Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних 
// через метод input() класу SuperMath.
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {
    check(obj) {
        const {x, y, znak} = obj;
        let result;
        switch (znak) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '/':
                result = x / y;
                break;
            case '*':
                result = x * y;
                break;
            case '%':
                result = x % y;
                break;
            default:
                console.log(`Неправильно введений знак математичної дії!`);
                return this.input();
        }

        if (isNaN(result)) {
            console.log(`Неможливо виконати дію "${znak}" з вказаними значеннями (Х та Y повинні бути числами)!`);
            return this.input();
        }

        const confirmMsg = confirm(`Бажаєте отримати результат ${x} ${znak} ${y} = ?`);
    
        if (confirmMsg) {
          console.log(`Результат: ${result}`);
        } else {
          return this.input();
        }
    }
 
    input () {
        const x = +prompt('X = ');
        const y = +prompt('Y = ');
        const znak = prompt('Введіть знак математичної дії (+, -, *, / або %):');
        const obj = {x, y, znak};
        this.check(obj);
    }
}

// Приклад:
let obj = {x: 12, y: 3, znak: '/'};
p = new SuperMath();
p.check(obj);


