// Визначити кількість парних дільників натурального числа.

let n = 100;                             // натуральне число
let res = 0;  

for (i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 == 0) {      // дільники, які діляться на 2 (парні)
        res += 1;                        // кількість потрібних дільників (ітерацій циклу)
    }
}

console.log(res);




