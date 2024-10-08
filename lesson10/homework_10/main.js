console.log("======Task_01======");
//Создайте ф-цию, которая определяет парность числа
//Функция должна принимать целое число
//Если число не целое - скруглить его в меньшую сторону
//Функция должна вернуть строку 'even' если число четное
//Функция должна вернуть строку 'odd' если число не четное

const checkNumber = (n) => {
    let nn = Math.floor(n)
    if (nn % 2 === 0) {
        return `it's an even number`
    } else {
        return `it's an odd number`
    }
}
console.log(checkNumber(4, 43));

console.log("======Task_02======");
//Задание 2. Стрелочная ф-ция возводящая число в квадрат
//Функция должна принимать целое число
//Если число не целое - скруглить его в меньшую сторону

const squareNumber = (num) => {
    num1 = Math.floor(num);
    return num1 * num1;
}

console.log(squareNumber(5));

console.log("======Task_03======");
//Задание 3. Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке
//Аргументы функции два - начало промежутка и конец промежутка
//Если число не целое - скруглить его в меньшую сторону
//На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму

const sumEvenNumbersFromRange = (start, finish) => {
    let sum = 0;
    start = Math.floor(start);
    finish = Math.floor(finish);

    for (let i = start; i <= finish; i++)
        if (i % 2 == 0) {
            sum = sum + i;
            //console.log(sum)
        }
    return sum;
}
console.log(sumEvenNumbersFromRange(2, 20));

console.log("======Task_04======");
//Задание 4. Простые числа в заданном промежутке. Нужно создать две функции.
//Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым, или нет.
//Число является простым, если оно делиться без остатка только на 1 и само на себя.
//Вторая функция должна вернуть в виде массива все простые числа 
//в промежутке от 1 до n, где n - первый аргумент функции.
//Вторая функция должна пользоваться первой функцией для определения простых чисел.
//Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
console.log(isPrime(9));

function getPrimesArray(n) {
    const primes = [];
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimesArray(20));


console.log("======Task_05======");
//Задание 5. (необязательное) «FizzBuzz»
//Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
//Функция должна выводить в консоль числа от 1 до n, заменяя числа:
//• кратные трём — на fizz;• кратные пяти — на buzz;• кратные и трём, и пяти одновременно — на fizzbuzz.

function fizzBuzz(number) {

    for (let i = 1; i <= number; i++) {
        let str = '';

        if (i % 3 === 0) {
            str = 'fizz';
    }

    if (i % 5 === 0) {
        str =  str + 'Buzz';
    }
     
    if (str == ''){
        str = i;
    }
    console.log(str);
    }
    
}

fizzBuzz(30);

console.log("======Task_06======");
console.log("");
//Задание 6. (необязательное)
//Напишите функцию reverseWords(str), принимающую на вход строку. 
//Функция должна вернуть новую строку, расставив слова в обратном порядке.
//Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.

function reverseWords(str) {
    let begin = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let words = begin.split(' ');
    let reversedWords = words.reverse();
    let result = reversedWords.join(' ');
    return result;
    
}

console.log(reverseWords("Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота."
));
console.log("");
console.log("======Task_07======");
console.log("");
//Напишите функцию intersection(arr1, arr2). 
//Она должна принимать на вход два массива целых чисел. 
//Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах.
//Протестируйте решение, вызывая функцию с разными аргументами:
//console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); 
// должна вернуть [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12]));
// должна вернуть [] 
//console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); 
// должна вернуть []//


function intersection(arr1, arr2) {
    
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]); 
        }
    }

    return result;
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); 
console.log(intersection([1, 5, 4, 2], [7, 12]));
console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); 
