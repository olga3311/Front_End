const arr123 = [5, 10, 30];

const multiple2 = (x) => {
  return x * 2;
};

const arr123modified = arr123.map(multiple2);
console.log(arr123modified);

const arrOfPeople = [
  { name: 'John', age: 12 },
  { name: 'Bred', age: 5 },
  { name: 'Patrick', age: 20 },
  { name: 'Cris', age: 40 },
];

const addAnniversary = (human) => {
    const resultObj = {};
    resultObj.name = human.name;
    resultObj['age'] = human['age'];
    //let isAdult;
    // if(resultObj.age >= 18) {
    //     isAdult = true
    // } else {
    //     isAdult = false
    // }
    const isAdult = resultObj.age >= 18 ? true : false;
    resultObj.anniversary = isAdult;
    return resultObj;
}

const arrOfPeopleModified = arrOfPeople.map(addAnniversary);
console.log(arrOfPeopleModified);

// Способы обьявления функций
//1 function declaration
// function NameOfFunction() {
// }
// 2 function expression
// const NameOfFunction = function() {
// }
//3 function expression with arrow fuction
// const NameOfFunction = () => {
// }


const addOneYear = (human) =>{
    const resultObj = {...human};
    //resultObj.name = human.name;
    resultObj.age = human.age + 1;
    //resultObj['age'] = human['age'] + 1; 
    return resultObj;
}
const arrOfPeopleNew = arrOfPeople.map(addOneYear);
console.log(arrOfPeopleNew);

// spread operator
const sourceArray = [1, 2, 3];
const copy = [...sourceArray];

const sourceObj = { name: 'John', age: 12 };
const copyOfObject = {... sourceObj};

//filter

const arrayOfNumbers = [ 18, 59, 1, 8, 17, 111];

const filter18 = (num) => num >= 18;

//const filter18 = (num) => num >= 18 ? true : false;
//const filter18 = (num) => {
//    if(num >= 18 ){
//        return true;
//    } else {
//return false;
//   }
//};

//const arrayOfNumber18Plus = arrayOfNumbers.filter((num) => num >= 18);
const arrayOfNumber18Plus = arrayOfNumbers.filter(filter18);
console.log(arrayOfNumber18Plus);


// Классная работа 2
 const arrOfPeople2 = [
     { name: 'John', age: 12 },
     { name: 'Bred', age: 5 },
     { name: 'Patrick', age: 20 },
    { name: 'Cris', age: 40 },
   ];
// С помощью функции filter вернем массив который содержит только элементы
// у которых age >=18


const filterforObjects = (human) => {
    if(human.age>=18){
    return true;
   } else {
return false;
   }
};

console.log(arrOfPeople.filter(filterforObjects));
