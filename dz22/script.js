// 1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, колір;
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, колір
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина 
// у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина 
// для виведення інформації про власника

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    };
    personInfo () {
        console.log(`Ім'я: ${this.name}, вік: ${this.age}`);
    }
};

class Car {
    constructor (brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner;
        this.ownerYoung;

    }
    addOwner (person) {
        if (person.age >= 18) {
            this.owner = person;
        } else {
            this.ownerYoung = person;
            console.log(`${this.ownerYoung.name} не може стати власником (молодше 18 років)!`);
        }
    };
    carInfo () {
        console.log(`бренд: ${this.brand}, модель: ${this.model}, рік випуску: ${this.year}, колір: ${this.color}`);
        if (this.owner) {
            console.log(`Власник: ${this.owner.name}`);
        } else {
            console.log(`Власника немає`);
        }
    };
};

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;

const jack = new Person ('Jack', 30);
const mary = new Person('Mary', 17);
const john = new Person('John', 45);

// декілька екземплярів класу Автомобіль;

const camry = new Car('Toyota', 'Camry', 2018, 'white');
const accord = new Car('Honda', 'Accord', 2020, 'black');
const aveo = new Car('Shevrolet', 'Aveo', 2010, 'green');

// присвоїти власників автомобілям.

camry.addOwner(jack);
accord.addOwner(mary);
aveo.addOwner(john);

camry.carInfo();
accord.carInfo();
aveo.carInfo();