console.log("======Task_01======");
//1.Напишите фукнцию, которая будет принимать массив.
// Массив может содержать любые строки и числа. Функция должна вернуть объект, 
//который содержит свойства, ключ и значение которых равны соответствующему элементу массива.
//['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const returnObject = (array) => {
    const object = {};
    //for (let i = 0; i < array.length; i++){
    //   object[array[i]] = array[i]
    //}

    array.forEach((element) => {
        object[element] = element;
    });
    return object;
}
console.log(returnObject(['a', 36.6, 'John Doe']));

console.log("======Task_02======");
//2.Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов,
// в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
//[
// [ 'height', 170 ],
// [ 'weight', 80 ],
// [ 'sport', 'regbi' ],
// [ 'full name', 'John Doe' ],
// [ 'sing', 'love' ],
// [ 'speed', 90 ]
//]

const arrayToObject = (array) => {
    const resultObject = {};
    array.forEach((elem) => {
        resultObject[elem[0]] = elem[1];
    });
    return resultObject;
};

console.log(
    arrayToObject([
        ['height', 170],
        ['weight', 80],
        ['sport', 'regbi'],
        ['full name', 'John Doe'],
        ['sing', 'love'],
        ['speed', 90],
    ])
);

console.log("======Task_03======");
//3.Функция должна принимать объект и возвращать строку,
// где будут перечислены все значения свойств объекта через запятую.
//Пример работы функции:
//{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

function objectValuesToString(obj) {

    return Object.values(obj).join(', ');
}

let obj = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
console.log(objectValuesToString(obj));


console.log("======Task_04======");
//4.Напишите функцию, которая принимает объект и возвращает другой обьект, 
//который содержит все свойства исходного обьетка, но значения свойств - это их типы.
//Пример: { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } 
//==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

function objectToAnotherObject(obj) {
    let result = {};
    let array = Object.entries(obj);
    //console.log(array);

    array.forEach(element => {
        result[element[0]] = typeof (element[1]);
    });
    return result;
}

console.log(objectToAnotherObject({ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }));

console.log("======Task_04*======");
//4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который 
//содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.
//Пример:
//{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 
//{ a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

function objectToAComplicatedObject(object) {
    const result = {};

    const array = Object.entries(object);
    //console.log(array);


    array.forEach(element => {
        let secondPart = {};

        secondPart["value"] = element[1];
        secondPart["type"] = typeof (element[1]);

        result[element[0]] = secondPart;
    });

    return result;
}

let object = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
console.log(objectToAComplicatedObject(object));


console.log("======Task_05*======");
//5*. Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. 
//На вход функция получает обьект корзины (пример ниже - наименование товара и количество, а также обьект с ценами на товары, с доп уровнями вложености). К названиям товаров привязываться не стоит,
// они могут быть другими, в примере просто пример.
//const bucket = { display: 20, videocard: 100, cpu: 40, }
//const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }
//calculateCost(bucket, products); // результат = 8374

console.log("======Task_06*======");
//6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случаеФункция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных
//Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.
//function compareObjects(firstObj, secondObj) { // тут ваш код }
//примеры объектов которые можно использовать для тестирования функции 
//const obj1 = { name: 'John', age: 17, };
//const obj2 = { name: 'Mark', age: 17, };
//const obj3 = { name: 'Mark', age: 17, student: false, };
//const obj4 = { name: 'John', age: 17, };