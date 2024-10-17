//LEVEL 1
//1
let arr=Array()
console.log(arr)
//2
// var webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'];
//3
console.log(webTechs.length,arr.length);
//4
console.log(webTechs[0],webTechs[Math.floor(webTechs.length/2)],webTechs[webTechs.length-1]);
//5
const mixedDataTypes = [12,'12',true,null,undefined];
console.log(mixedDataTypes.length);
//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1]);
//10
for (var i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i])
};
//11
for (var i = 0; i<itCompanies.length; i++){
    console.log(itCompanies[i].toLowerCase())
};
//12
console.log(itCompanies[0],',',itCompanies[1],',',itCompanies[2],',',itCompanies[3],',',itCompanies[4],',', itCompanies[5], ' and ', itCompanies[6],' are big IT companies.');
//13
let a = prompt('enter anything it-compony', 'Google')
if (itCompanies.includes(a)){
    console.log('you right!')
} else {
    console.log('noy')
}
//14
for (var i = 0; i<itCompanies.length; i++){
    if ((itCompanies[i].indexOf('o') !== itCompanies[i].lastIndexOf('o')) && (itCompanies[i].toLowerCase().indexOf('o') !== -1)){
        console.log(itCompanies[i])
    }
};
//15 закоментил, чтобы не конфликтовало
// console.log(itCompanies.sort());
//16
// console.log(itCompanies.reverse());
//17
console.log(itCompanies.slice(3));
//18
console.log(itCompanies.slice(0,4));
//19
if (itCompanies.length % 2 == 0){
    console.log(itCompanies[itCompanies.length/2])
} else {
    let a1 = Math.floor(itCompanies.length/2)
    let a2 = a1-1
    console.log(itCompanies)
    console.log(itCompanies[a1])
    console.log(itCompanies[a2])
}
//20
// itCompanies.shift();
// console.log(itCompanies);
//21
// if (itCompanies.length % 2 == 0){
//     console.log(itCompanies.slice(itCompanies.length/2,1))
// } else {
//     let a1 = Math.floor(itCompanies.length/2)-1
//     let a2 = a1-2
//     console.log(itCompanies.splice(a1,1))
//     console.log(itCompanies.splice(a2,1))
//     console.log(itCompanies)
// }
//22
// itCompanies.pop()
// console.log(itCompanies);
//23
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);
//LEVEL 2
//1
console.log(countries);
console.log(webTechs);
//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/([^a-z0-9 ]+)/gi, ''));
let words = text.split(' ');
console.log(words);
console.log(words.length);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
!shoppingCart.includes('Meat') ? shoppingCart.unshift('Meat') : shoppingCart
!shoppingCart.includes('Sugar') ? shoppingCart.push('Sugar') : shoppingCart
confirm('Honey?') == true ? shoppingCart : shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)
//4
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia');
//5
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass'), console.log(webTechs);
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
//LEVEL 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)
const sortages = ages.sort()
console.log(sortages)
console.log(sortages[0],sortages[ages.length-1])
console.log((parseInt(sortages[Math.floor(ages.length/2)])+parseInt(sortages[Math.floor(ages.length/2)-1]))/2)
var sum = 0
for (var i = 0; i<ages.length; i++)
    sum = sum + parseInt(ages[i])
console.log(sum/ages.length)
console.log('The maximum value is greater than the minimum by - ',parseInt(sortages[ages.length-1]) - parseInt(sortages[0]))
//countries.slice(0,10)
//2
if (countries.length % 2 == 0){
    console.log(countries[Math.floor(countries.length/2)])
} else {
    console.log(countries[Math.floor(countries.length/2)])
    console.log(countries[Math.floor(countries.length/2)-1])
}
//3
if (countries.length % 2 == 0){
    console.log(countries.splice(0,countries.length/2))
    console.log(countries)
} else {
    console.log(countries.splice(0,countries.length/2+1))
    console.log(countries)
}
