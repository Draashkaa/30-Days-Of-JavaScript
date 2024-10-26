//LEVEL 1
//1
let firstName = 'Gordon';
let lastName = 'Freeman';
let country = "USA";
let city = "city17";
let age = 27;
let isMarried = false;
let year = 1998;
console.log(typeof firstName,typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);
//2
console.log('10' == 10, '10' === 10);
//3
console.log(parseInt('9.8') == 10);
//4
console.log(1 == 1);
console.log(1 != 2);
console.log(null <= 0);
console.log(1 < 1);
console.log(1 > 2);
console.log("1" === 1);
//5
let a1 = 4 > 3 //true
let a2 = 4 >= 3 //true
let a3 = 4 < 3 //false
let a4 = 4 <= 3 //false
let a5 = 4 == 4 //true
let a6 = 4 === 4 //true
let a7 = 4 != 4 //false
let a8 = 4 !== 4 //false
let a9 = 4 != '4' //false
let a10 = 4 == '4' //true
let a11 = 4 === '4' //false
let a12 = 'python'.length != 'jargon'.length //false 
console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
//6
let b1 = 4 > 3 & 10 < 12 //true
let b2 = 4 > 3 & 10 > 12 //false
let b3 = 4 > 3 || 10 <12 //true
let b4 = 4 > 3 || 10 >12 //true
let b5 = !(4 > 3) //false
let b6 = !(4 < 3) //true
let b7 = !(false) //true
let b8 = !(4 > 3 & 10 < 12) // false
let b9 = !(4 > 3 & 10 > 12) //true
let b10 = !(4 === '4') //true
let b11 = !('python'.includes("on") & 'dragon'.includes("on")) //false
console.log(Boolean(b1),Boolean(b2),b3,b4,b5,b6,b7,b8,b9,b10,b11)
//7
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`)
console.log(new Date().getDay())
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getTime())

//LEVEL 2
let i = prompt ('Введите номер задания: ','')
switch(i){
case('1'):
    //1
    var b = prompt("Write b :", 0);
    var h = prompt("Write h :", 0);
    console.log("S = ",(0.5*(Math.abs(b)*Math.abs(h))));
    break
case('2'):
    //2
    var a = prompt("Write a :", 0);
    b = prompt("Write b :", 0);
    var c = prompt("Write b :", 0);
    console.log(Number(Math.abs(a))+Number(Math.abs(b))+Number(Math.abs(c)));
    break
case('3'):    
    //3
    a = prompt("Write a :", 0);
    b = prompt("Write b :", 0);
    console.log("S = ",(Math.abs(a)*Math.abs(b)));
    console.log("P = ",2*(Number(Math.abs(a))+Number(Math.abs(b))));
    break
case('4'):
    //4
    var r = prompt("Write r :", 0);
    console.log("S = ",Math.abs(r)*Math.PI);
    break
case('5'):
    //5
    var x = prompt("Write x :", 0);
    var y = 2*x-2;
    console.log(`${x}\t${y}`);
    break
case('6'): 
    //6
    var x1 = 2;
    var y1 = 2;
    var x2 = 6
    var y2 = 10;
    console.log((y2-y1)/(x2-x1));
    break
case('7'):
    //7
    x1 = 2;
    y1 = 2;
    x2 = 6;
    y2 = 10;
    let _x1 = prompt("Write x1 :", 0);
    let _x2 = prompt("Write x2 :", 0);
    let _y1 = 2*_x1-2;
    let _y2 = 2*_x2-2;
    (_y2-_y1)/(_x2-_x1) > (y2-y1)/(x2-x1) 
    ? console.log(`m1 больше`) : 
    console.log(`m2 больше`);
    break
case('8'):
    //8
    x = prompt("Write x :", 0);
    a = 1;
    b = 6;
    c = 9;
    y = a*x**2+b*x+c;
    let D = b**2 - 4*a*c;
    let a1 = (-b - Math.sqrt(D))/2*a;
    let a2 = (-b + Math.sqrt(D))/2*a;
    console.log(y);
    console.log(a1,a2);
    break
case('9'):
    //9
    a = prompt('Enter hours: ');
    b = prompt('Enter rate per hour: ');
    console.log(a*b);
    break
case('10'):
    //10
    a = prompt('say my name(haisenberg): ');
    a.length > 7 ? console.log(`you're goddamn right!'`) : console.log(`noy`);
    break
case('11'):
    //11
    a = prompt('Fristname: ');
    b = prompt('Lastname: ');
    a.length > b.length ? console.log(`Your first name, ${a} is longer than your family name, ${b}`) : console.log(`Your lastname name, ${b} is longer than your family firstname, ${a}`);
    break
case('12'):
    //12
    let myAge = 250;
    let yourAge = 25;
    console.log(`I am ${myAge-yourAge} years older than you.`);
    break
case('13'):
    //13
    let year = prompt("Enter your age: ", new Date().getFullYear());
if (year > new Date().getFullYear()-18 ){
    a = new Date().getFullYear()-year;
    alert(`You ${a} years. You are left with ${18-a} years to drive.`);
} else {
    alert('You are old enough to drive.');
}
    break
case('14'):
    //14
    let age = prompt("Enter your age: ", 100);
    console.log(age*365*24*60*60)
    break
case('15'):
    //15
    console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}  ${new Date().getHours()}:${new Date().getMinutes()}`);
    console.log(`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`);
    console.log(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`);
case('16'):
    //LEVEL 3
    //1
    console.log(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}  ${new Date().getHours()>12 ? String(new Date().getHours()-12).length < 2 ? `0${new Date().getHours()-12}` : new Date().getHours()-12 : new Date().getHours()}:${new Date().getMinutes()<10 ? `0new Date().getMinutes()`: new Date().getMinutes()}`);}