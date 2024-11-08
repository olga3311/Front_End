// function getTodos(){
//     fetch('https://jsonplaceholder.typicode.com/todos')
// }

//Аналог вт этого кода:
//
//

const getTodos = async () => {
    try{
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//console.log(response);
const data = await response.json();
console.log(data);
    } catch {
console.log('a mistake')
    } finally {
        console.log('the code works anyway.')
    }
}

getTodos();

console.log('Асинхронную функцию запустили и пошли дальше');

