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