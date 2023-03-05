// Мережа фастфудів пропонує кілька видів гамбургерів:
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger {
    static SIZE_SMALL = {price: 50, calories: 20};
    static SIZE_BIG = {price: 100, calories: 40};
    static STUFFING_CHEESE = {price: 10, calories: 20};
    static STUFFING_SALAD = {price: 20, calories: 5};
    static STUFFING_POTATO = {price: 15, calories: 10};
    static TOPPING_SAUCE = {price: 15, calories: 0};
    static TOPPING_MAYO = {price: 20, calories: 5};

    constructor (size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping (topping) {
        this.toppings.push(topping);
    }
    
    removeToping (topping) {
        const index = this.toppings.indexOf(topping);
        if (index !== -1) {
            this.toppings.splice(index, 1);
        }
    }

    calculate () {
        const topingCalories = this.toppings.reduce((acc, toping) => acc + toping.calories, 0);
        return this.size.calories + this.stuffing.calories + topingCalories;
    }
    
    calculatePrice () {
        const topingPrice = this.toppings.reduce((acc, toping) => acc + toping.price, 0);
        return this.size.price + this.stuffing.price + topingPrice;
    }
}

// Приклад роботи коду:
// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());
// скільки коштує
console.log("Price: " + hamburger.calculatePrice());
// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
// я згадав, що у вас майонез несмачний
hamburger.removeToping(Hamburger.TOPPING_MAYO);
// загальна сума (без майонезу)
console.log("Total price (without mayo): " + hamburger.calculatePrice());