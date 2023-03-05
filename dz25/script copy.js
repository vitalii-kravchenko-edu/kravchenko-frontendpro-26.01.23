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
      const { X, Y, znak } = obj;
      let result;
  
      switch (znak) {
        case '+':
          result = X + Y;
          break;
        case '-':
          result = X - Y;
          break;
        case '*':
          result = X * Y;
          break;
        case '/':
          result = X / Y;
          break;
        case '%':
          result = X % Y;
          break;
        default:
          console.log(`Неправильно введений знак: ${znak}`);
          return this.input();
      }
  
      if (isNaN(result)) {
        console.log(`Неможливо виконати дію "${znak}" з цими значеннями`);
        return this.input();
      }
  
      const confirmMsg = `Ви хочете виконати дію "${znak}" з числами ${X} та ${Y}? Відповідь "так" або "ні".`;
      const confirmResult = confirm(confirmMsg);
  
      if (confirmResult) {
        console.log(`Результат: ${result}`);
      } else {
        return this.input();
      }
    }
  
    input() {
      const X = +prompt('Введіть значення X:');
      const Y = +prompt('Введіть значення Y:');
      const znak = prompt('Введіть знак дії (+, -, *, / або %):');
  
      const obj = { X, Y, znak };
      this.check(obj);
    }
  }
  

// Приклад:
let obj = {X: 12, Y: 3, znak: '/'};
p = new SuperMath();
p.check(obj);

// obj = p.input();
// p.check(obj);
  