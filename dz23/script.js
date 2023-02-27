// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
// І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
// спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, 
// щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, 
// коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності 
// не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять),
//  і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
//  якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати 
// використання цих методів.

class Student {
    constructor (firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
    };

    age () {
        return 2023 - this.birthYear;
    }

    present () {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
            return [...this.attendance];
        } else {
            console.log(`Курс (25 лекцій) завершено!`);
        }
        
    }

    absent () {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
            return [...this.attendance];
        } else {
            console.log(`Курс (25 лекцій) завершено!`);
        }
    }

    averageAttendance () {
        const presentCount = this.attendance.filter((value) => value === true).length;
        return presentCount / this.attendance.length;
        }

    grade (value) {
        if (this.grades.length < 25) {
            this.grades.push(value);
            return [...this.grades];
        } else {
            console.log(`Курс (25 лекцій) завершено!`);
        }
    }

    averageGrade () {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;      
        }

    summary () {
        const avGrade = this.averageGrade();
        const avAttendance = this.averageAttendance();
        if (avGrade > 90 && avAttendance > 0.9) {
            console.log(`${this.firstName} ${this.lastName} - молодець!`);
        } else if (avGrade > 90 || avAttendance > 0.9) {
            console.log(`${this.firstName} ${this.lastName} добре, але можна краще.`);
        } else {
            console.log(`${this.firstName} ${this.lastName} - редиска!`);
        }
    }
};

// Демонстрація

const bond = new Student ('James', 'Bond', 1983);
const mickey = new Student ('Mickey', 'Mouse', 1993);
const peppa = new Student ('Peppa', 'Pig', 2003);

console.log('Студенти:');
// const bondAge = bond.
console.log(`${bond.firstName} ${bond.lastName}, вік ${bond.age()}`);
console.log(`${mickey.firstName} ${mickey.lastName}, вік ${mickey.age()}`);
console.log(`${peppa.firstName} ${peppa.lastName}, вік ${peppa.age()}`);

// 1 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.present();
peppa.grade(50);

// 2 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.present();
peppa.grade(50);
// 3 лекція
bond.present();
bond.grade(100);
mickey.absent();
peppa.absent();
// 4 лекція
bond.present();
bond.grade(100);
mickey.absent();
peppa.absent();
// 5 лекція
bond.present();
bond.grade(100);
mickey.absent();
peppa.absent();
// 6 лекція
bond.present();
bond.grade(100);
mickey.absent();
peppa.absent();
// 7 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 8 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 9 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 10 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 11 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 12 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 13 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 14 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 15 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 16 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 17 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 18 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 19 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 20 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 21 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 22 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 23 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 24 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(95);
peppa.absent();
// 25 лекція
bond.present();
bond.grade(100);
mickey.present();
mickey.grade(100);
peppa.absent();
// 26 (?) лекція
peppa.present();               // прийшла на 26 лекцію

// Результати:
console.log('Результати:');
bond.summary();
mickey.summary();
peppa.summary();










