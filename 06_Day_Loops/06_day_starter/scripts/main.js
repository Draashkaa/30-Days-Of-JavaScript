//LEVEL 1
//1
var i = 0
for (i = 0; i<=10;i++){
    console.log(i);
};
var i = 0
while (i <= 10){
    console.log(i);
    i++
};
var i = 0
do {
  console.log(i)
  i++
} while (i <= 10);
//2
var i = 10
for (i = 10; i<=0;i--){
    console.log(i);
};
var i = 10
while (i >= 0){
    console.log(i);
    i--
};
var i = 10
do {
  console.log(i)
  i--
} while (i >= 0);
//3
var n = prompt('enter n: ',2)
for (i = 0; i <= n; i++){
    console.log(i);
};
//4
var i = 1;
while (i <= 6){
    console.log('#'.repeat(i));
    i++
};
//5
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
};
//6 
const numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`i\ti^2\ti^3`)
for (const num of numbers) {
    console.log(`${num}\t${num**2}\t${num**3}`)
};
//7
var i = 0
for (i = 0; i<=100;i++){
    if (i%2==0){
        console.log(i);
    }
};
//8
var i = 0
for (i = 0; i<=100;i++){
    if (i%2!=0){
        console.log(i);
    }
};
//9 не понял
var i = 0
for (i = 0; i<=100;i++){
    if (i%2!=0 && i%3!=0){
        console.log(i);
    }
};
//10
var i = 0
var sum = 0
for (i = 0; i<=100;i++){
    console.log(i);
    sum = sum + i;
};
console.log(sum);
//11
var i = 0
var SumEvens = 0
for (i = 0; i<=100;i++){
    if (i%2==0){
        SumEvens = SumEvens + i;
    }
};
console.log(SumEvens)
//12
var i = 0
var SumEvens = 0
var SumOdds = 0
var arr = []
for (i = 0; i<=100;i++){
    if (i%2==0){
        SumEvens = SumEvens + i;
    } else {
        SumOdds = SumOdds + i;
    }
};
arr.unshift(SumOdds);
arr.unshift(SumEvens);
console.log(arr);
//13
var i = 0
var a = []
for (i = 0; i<5;i++){
    a.unshift(Math.floor(Math.random()*10))
};
console.log(a)
//14
var i = 0
var a = []
while (i < 5){
    var b = Math.floor(Math.random()*10)
    if (!a.includes(b)){
        a.unshift(b)
        i++
    }
};
console.log(a)
//15
a = []
for (i = 0; i<=5;i++){
    var m = Boolean((Math.floor(Math.random()*10))%2)
    if (m){
        a.unshift(Math.floor(Math.random()*10))
    } else {
        a.unshift(String.fromCharCode(Math.floor(Math.random()*25)+97))
    }
};
console.log(a.toString().replace(/([^a-z0-9 ]+)/gi, ''))
//LEVEL 2
//1
var g = prompt('random number ',10)
a = []
for (i = 0; i<=g;i++){
    var m = Boolean((Math.floor(Math.random()*10))%2)
    if (m){
        a.unshift(Math.floor(Math.random()*10))
    } else {
        a.unshift(String.fromCharCode(Math.floor(Math.random()*25)+97))
    }
};
console.log(a.toString().replace(/([^a-z0-9 ]+)/gi, ''))
//2
a = []
for (i = 0; i<=5;i++){
    var m = Boolean((Math.floor(Math.random()*10))%2)
    if (m){
        a.unshift(Math.floor(Math.random()*10))
    } else {
        a.unshift(String.fromCharCode(Math.floor(Math.random()*5)+97))
    }
};
console.log(`#${a.toString().replace(/([^a-z0-9 ]+)/gi, '')}`);
//3
console.log(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`);
//4
a = []
for (const i of countries){
    a.unshift(i.toLocaleUpperCase())
}
console.log(a)
//5
a = []
for (const i of countries){
    a.unshift(i.length)
}
console.log(a)
//6
a = []
for (const i of countries){
    b = []
    b.unshift(i.length)
    b.unshift(i.toLocaleUpperCase().slice(0,3))
    b.unshift(i)
    a.push(b)
}
console.log(a)
//7
a = []
for (const i of countries){
    if (i.includes('land')){
        a.unshift(i)
    }
}
a != [] ? console.log(a) : console.log('All these countries are without land')
//8
a = []
for (const i of countries){
    if (i.includes('ia')){
        a.unshift(i)
    }
}
a != [] ? console.log(a) : console.log('All these countries are without ia')
//9
a = []
b = []
for (i = 0; i<countries.length;i++){
    b.push(countries[i].length)
}
for (i = 0; i<countries.length;i++){
    if (countries[i].length == Math.max.apply(null,b)){
        a.push(countries[i])
    }
}
console.log(a)
//10
a=[]
for (i = 0; i<countries.length;i++){
        if (countries[i].length == 5){
            a.push(countries[i])
        }
}
console.log(a)
//11
a = []
b = []
for (i = 0; i<webTechs.length;i++){
    b.push(webTechs[i].length)
}
for (i = 0; i<webTechs.length;i++){
    if (webTechs[i].length == Math.max.apply(null,b)){
        a.push(webTechs[i])
    }
}
console.log(a)
//12
a = []
for (const i of webTechs){
    b = []
    b.unshift(i.length)
    b.unshift(i)
    a.push(b)
}
console.log(a)
//13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
a = []
for (const i of mernStack){
    a.push(i.slice(0,1))
}
console.log(a.toString().replace(/([^a-z0-9 ]+)/gi, ''))
//14
a = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (const i of a){
    console.log(i)
}
//15
a = []
var fruit = ['banana', 'orange', 'mango', 'lemon']
for (const i of fruit){
    a.unshift(i)
}
console.log(a)
//16
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
for (const i of fullStack[0]){
    console.log(i.toUpperCase())
}
for (const j of fullStack[1]){
    console.log(j.toUpperCase())
}
