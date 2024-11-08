//const randN = Math.random(); function declaration

function doubleNumber( n= 1000 ) {
    const res = n * 2;
    return res;
};

//const resdouble10 =  doubleNumber(10);
//console.log(resdouble10);

console.log(doubleNumber(50));
console.log(doubleNumber(25, 30));
console.log(doubleNumber());

function getSquareRoot(number) {
    if (number < 0) {
        return "Корень из отрицательного числа не существует";
    }
    return Math.sqrt(number);
}

function square(number) {
    return number * number;
}

console.log(square(4));
console.log(square(5));
console.log(square(-3));

// function expression
const doubleNumberExpression = function(n) {
    return n * 2;
}
console.log(doubleNumberExpression(75));

// arrow function
const doubleNumberArrow = (n) => {
    return n * 2;
};
console.log(doubleNumberArrow(275));

// =========== Class work =============
// Принимает как аргумент имя (строку), и возвращает нам строку "Привет, <имя>";
// если аргумент не строка, то возвращает сообщение "Введите корректное значение"
// использовать шаблонную строку(function declaration)
// ====================================

// пример шаблонной строки
const myName = "Johnny";
console.log(`lfjdsal fjlksda fds a, ${myName}`);

// решение (функция возвращает значение)
function greeting(name) {
    if (typeof name === "string") {
        return `Hello ${name}`
    } else {
        return `Введите корректное значение`
    }
}
console.log(greeting("John"));

// функция ничего не возвращает
function greetingVoid(name) {
    if (typeof name === "string") {
        console.log(`Hello ${name}`)
    } else {
        console.log(`Введите корректное значение`)
    }
}
greetingVoid("Johnny Depp");

//========== Class work =============
// Нужно 2 стрелочные функции
// Один аргумент - строка
// Одна функция считает кол-во символов в строке и возращает это число
// Вторая просто считает и забывает вернуть
// ============
const countSymbols = (text) => {
    const resultOfFunc = (typeof text === "string") ? text.length : 'Не строка';
    return resultOfFunc;
}

const countSymbolsNoReturn = (text) => {
    const resultOfFunc = (typeof text === "string") ? text.length : 'Не строка';
}

console.log(countSymbols("Hello People!"));

// перепишем функцию
const countSymbols2 = text => (typeof text === "string") ? text.length : 'Не строка';

console.log(countSymbols2("Hello People!"));
