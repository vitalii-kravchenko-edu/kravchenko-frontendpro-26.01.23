// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
// чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, 
// в іншому випадку виводить у консоль відповідне повідомлення.


class Person {
    constructor (name, gender) {
        this.name = name;
        this.gender = gender;
    };
};

class Flat {
    constructor () {
        this.residents = [];
    }
    addResident (person) {
        this.residents.push(person);
    };
};

class House {
    constructor (maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }
    addFlat (flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
        } else {
            console.log('Цей будинок не гумовий!');
        };
    };
};

// В якості демонстраціїї створити:
// -декілька екземплярів класу Людина;

const john = new Person('John', 'male');
const mary = new Person('Mary', 'female');
const anna = new Person('Anna', 'female');
const jack = new Person('Jack', 'male');

// -декілька екземплярів класу Квартира;

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();

// -додадити екземпляри класу Людина до екземплярів класу Квартира;

flat1.addResident(john);
flat2.addResident(mary);
flat3.addResident(anna);
flat3.addResident(jack);
console.log(flat1, flat2, flat3);

// -екземпляр класу Будинок;

const house = new House(3);

// -додадити екземпляри класу Квартира до екземплярів класу Будинок.

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
console.log(house);
