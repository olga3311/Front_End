// ключ - сторока иди символ, значение - любое
const JohnyDepp = {
    name: 'Johny',
    surname: 'Depp',
    age: 61,
    hobby: ['cricket', 'golf', 'quadrober', 'actor', 'singing'],
    films: {
        1999:['Pirates-1', 'Edward Scissorhands', 'Sleepy Hollow'],
        2003:['Pirates-3', 'Pitates-4'],
        2001:['Pirates-2', 'Cocaine']
    },
    singing: function(){
        console.log('I am singing')
    }
}
//чтение свойств обьекта
// 1
console.log(JohnyDepp.name);
//2
console.log(JohnyDepp['name']);
//разница
const request = "age";
console.log(JohnyDepp.request);  //it doesn't work
console.log(JohnyDepp[request]); 

// add  properties
JohnyDepp.height = 175;
console.log( JohnyDepp); 

// delete properties
delete JohnyDepp.age;
console.log(JohnyDepp);

console.log('============************');
//цикл для чтения всех записей в объекте
for(let k in JohnyDepp){
    console.log(JohnyDepp[k]);
}
console.log('============************');

//читаем значения свойства 1999 в знаении свойства films
console.log(JohnyDepp ['films']['1999'][0]);

//вызовем метод (функцию) у объекта ДжонниДепп
JohnyDepp.singing();

//ПРИмер: Math  глобальный обьеект с множетвом методом
console.log('============************');
console.log('============************');
const RikkiMartinShow = {
    time: '17-00',
    place:'Berlin',
    price: '100',
    duration: '4'
}

// проверка есть ли свойство у обьекта
console.log('age' in JohnyDepp);

const human = {
    limbs: 4,
    walking: function(){
        console.log('I am walking')
}
}

console.log('============************');
Object.setPrototypeOf(JohnyDepp, human);
JohnyDepp.walking();


//создание обьекта с помощью литерала обьекта
const someOblect = {};

//создание обьекта с помощью конструктора
const someOtherObject = new Object();

// У каждого обьекта есть как минимум один прототип, он хранится 
// в статическом свойстве конструктора Object.prototype и автоматически
// становиться прототипом у каждого нового обьекта

// создадим обьект который может быть прототипом в теории для Джонни
const human1 = {
    limbs: 4,
    walking: function() {
        console.log('I am walking');
    },
}

// и укажем что human - прототип. (Object - конструктор)
Object.setPrototypeOf(JohnyDepp, human1);

// проверяем унаследовался ли метод от human
JohnyDepp.walking();

// создание обьекта с помощью литерала обьекта
const someObj = {};
// создание обьекта с помощью конструктора
const someAnotherObject = new Object();

// У каждого обьекта есть как минимум один прототип, он хранится 
// в статическом свойстве конструктора Object.prototype и автоматически
// становиться прототипом у каждого нового обьекта


console.log('============************');
// *****************************
// Методы для работы с обьектами

// Получить ключи в виде массива
 const keysOfJohnyDepp = Object.keys(  JohnyDepp);
 console.log(keysOfJohnyDepp);

 //Получить  значеия в виде массива
 const valuesOfJohnyDepp = Object.values(JohnyDepp);
console.log(valuesOfJohnyDepp);


console.log('============************');
//получить список и ключей и их значений
//  [ [key, value], [...], [....]....]

const entriesOfJohnyDepp = Object.entries(JohnyDepp);
console.log(entriesOfJohnyDepp);

// из массива получит  обьект
//элементы массива должны быть массивами на 2 элемнта

const cloneOfJohn = [
    [ 'name', 'Johny' ],
  [ 'surname', 'Depp' ],
  [ 'hobby', [ 'cricket', 'golf', 'quadrober', 'actor', 'singing' ] ],
  [ 'height', 175 ]
]
const cloneOfJohnObject = Object.fromEntries(cloneOfJohn);
console.log(cloneOfJohn);

// Классная работа
// Из обьекта const RikkiMartinShow или human вытянуть сначала массив ключей,
// а потом массив значений. Сохранить в отдельные переменные.

const keysOfRikki = Object.keys(RikkiMartinShow);
console.log(keysOfRikki);

const valuesOfRikki = Object.values(RikkiMartinShow)
console.log(valuesOfRikki);

