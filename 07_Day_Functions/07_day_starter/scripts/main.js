//LEVEL 1
//1
function fullName1() {
    let FirsName = "Timur"
    let LastName = "Danilov"
    console.log(LastName,FirsName)
  }
fullName1()
//2
function fullName2(FirsName = "Timur",LastName = "Danilov") {
    console.log(LastName,FirsName)
  }
fullName2()
//3
function addNumbers(a = 10,b = 4){
    console.log(a+b)
}
addNumbers()
//4
function areaOfRectangle(length=2,width=6){
    let area = length * width
    console.log(area)
}
areaOfRectangle()
//5
function perimeterOfRectangle(length=2,width=6){
    let perimeter = (length + width)*2
    console.log(perimeter)
}
perimeterOfRectangle()
//6
function volumeOfRectPrism(length=2,width=6,height=3){
    let volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism()
//7
function areaOfCircle(r=3){
    let area = r*r*Math.PI
    console.log(area)
}
areaOfCircle()
//8
function circumOfCircle(r=4){
    let circumference = 2*Math.PI*r
    console.log(circumference)
}
circumOfCircle()
//9
function density(mass = 8, volume =2){
    let density= mass/volume
    console.log(density)
}
density()
//10
function speed(s,t){
    let speed= s/t
    console.log(speed)
}
speed(80,5)
//11
function weight(mass, gravity){
    let weight = mass * gravity
    console.log(weight)
}
weight(30,10)
//12
function convertCelsiusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32
    console.log(oF)
}
convertCelsiusToFahrenheit(15)
//13
function BMI(weight, height){
    let bmi = weight/ (height * height) 
    if (bmi<18.5){
        alert('Underweight')
    } else if(bmi>=18.5 && bmi<=24.9){
        alert('Normal weight')
    } else if(bmi>=25 && bmi<=29.9){
        alert('Overweight')
    } else if(bmi>=30){
        alert('Obese')
    }
}
BMI(prompt('Your weight in kg: ',0),prompt('Your height in m: ',0))
//14
function checkSeason(){
    if (Number(new Date().getMonth())+1<=3){
        console.log('winter')
    } else if(Number(new Date().getMonth())+1<=6 && Number(new Date().getMonth())+1>3){
        console.log('spring')
    } else if(Number(new Date().getMonth())+1<=9 && Number(new Date().getMonth())+1>6){
        console.log('summer')
    } else if(Number(new Date().getMonth())+1<=12 && Number(new Date().getMonth())+1>9){
        console.log('autumn')
    }
}
checkSeason()
//15
function findMax(a,b,c){
    if (a>b && a>c){
        console.log(a)
    } else if (b>a && b>c){
        console.log(b)
    } else if (c>a && c>b){
        console.log(c)
    }
}
findMax(3,4,10)
//LEVEL 2
//1
function solveLinEquation(a,b,c){
    let x = c/(-a)
    let y = c/(-b)
    console.log(x,y)
}
solveLinEquation(2,1,5)
//2
function solveQuadratic(a,b,c){
    let D = b**2-4*a*c
    if (D>0){
        let x1 = ((-b)+Math.sqrt(D))/2*a
        let x2 = ((-b)-Math.sqrt(D))/2*a
        console.log(x1,x2)
    } else if (D == 0){
        let x1 = ((-b)+Math.sqrt(D))/2*a
        console.log(x1)
    } else {
        console.log('D<0')
    }
}
console.log(solveQuadratic(1, 24, 4))
//3
function printArray(array){
    for (i in array){
        console.log(array[i])
    }
}
printArray([1,2,3,4,5])
//4
function showDateTime(){
    console.log(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`);
}
showDateTime()
//5
function swapValues(x,y){
    console.log(y,x)
}
swapValues(4,5)
//6
function reverseArray(array){
    var a = []
    for (i in array){
        a.unshift(array[i])
    }
    console.log(a)
}
reverseArray([1,2,3,4,5])
//7
function capitalizeArray(array){
    var a = []
    for (i in array){
        a.push(array[i].slice(0,1).toUpperCase()+array[i].slice(1))
    }
    console.log(a)
}
capitalizeArray(['aaa','bbbb','cccccc','dd'])
//8
function addItem(array,item){
    array.push(item)
    console.log(array)
}
addItem([1,2,3,4,5],6)
//9
function removeItem(array,item){
    array.splice(item,1)
    console.log(array)
}
removeItem([1,2,3,4,5],3)
//10
function sumOfNumbers(x){
    var sum = 0;
    for (i = 0; i<=x;i++)
        sum = sum + i
    console.log(sum)
}
sumOfNumbers(5)
//11
function sumOfOdds(x){
    var sum = 0;
    for (i = 0; i<=x;i++)
        if (i%2!=0){
            sum = sum + i
        }
    console.log(sum)
}
sumOfOdds(5)
//12
function sumOfEven(x){
    var sum = 0;
    for (i = 0; i<=x;i++)
        if (i%2==0){
            sum = sum + i
        }
    console.log(sum)
}
sumOfEven(5)
//13
function evensAndOdds(x){
    var even = 0
    var odds = 0
    for (i = 0; i<=x;i++)
        if (i%2==0){
            even = even+1
        } else {
            odds = odds+1
        }
    console.log(odds,even)
}
evensAndOdds(100)
//14
function sum(...args){
    var sum = 0 
    for (i in args){
        sum = sum + args[i]
    }
    console.log(sum)
}
sum(1,5,23,1,4,8,8)
//15
function randomUserIp(){
    console.log(`${Math.floor(Math.random()*256)}:${Math.floor(Math.random()*256)}:${Math.floor(Math.random()*256)}:${Math.floor(Math.random()*256)}`)
}
randomUserIp()
//16
function randomMacAddress(){
    a = []
    var m = Boolean
    for (i = 0; i<6;i++){
        for (j = 0; j<2;j++){
            m = Boolean((Math.floor(Math.random()*10))%2)
            if (m){
                a.unshift(Math.floor(Math.random()*10))
            } else {
                a.unshift(String.fromCharCode(Math.floor(Math.random()*5)+65))
            }
        }
    }
    console.log(a.toString().replace(/([^a-z0-9 ]+)/gi, ''))
}
randomMacAddress()
//17
function randomHexaNumberGenerator(){
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
}
randomHexaNumberGenerator()
//18
function userIdGenerator(){
    a = []
    for (i = 0; i<7;i++){
        var m = Boolean((Math.floor(Math.random()*10))%2)
        if (m){
            a.unshift(Math.floor(Math.random()*10))
        } else {
            a.unshift(String.fromCharCode(Math.floor(Math.random()*57)+65))
        }
    };
console.log(`${a.toString().replace(/([^a-z0-9 ]+)/gi, '')}`);
}
userIdGenerator()