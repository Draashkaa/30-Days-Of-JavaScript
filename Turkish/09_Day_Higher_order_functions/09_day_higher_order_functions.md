<<<<<<< HEAD
<div align="center">
  <h1> 30 Günde Javascript: Yüksek Dereceden -High Order- Fonksiyonlar</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<sub>Çevirmen:
  <a href="https://github.com/hsynalv" target="_blank">Hasan Hüseyin Alav</a><br>
  <small> Kasım 2022</small>
  </sub>

</div>

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)

![Day 9](/images/banners/day_1_9.png)

- [Day 9](#day-9)
	- [Yüksek Dereceden Fonksiyonlar](#higher-order-function)
		- [Callback](#callback)
		- [Returning function](#returning-function)
		- [Setting time](#setting-time)
			- [Setting Interval using a setInterval function](#setinterval-fonksiyonu-ile-süre-ayarlama)
			- [Setting a time using a setTimeout](#settimeout-ile-zaman-ayarlama)
	- [Functional Programming- Fonksiyonel Programlama](#functional-programming---fonksiyonel-programalama)
		- [forEach](#foreach)
		- [map](#map)
		- [filter](#filter)
		- [reduce](#reduce)
		- [every](#every)
		- [find](#find)
		- [findIndex](#findindex)
		- [some](#some)
		- [sort](#sort)
			- [Sorting string values](#string-değerleri-sıralama)
			- [Sorting Numeric values](#sayısal-değerleri-sıralama)
			- [Sorting Object Arrays](#array-nesnelerini-sıralamak)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)


# Day 9

## Higher Order Function

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise **callback** fonksiyon denir.

### Callback

Callback fonksiyon yukarıda da söylediğimiz gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

```js
// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
  return n ** 2
}
​
// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### Returning function

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.
​
```js
// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Callback fonksiyonunu nasıl kullandığımızı görelim. Örneğin _foreach_ metodu callback kullanan metotlarından biridir.

```js
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

Yukarıdaki örnek aşağıdaki gibi basitleştirilebilir::

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### Setting time

JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

- setInterval
- setTimeout

#### **setInterval** fonksiyonu ile süre ayarlama

JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için **SetInterval** fonksiyonunu kullanırız. SetInterval, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır. 


```js
// syntax
var duration = 10
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s
```

#### **setTimeout** ile zaman ayarlama

In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için **setTimeOut** metodu imdadımıza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır.

```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) 
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak
```

## Functional Programming - Fonksiyonel Programalama

JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir. Bu bölümde, _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_ metodlarını göreceğiz

### forEach

_forEach_: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.
 
```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// Yukarıdaki kod arrow function kullanılarak yazılabilir.
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// Daha basite indirgemek istersek
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
```

```sh
1
2
3
4
5
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
```

```sh
15
```

```js
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

```sh
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND
```

### map

_map_:Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```js
/*Arrow function ve explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```sh
[1, 4, 9, 16, 25]
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```sh
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```sh
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
```

```js
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

```sh
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```

### filter

_Filter_: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

```js
//Ülkeler "land" ifadesi içersin
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
```

```sh
['Finland', 'Ireland']
```

```js
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
```

```sh
['Albania', 'Bolivia','Ethiopia']
```

```js
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
```

```sh
['Japan', 'Kenya']
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
```

```sh
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```

### reduce

_reduce_: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

```js
arr.reduce((acc, cur) => {
  // bir değer döndürmeden önce bazı işlevler buraya kodlanır
 return 
}, initialValue)
```

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```

```js
15
```

### every

_every_:  Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)
```

```sh
true
```

```js
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // hepsi true mu? 

console.log(areAllTrue) // true
```

```sh
true

```

### find

_find_: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

```js
18
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```sh
Asabeneh
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
```

```sh
{ name: "Asabeneh", score: 95 }
```

### findIndex

_findIndex_: koşulu karşılayan ilk elemanın index değerini döndürür.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### some

_some_: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

```js
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
```

### sort

_sort_: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler

#### String değerleri sıralama

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

#### Sayısal değerleri sıralama

Sayıları sıralamak malesef o kadar basit değil. Sıralama yöntemini doğrudan bir sayı dizisine uygularsak, beklenmedik bir sonuç göreceğiz:

```js
const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
```
 Sayısal değerleri artan veya azalan düzende sıralamak için, sıralama kriterini belirleyen bir fonksiyon kullanmamız gerekir. Sıralama yöntemi neyse ki negatif, sıfır ve pozitif değerleri doğru sırada sıralayabilir. **Sort()**  methodu iki değeri karşılaştırdığında, değerleri karşılaştırma fonksiyonuna gönderir ve döndürülen değere göre sıralar.
 
 - Sonuç negatifse; a, b'den önce sıralanır
 - Sonuç pozitifse; a, b'den sonra sıralanır
 - Sonuç 0 ise; hiçbir şey değişmez

 Tek ihtiyacımız olan ise sort() metodu içinde karşılaştırma fonksiyonu kullanmak.

```js
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

#### Array nesnelerini sıralamak

Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız. Aşağıdaki örneğe bakalım.

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]
```

🌕 Çok iyi gidiyorsunuz. Asla vazgeçmeyin, çünkü harika şeyler zaman alır. 9. Günü tamamladın ve mükemmelliğe giden yolda 9 adım attınız. Şimdi beyniniz ve kasınız için egzersiz yapın.

## 💻 Exercises

### Exercises: Level 1

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```

1. Aralarındaki farkı açıklayın: **_forEach, map, filter, and reduce_**.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use **_forEach_** to console.log each country in the countries array.
4. Use **_forEach_** to console.log each name in the names array.
5. Use **_forEach_** to console.log each number in the numbers array.
6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
7. Use **_map_** to create an array of countries length from countries array.
8. Use **_map_** to create a new array by changing each number to square in the numbers array
9. Use **_map_** to change to each name to uppercase in the names array
10. Use **_map_** to map the products array to its corresponding prices.
11. Use **_filter_** to filter out countries containing **_land_**.
12. Use **_filter_** to filter out countries having six character.
13. Use **_filter_** to filter out countries containing six letters and more in the country array.
14. Use **_filter_** to filter out country start with 'E';
15. Use **_filter_** to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use **_reduce_** to sum all the numbers in the numbers array.
18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
19. Explain the difference between **_some_** and **_every_**
20. Use **_some_** to check if some names' length greater than seven in names array
21. Use **_every_** to check if all the countries contain the word land
22. Explain the difference between **_find_** and **_findIndex_**.
23. Use **_find_** to find the first country containing only six letters in the countries array
24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.

### Exercises: Level 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
1. Find the sum of price of products using only reduce reduce(callback))
1. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
1. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
1. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
1. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
1. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

### Exercises: Level 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
1. \*\*\* Find the 10 most spoken languages:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````

2. \*\*\* Use countries_data.js file create a function which create the ten most populated countries

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

3. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   console.log('Count:', statistics.count()) // 25
   console.log('Sum: ', statistics.sum()) // 744
   console.log('Min: ', statistics.min()) // 24
   console.log('Max: ', statistics.max()) // 38
   console.log('Range: ', statistics.range() // 14
   console.log('Mean: ', statistics.mean()) // 30
   console.log('Median: ',statistics.median()) // 29
   console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Standard Deviation: ', statistics.std()) // 4.2
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
   console.log(statistics.describe())
   Count: 25
   Sum:  744
   Min:  24
   Max:  38
   Range:  14
   Mean:  30
   Median:  29
   Mode:  (26, 5)
   Variance:  17.5
   Standard Deviation:  4.2
   Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

🎉 CONGRATULATIONS ! 🎉

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)
=======
<div align="center">
  <h1> 30 Günde Javascript: Yüksek Dereceden -High Order- Fonksiyonlar</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
  <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<sub>Çevirmen:
  <a href="https://github.com/hsynalv" target="_blank">Hasan Hüseyin Alav</a><br>
  <small> Kasım 2022</small>
  </sub>

</div>

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)

![Day 9](/images/banners/day_1_9.png)

- [Day 9](#day-9)
	- [Yüksek Dereceden Fonksiyonlar](#higher-order-function)
		- [Callback](#callback)
		- [Returning function](#returning-function)
		- [Setting time](#setting-time)
			- [Setting Interval using a setInterval function](#setinterval-fonksiyonu-ile-süre-ayarlama)
			- [Setting a time using a setTimeout](#settimeout-ile-zaman-ayarlama)
	- [Functional Programming- Fonksiyonel Programlama](#functional-programming---fonksiyonel-programalama)
		- [forEach](#foreach)
		- [map](#map)
		- [filter](#filter)
		- [reduce](#reduce)
		- [every](#every)
		- [find](#find)
		- [findIndex](#findindex)
		- [some](#some)
		- [sort](#sort)
			- [Sorting string values](#string-değerleri-sıralama)
			- [Sorting Numeric values](#sayısal-değerleri-sıralama)
			- [Sorting Object Arrays](#array-nesnelerini-sıralamak)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)


# Day 9

## Higher Order Function

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise **callback** fonksiyon denir.

### Callback

Callback fonksiyon yukarıda da söylediğimiz gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

```js
// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
  return n ** 2
}
​
// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

### Returning function

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.
​
```js
// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Callback fonksiyonunu nasıl kullandığımızı görelim. Örneğin _foreach_ metodu callback kullanan metotlarından biridir.

```js
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

Yukarıdaki örnek aşağıdaki gibi basitleştirilebilir::

```js
const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))
```

```sh
15
```

### Setting time

JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

- setInterval
- setTimeout

#### **setInterval** fonksiyonu ile süre ayarlama

JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için **SetInterval** fonksiyonunu kullanırız. SetInterval, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır. 


```js
// syntax
var duration = 10
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s
```

#### **setTimeout** ile zaman ayarlama

In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için **setTimeOut** metodu imdadımıza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır.

```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) 
```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak
```

## Functional Programming - Fonksiyonel Programalama

JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir. Bu bölümde, _forEach_, _map_, _filter_, _reduce_, _find_, _every_, _some_, and _sort_ metodlarını göreceğiz

### forEach

_forEach_: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.
 
```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// Yukarıdaki kod arrow function kullanılarak yazılabilir.
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// Daha basite indirgemek istersek
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
```

```sh
1
2
3
4
5
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
```

```sh
15
```

```js
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

```sh
FINLAND
DENMARK
SWEDEN
NORWAY
ICELAND
```

### map

_map_:Bir dizi elemanını yinelemek ve dizi öğelerini değiştirmek. callback fonksiyonla birlikte "elements", "index" yeni bir diziyi parametre olarak alabilir.

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```js
/*Arrow function ve explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```sh
[1, 4, 9, 16, 25]
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```sh
['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```sh
['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
```

```js
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

```sh
 ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
```

### filter

_Filter_: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

```js
//Ülkeler "land" ifadesi içersin
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
```

```sh
['Finland', 'Ireland']
```

```js
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
```

```sh
['Albania', 'Bolivia','Ethiopia']
```

```js
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
```

```sh
['Japan', 'Kenya']
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
```

```sh
[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```

### reduce

_reduce_: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

```js
arr.reduce((acc, cur) => {
  // bir değer döndürmeden önce bazı işlevler buraya kodlanır
 return 
}, initialValue)
```

```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```

```js
15
```

### every

_every_:  Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)
```

```sh
true
```

```js
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // hepsi true mu? 

console.log(areAllTrue) // true
```

```sh
true

```

### find

_find_: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```

```js
18
```

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```sh
Asabeneh
```

```js
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
```

```sh
{ name: "Asabeneh", score: 95 }
```

### findIndex

_findIndex_: koşulu karşılayan ilk elemanın index değerini döndürür.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### some

_some_: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.

```js
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

```js
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
```

### sort

_sort_: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler

#### String değerleri sıralama

```js
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

#### Sayısal değerleri sıralama

Sayıları sıralamak malesef o kadar basit değil. Sıralama yöntemini doğrudan bir sayı dizisine uygularsak, beklenmedik bir sonuç göreceğiz:

```js
const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
```
 Sayısal değerleri artan veya azalan düzende sıralamak için, sıralama kriterini belirleyen bir fonksiyon kullanmamız gerekir. Sıralama yöntemi neyse ki negatif, sıfır ve pozitif değerleri doğru sırada sıralayabilir. **Sort()**  methodu iki değeri karşılaştırdığında, değerleri karşılaştırma fonksiyonuna gönderir ve döndürülen değere göre sıralar.
 
 - Sonuç negatifse; a, b'den önce sıralanır
 - Sonuç pozitifse; a, b'den sonra sıralanır
 - Sonuç 0 ise; hiçbir şey değişmez

 Tek ihtiyacımız olan ise sort() metodu içinde karşılaştırma fonksiyonu kullanmak.

```js
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

#### Array nesnelerini sıralamak

Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız. Aşağıdaki örneğe bakalım.

```js
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]
```

🌕 Çok iyi gidiyorsunuz. Asla vazgeçmeyin, çünkü harika şeyler zaman alır. 9. Günü tamamladın ve mükemmelliğe giden yolda 9 adım attınız. Şimdi beyniniz ve kasınız için egzersiz yapın.

## 💻 Exercises

### Exercises: Level 1

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
```

1. Aralarındaki farkı açıklayın: **_forEach, map, filter, and reduce_**.
2. Define a callback function before you use it in forEach, map, filter or reduce.
3. Use **_forEach_** to console.log each country in the countries array.
4. Use **_forEach_** to console.log each name in the names array.
5. Use **_forEach_** to console.log each number in the numbers array.
6. Use **_map_** to create a new array by changing each country to uppercase in the countries array.
7. Use **_map_** to create an array of countries length from countries array.
8. Use **_map_** to create a new array by changing each number to square in the numbers array
9. Use **_map_** to change to each name to uppercase in the names array
10. Use **_map_** to map the products array to its corresponding prices.
11. Use **_filter_** to filter out countries containing **_land_**.
12. Use **_filter_** to filter out countries having six character.
13. Use **_filter_** to filter out countries containing six letters and more in the country array.
14. Use **_filter_** to filter out country start with 'E';
15. Use **_filter_** to filter out only prices with values.
16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
17. Use **_reduce_** to sum all the numbers in the numbers array.
18. Use **_reduce_** to concatenate all the countries and to produce this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
19. Explain the difference between **_some_** and **_every_**
20. Use **_some_** to check if some names' length greater than seven in names array
21. Use **_every_** to check if all the countries contain the word land
22. Explain the difference between **_find_** and **_findIndex_**.
23. Use **_find_** to find the first country containing only six letters in the countries array
24. Use **_findIndex_** to find the position of the first country containing only six letters in the countries array
25. Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array you will get -1.
26. Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array you will get -1.

### Exercises: Level 2

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
1. Find the sum of price of products using only reduce reduce(callback))
1. Declare a function called **_categorizeCountries_** which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
1. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
1. Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different functional programming to work on the countries.js array
1. Declare a **_getLastTenCountries_** function which which returns the last ten countries in the countries array.
1. Find out which _letter_ is used many _times_ as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

### Exercises: Level 3

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
1. \*\*\* Find the 10 most spoken languages:

   ````js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
   {country: 'English',count:91},
   {country: 'French',count:45},
   {country: 'Arabic',count:25},
   {country: 'Spanish',count:24},
   {country:'Russian',count:9},
   {country:'Portuguese', count:9},
   {country:'Dutch',count:8},
   {country:'German',count:7},
   {country:'Chinese',count:5},
   {country:'Swahili',count:4}
   ]

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 3))
   [
   {country: 'English',count: 91},
   {country: 'French',count: 45},
   {country: 'Arabic',count: 25},
   ]```

   ````

2. \*\*\* Use countries_data.js file create a function which create the ten most populated countries

   ````js
   console.log(mostPopulatedCountries(countries, 10))

   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000},
   {country: 'Indonesia', population: 258705000},
   {country: 'Brazil', population: 206135893},
   {country: 'Pakistan', population: 194125062},
   {country: 'Nigeria', population: 186988000},
   {country: 'Bangladesh', population: 161006790},
   {country: 'Russian Federation', population: 146599183},
   {country: 'Japan', population: 126960000}
   ]

   console.log(mostPopulatedCountries(countries, 3))
   [
   {country: 'China', population: 1377422166},
   {country: 'India', population: 1295210000},
   {country: 'United States of America', population: 323947000}
   ]
   ```

   ````

3. \*\*\* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

   ```js
   const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   console.log('Count:', statistics.count()) // 25
   console.log('Sum: ', statistics.sum()) // 744
   console.log('Min: ', statistics.min()) // 24
   console.log('Max: ', statistics.max()) // 38
   console.log('Range: ', statistics.range() // 14
   console.log('Mean: ', statistics.mean()) // 30
   console.log('Median: ',statistics.median()) // 29
   console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Standard Deviation: ', statistics.std()) // 4.2
   console.log('Variance: ',statistics.var()) // 17.5
   console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

   ```sh
   console.log(statistics.describe())
   Count: 25
   Sum:  744
   Min:  24
   Max:  38
   Range:  14
   Mean:  30
   Median:  29
   Mode:  (26, 5)
   Variance:  17.5
   Standard Deviation:  4.2
   Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
   ```

🎉 CONGRATULATIONS ! 🎉

[<< Day 8](../08_Day_Objects/08_day_objects.md) | [Day 10 >>](../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)
>>>>>>> 55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a
