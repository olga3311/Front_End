const peopleExtended = [
    { name: 'Alice', age: 23, isActive: true },
    { name: 'Bob', age: 45, isActive: false },
    { name: 'Charlie', age: 30, isActive: true },
    { name: 'David', age: 54, isActive: false },
    { name: 'Eva', age: 29, isActive: true },
    { name: 'Frank', age: 37, isActive: false },
    { name: 'Grace', age: 40, isActive: true },
    { name: 'Hannah', age: 22, isActive: false },
    { name: 'Ian', age: 34, isActive: true },
    { name: 'Julia', age: 31, isActive: false },
    { name: 'Kevin', age: 26, isActive: true },
    { name: 'Laura', age: 44, isActive: false },
    { name: 'Michael', age: 52, isActive: true },
    { name: 'Nina', age: 27, isActive: false },
    { name: 'Oscar', age: 35, isActive: true }
];

//peopleExtended.forEach
//    (human) => {
//      const newListItemElement = document.createElement('li');
//       newListItemElement.textContent = human.name;
//        AllListElement.append(newListItemElement);
//    }


const AllListElement = document.querySelector('ul');
//peopleExtended.forEach(createAndAddnewListItem);
//function createAndAddnewListItem(human) {
//  const newListItemElement = document.createElement('li');
//  newListItemElement.textContent = human.name;
//  AllListElement.append(newListItemElement);
//}

const peopleModified = peopleExtended.map (createNewListItem);

function createNewListItem(human) {
    const newListItemElement = document.createElement('li');
    newListItemElement.textContent = human.name;
    return newListItemElement;
}
AllListElement.append(...peopleModified);
console.log(peopleModified);



// Вывод на страничку только первые 5
//  вывести первыхпять из массива

const firstFivePeople = peopleExtended.slice(0, 5);
const firstFiveListItems = firstFivePeople.map(createNewListItem);
AllListElement.append(...firstFiveListItems);

