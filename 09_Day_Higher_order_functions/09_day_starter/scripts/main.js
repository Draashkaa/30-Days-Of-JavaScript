//LEVEL 1
//1,2
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
numbers.map(num => console.log(num))
console.log(numbers.filter(num => num>3))
const sum = numbers.reduce((acc,cur) => acc+cur,0)
console.log(sum)
//3
const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
countries2.forEach(elem => console.log(elem))
//4
names.forEach(elem => console.log(elem))
//5
numbers2.forEach(elem => console.log(elem))
//6
console.log(countries2.map(elem => elem.toUpperCase()))
//7
console.log(countries2.map(elem => elem.length))
//8
console.log(numbers2.map(elem => elem**2))
//9
console.log(names.map(elem => elem.toUpperCase()))
//10
ProductPrice = products.map((product) => product.price)
console.log(ProductPrice)
//11
console.log(countries2.filter(elem => elem.endsWith('land')))
//12
console.log(countries2.filter(elem => elem.length == 6))
//13
console.log(countries2.filter(elem => elem.length >= 6))
//14
console.log(countries2.filter(elem => elem.startsWith('E')))
//15
ProductPrice = products.filter((product) => typeof product.price !== 'string')
console.log(ProductPrice)
//16
const arr = [123,'123','helloy',true]
console.log(arr.filter((elem) => typeof elem === 'string'))
//17
console.log(numbers2.reduce((acc,cur) => acc+cur,0))
//18
console.log(countries2.reduce((acc, cur) => acc + ', ' + cur), ' are north European countries')
//19 some проверяет, похожи ли некоторые элементы в одном аспекте. Every проверяет, все ли элементы похожи в одном аспекте. Оба возвращают логичесткое значние
//20
console.log(names.some(name => name.length>7))
//21
console.log(countries2.every(elem => elem.includes('land')))
//22 find возвращает первый элемент, подходящей под условия, а findindex возвращает позицию данного элемента
//23
console.log(countries2.find(elem => elem.length == 6))
//24
console.log(countries2.findIndex(elem => elem.length == 6))
//25
console.log(countries2.findIndex(elem => elem == 'Norway'))
//26
console.log(countries2.findIndex(elem => elem == 'Russia'))
//LEVEL 2
//1
console.log(products.map((product) => product.price).filter((product) => typeof product.price !== 'string').reduce((acc,cur) => acc + cur,0))
//2
console.log(products.reduce((acc, curr) => acc + curr.price, 0))
//3
function categorizeCountries(){
  countriesName = countries.filter(elem => elem.name.endsWith('land') || elem.name.endsWith('ia') || elem.name.endsWith('island') || elem.name.endsWith('stan'))
  console.log(countriesName)
}
categorizeCountries()
//4
function LetterCountry(){
  for (let i = 65 ; i != 91; i++){
    a = countries.filter(elem => elem.name.startsWith(String.fromCharCode(i)))
    console.log(String.fromCharCode(i),a.length)
  }
}
LetterCountry()
//5
var result = []
function getFirstTenCountries() {
  var b = Math.floor(Math.random()*240)
  for (let i = b; i<b+10;i++){
    result.push(countries[i])
  }
  console.log(result);
}
getFirstTenCountries()
//6
var result2 = []
function getLastTenCountries(){
  var s = 240
  for (let i = s; i<s+10;i++){
    result2.push(countries[i])
  }
  console.log(result2);
}
getLastTenCountries()
//7
var b = 0
var letter
function LetterMax(){
  for (let i = 65 ; i != 91; i++){
    a = countries.filter(elem => elem.name.startsWith(String.fromCharCode(i)))
    if (b>a.length){
      b = b
    } else {
      b = a.length
      letter = String.fromCharCode(i)
    }
  }
  console.log(letter,b)
}
LetterMax()