//1
let age = prompt("Enter your age: ", 18);
if (age <18 ){
    a = 18-age;
    alert(`You are left with ${a} years to drive.`);
} else {
    alert('You are old enough to drive.');
}
//2
let myAge = 18;
let yourAge = prompt("Enter your age: ", 18);
if (yourAge < myAge ){
    b = myAge-yourAge;
    alert(`You are ${b} years yunger than me.`);
} else if (yourAge > myAge){
    b = yourAge-myAge;
    alert(`You are ${b} years older than me.`);
} else {
    alert('We are the same age');
}
//3
let a = 4;
let b = 3;
if (a<b){
    console.log(`${a} меньше ${b}`);
} else {
    console.log(`${a} больше ${b}`);
}
let accessAllowed = a > b ? (`${a} больше ${b}`) : (`${a} меньше ${b}`);
console.log(accessAllowed);
//4
num = prompt("Enter random number: ", 0);
if (num % 2 == 0){
    console.log(`${num} - is an even number`)
} else {
    console.log(`${num} - is an odd number.`)
}