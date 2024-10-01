//1. Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100.
// Найти максимальное и минимальное значение в массиве. (НЕ используем Math.min/max) Вывести в консоль.

console.log("=======Task01=======");

let arrayA = [];
for (let i = 0; i < 10; i++) {
    arrayA.push(Math.round(Math.random() * 100) + 1);
}
console.log(arrayA);

let min = arrayA[0];
let max = arrayA[0];

for (let i = 1; i < arrayA.length; i++) {
    if (arrayA[i] < min) {
        min = arrayA[i];
    }
    if (arrayA[i] > max) {
        max = arrayA[i];
    }
}
console.log("Min: " + min);
console.log("Max: " + max);

//2.Объвить массив из 10 любых элементов, заполнить.
// Вырезать первый элемент и добавить его в конец массива.

console.log("=======Task02=======");

let arrayB = [];
for (let i = 0; i < 10; i++) {
    arrayB.push(Math.round(Math.random() * 100) + 1);
}
console.log(arrayB);

const resultOfShift = arrayB.shift();
console.log("Result of Shift: " + resultOfShift);

arrayB.push(resultOfShift);
console.log("New Array: " + arrayB);


//3. Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75.
// Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

console.log("=======Task03=======");

let arrayC = [];
for (let i = 0; i < 10; i++) {
    arrayC.push(Math.round(Math.random() * 100) + 1);
}
console.log("Array C: " + arrayC);

let min1 = arrayC[0];
let max1 = arrayC[0];

for (let i = 0; i < arrayC.length; i++) {
    if (arrayC[i] < min1) {
        min1 = arrayC[i];
    }
    if (arrayC[i] > max1) {
        max1 = arrayC[i];
    }
}
console.log("Min " + min1 + ", " + "Max " + max1);
let result = max1 + min1;
console.log("Sum: " + result);

//4. Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50.
// Найти сумму всех элементов массива. Вывести в консоль.

console.log("=======Task04=======");
let arrayD = [];
let sumOfAllElements = 0;
for (let i = 0; i < 10; i++) {
    arrayD.push(Math.round(Math.random() * 100) + 1);
    sumOfAllElements += arrayD[i];
}

console.log("Array D: " + arrayD + ", " + " Sum of all elements: " + sumOfAllElements);

//5. * Объявить массив из 5 элементов и заполнить его любыми числами. 
// Присвоить 5 переменным значения из массива с помощью деструктуризации.
console.log("=======Task05=======");

let [elem1, elem2, elem3, elem4, elem5] = [23, 45, 55, 245, 678];

console.log(elem3);

// 6. Разбить строку на слова и вывести в консоль по одному слову в строке. 
//Не забыть удалить знаки пунктуации:
//Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
console.log("=======Task06=======");
let begin = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
let sentence = begin.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
let words = sentence.split(' ');

console.log(words);

//7.Перевернуть массив (аналог reverse).
console.log("=======Task07=======");

let Array1 = ['a', 'b', 'c', 'd'];
let Array2 = [];
for (let i = 0; i < Array1.length; i++) {
    Array2[i] = Array1[Array1.length - i - 1];

}
console.log(Array1);
console.log(Array2);

// 8. Проверить является ли строка палиндромом.
console.log("=======Task08=======");

let str = "А роза упала на лапу Азора";

let cleanedStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
console.log(cleanedStr);

let reversedStr = cleanedStr.split("").reverse().join("");
console.log(reversedStr);

 if (cleanedStr === reversedStr){
console.log("It's a polindrom!");  
 } else{
    console.log("Not a polidrom!")
 }



