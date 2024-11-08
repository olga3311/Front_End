console.log("======Task_05*======");
//Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. 
//На вход функция получает обьект корзины (пример ниже - наименование товара и количество,
//а также обьект с ценами на товары, с доп уровнями вложености). К названиям товаров привязываться не стоит,
//они могут быть другими, в примере просто пример.

const basket = {
    display: 20,
    videocard: 100,
    cpu: 40,
}
const products = {
    warehouse1: {
        videocard: 12.5,
    },
    warehouse2: {
        display: 56.2,
        cpu: 150,
    },
}

function getTotal(){
let prices = [];
for (let warehouse in products) {
    let innerEntries = Object.entries(products[warehouse]);
    prices.push(...innerEntries); 
}

const newBasket = Object.entries(basket);
let totalPrice = 0;
newBasket.forEach(element => {
     let subprice =  prices.filter(price =>  price[0]== element[0] )[0][1] * element[1];  
     totalPrice = totalPrice + subprice;
    }  
);
return totalPrice;
}
 console.log( getTotal());

console.log("======Task_06*======");
//6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случаеФункция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных
//Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.
//function compareObjects(firstObj, secondObj) { // тут ваш код }
//примеры объектов которые можно использовать для тестирования функции 
//const obj1 = { name: 'John', age: 17, };
//const obj2 = { name: 'Mark', age: 17, };
//const obj3 = { name: 'Mark', age: 17, student: false, };

