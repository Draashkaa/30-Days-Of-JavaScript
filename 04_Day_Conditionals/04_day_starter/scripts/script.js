let i = prompt('Введите номер задания: ', '')
switch (i) {
    case ('1'):
        //LEVEL 1
        //1
        let age = prompt("Enter your age: ", 18);
        if (age < 18) {
            let a = 18 - age;
            alert(`You are left with ${a} years to drive.`);
        } else {
            alert('You are old enough to drive.');
        }
        break
    case ('2'):
        //2
        let myAge = 18;
        let yourAge = prompt("Enter your age: ", 18);
        if (yourAge < myAge) {
            let b = myAge - yourAge;
            alert(`You are ${b} years yunger than me.`);
        } else if (yourAge > myAge) {
            let b = yourAge - myAge;
            alert(`You are ${b} years older than me.`);
        } else {
            alert('We are the same age');
        }
        break
    case ('3'):
        //3
        let a = 4;
        let b = 3;
        if (a < b) {
            console.log(`${a} меньше ${b}`);
        } else {
            console.log(`${a} больше ${b}`);
        }
        let accessAllowed = a > b ? (`${a} больше ${b}`) : (`${a} меньше ${b}`);
        console.log(accessAllowed);
        break
    case ('4'):
        //4
        num = prompt("Enter random number: ", 0);
        if (num % 2 == 0) {
            console.log(`${num} - is an even number`)
        } else {
            console.log(`${num} - is an odd number.`)
        }
        break
    case ('5'):
        //LEVEL 2
        //1
        let points = prompt("Enter points: ", 52);
        if (100>=points>=80){
            console.log('A')
        } else if(80>points>=70){
            console.log('B')
        } else if(70>points>=60){
            console.log('C')
        } else if(60>points>=50){
            console.log('D')
        } else if(50>points>=0){
            console.log('F')
        }
        break
    case ('6'):
        //2
        console.log(Number(new Date().getMonth())+1)
        if (Number(new Date().getMonth())+1<=3){
            console.log('winter')
        } else if(Number(new Date().getMonth())+1<=6 && Number(new Date().getMonth())+1>3){
            console.log('spring')
        } else if(Number(new Date().getMonth())+1<=9 && Number(new Date().getMonth())+1>6){
            console.log('summer')
        } else if(Number(new Date().getMonth())+1<=12 && Number(new Date().getMonth())+1>9){
            console.log('autumn')
        }
        break
    case('7'):
        //3
        console.log(new Date().getDay());
        if (new Date().getDay()<=6 && new Date().getDay()!=0){
            console.log('working day')
        } else {
            console.log('weekend')
        }
        break
    case('8'):
        //LEVEL 3
        //1
        var m = prompt('Enter month: ',0)
        console.log(m)
        if (m == '1' || m == '3'|| m == '5'|| m == '7'|| m == '8'|| m == '10'|| m == '12'){
            console.log('31 days');
        } else if (m == '4' || m == '6' || m == '9' || m == '11'){
            console.log('30 days');
        } else if(m == '2'){
            new Date().getFullYear() % 4 ? console.log('28 days') : console.log('29 days');
        }
        break
}