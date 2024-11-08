const time = "08:30";

let arrC = time.split(':');
console.log(arrC);

const min = +arrC[1];
console.log(min);
console.log(typeof min);

/*
if( 0 < min && min < 15){
    console.log("Это 1 четверть");

}
 else if(min <= 30 ){
    console.log("Это 2 четверть");
}

 else if( min <= 45 ){
    console.log("Это 3 четверть");
}
else {
    console.log("Это 4 четверть");
}


 else if( 46 < min && min <= 59  || min == 0){
    console.log("Это четвертая четверть");
}
*/

console.log (`это  ${ Math.ceil(min/15)} четверть`);