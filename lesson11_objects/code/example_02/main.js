const arrayExample = [1, 5, 10];

const funcWhatToDoWithElement = (n) => {
    console.log(n);
}

//for (let i = 0; i < arrayExample.length; i++){
//  funcWhatToDoWithElement( arrayExample[i])
//}

arrayExample.forEach(funcWhatToDoWithElement);

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

const keyOfJohnyDepp = Object.keys( JohnyDepp);
//console.log(keyOfJohnyDepp);

const funcWhatToDoWithJohny = (keyOfJohnyDepp) => {
    console.log(keyOfJohnyDepp);
}

keyOfJohnyDepp.forEach(funcWhatToDoWithJohny);

// вывести хобби
JohnyDepp['hobby'].forEach(funcWhatToDoWithElement);

[1, 5, 8].forEach(funcWhatToDoWithElement);