// массивы

const arrA = [1, 2, 3, 5, "abcd", null, true, undefined, [10, 100], {a: 67}];

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstElemOfB = b[0];
console.log(firstElemOfB);
console.log(b.length);//показывает длтнну массива


const resultOfPush = b.push("new last element"); //добавляет элемент в конец
console.log(b);
console.log(resultOfPush);
const resultOfPop = b.pop();//удаляет последний элемент из массива и возвращает его
console.log(b);
console.log(resultOfPop);


b.unshift("new FIRST ELEMENT"); // добавляет элемент в начало массива
console.log(b);
b.shift(); // удаляет первый элемент из массива и возвращает его
console.log(b);
