// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, ост альні обнулити.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(`Масив: ${arr}`);

// 1. Знайти суму та кількість позитивних елементів.

let positiveQ = 0;
let positiveSum = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {      
        positiveQ += 1;  
        positiveSum += arr[i];                   
    }
}
console.log(`1. кількість позитивних елементів: ${positiveQ}
   сума позитивних елементів: ${positiveSum}`);


// 2. Знайти мінімальний елемент масиву та його порядковий номер.

function elemMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(`2. мінімальний елемент масиву: ${elemMin(arr)},
   його порядковий номер ${arr.indexOf(elemMin(arr)) + 1}`);

// 3. Знайти максимальний елемент масиву та його порядковий номер.

function elemMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(`3. максимальний елемент масиву: ${elemMax(arr)},
   його порядковий номер ${arr.indexOf(elemMax(arr)) + 1}`);

// 4. Визначити кількість негативних елементів.

let negativeQ = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {      
        negativeQ += 1;                 
    }
}
console.log(`4. кількість негативних елементів: ${negativeQ}`);


// 5. Знайти кількість непарних позитивних елементів.

let positiveOddQ = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0) {      
        positiveOddQ += 1;                   
    }
}
console.log(`5. кількість непарних позитивних елементів: ${positiveOddQ}`);

// 6. Знайти кількість парних позитивних елементів.

let positiveEvenQ = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {      
        positiveEvenQ += 1;                   
    }
}
console.log(`6. кількість парних позитивних елементів: ${positiveEvenQ}`);

// 7. Знайти суму парних позитивних елементів.

let positiveEvenSum = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {      
        positiveEvenSum += arr[i];                   
    }
}
console.log(`7. сума парних позитивних елементів: ${positiveEvenSum}`);

// 8. Знайти суму непарних позитивних елементів.

let positiveOddSum = 0;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 != 0) {      
        positiveOddSum += arr[i];                   
    }
}
console.log(`8. сума непарних позитивних елементів: ${positiveOddSum}`);

// 9. Знайти добуток позитивних елементів.

let positiveMult = 1;
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {      
        positiveMult *= arr[i];                   
    }
}
console.log(`9. добуток позитивних елементів: ${positiveMult}`);

// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.

for (i = 0; i < arr.length; i++) {
    if(arr[i] === elemMax(arr)) {
        continue;
    } else {
        arr.splice(i,1,0);
    }
}
console.log(`10. обнулені всі елементи масиву, окрім найбільшого: ${arr}`);