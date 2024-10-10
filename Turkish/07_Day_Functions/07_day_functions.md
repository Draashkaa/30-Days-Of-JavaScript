<<<<<<< HEAD
<div align="center">
  <h1> 30 günde JavaScript: Fonksiyonlar</h1>
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
  <small> Temmuz 2022</small>
  </sub>
</div>

[<< 6. Gün](../06_Day_Loops_Donguler/06_day_loops.md) | [8. Gün >>](../08_Day_Objects/08_day_objects.md)

![Thirty Days Of JavaScript](/images/banners/day_1_7.png)

- [📔 7. Gün](#-day-7)
	- [Functions - Fonksiyonlar](#functions---fonksiyonlar)
		- [Klasik fonksiyon Tanımlama](#klasik-fonksiyon-tanımlama)
        - [Anonymous Function - İsimsiz fonksiyon](#anonymous-function---i̇simsiz-fonksiyon)
		- [Expression Function](#expression-function)
		- [Parametresiz ve dönüş değeri olmayan fonksiyon](#parametresiz-ve-dönüş-değeri-olamayan-fonksiyon)
		- [Fonksiyonlarda return kullanımı](#bir-değer-döndüren-fonksiyon)
		- [Bir parametreli fonksiyon](#parametreli-fonksiyon)
		- [İki parametreli fonksiyon](#i̇ki-parametreli-fonksiyon)
		- [Çok parametreli fonksiyon](#çok-parametreli-fonksiyon)
		- [Sınırsız sayıda parametreyle çalışan fonksiyon](#sınırsız-sayıda-parametreyle-çalışan-fonksiyon)
			- [Klasik fonksiyonda sınırsız sayıda parametre](#klasik-fonksiyonda-sınırsız-sayıda-parametre)
		- [Kendi kendine çağırılan fonksiyon - Self Invokinf function](#kendi-kendine-çağırılan-fonksiyon)
		- [Arrow Function](#arrow-function)
          - [Arrow function'da sınırsız sayıda parametre](#arrow-functionda-sınırsız-sayıda-parametre)
		- [Default parametre ile fonksiyon kullanımı](#default-parametre-ile-fonksiyon-kullanımı)
		- [Function declaration versus Arrow function](#function-declaration-versus-arrow-function)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

# 📔 7. Gün

## Functions - Fonksiyonlar


Şimdiye kadar birçok JavaScript fonksiyonu yazdık. Bu bölümde, custom fonksiyonlara odaklanacağız. Fonksiyon yazmaya başlamadan önce, fonksiyonun ne olduğunu ve neden fonksiyona ihtiyacımız olduğunu bakalım.

Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.

Bir fonksiyon,  `function` anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu paranteler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

Fonksiyon kullanmanın avantajları: 

- temiz ve okunması kolay
- yeniden kullanılabilir
- kolay test edilir

Bir fonksiyon birkaç şekilde tanımlanabilir:

- _Klasik Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

### Klasik Fonksiyon Tanımlama

Bir fonksiyonun nasıl tanımlanacağını ve çağırılacağını görelim.

```js
//parametresiz fonksiyon tanımıı
function functionName() {
  // istenilen kod parçası
}
functionName() // fonksiyon, fonksiyon adı ve parantezler ile çağırılır
```

### Anonymous Function - İsimsiz Fonksiyon


```js
const anonymousFun = function() {
  console.log(
    'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
  )
}
```

### Expression Function


Expression function, isimsiz fonksiyonlardır. İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız. Örnek vemrek gerekirse.

```js

// Function expression
const square = function() {
  console.log("Bu bir expression function türünde fonksiyondur")
}

```

### Parametresiz ve dönüş değeri olamayan fonksiyon

Fonksiyon, parametre olmadan tanımlanabilir. (Şu ana kadar tanımladıklarımız zaten parametresizdi)

**Example:**

```js
function square() {
  let num = 2
  let square = num * num
  console.log(square)
}

square() // 4

// parametresiz fonksiyon örnek 2:
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // fonksiyon, kendisine verilen isim ile çağırılmalı
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // fonksiyon çağırımına bir örnek
```

### Bir değer döndüren fonksiyon

Fonksiyonlar geriye bir değer döndürebilir. bu işlemi `return` anahtar kelimesini kullanarak sağlarız. Normal fonksiyondan farklı olarak bir field'a atanabilir veya bir metot içerisinde parametre olarak kullanılabilir.

```js
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### Parametreli fonksiyon

Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz. 

```js
// bir parametreli fonksiyon
function functionName(parm1) {
  // istenilen kod parçası
}
functionName(parm1) // fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // bağımsız bir değişkenle çağırılmalı

function square(number) {
  return number * number
}

console.log(square(10))
```

### İki parametreli fonksiyon

```js
// iki parametreli fonksiyon
function functionName(parm1, parm2) {
  //istenilen kod parçası
}
functionName(parm1, parm2) //fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar

// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // fonksiyon çağırımı
// Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir. 

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Çok parametreli fonksiyon

```js
// çok parametreli fonksiyon
function functionName(parm1, parm2, parm3,...){
  //istenilen kod parçası
}
functionName(parm1,parm2,parm3,...) // fonksiyon çağırımı sırasında birden çok parametreye ihtiyaç duyar


// bu fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //fonksiyon çağırımı
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Sınırsız sayıda parametreyle çalışan fonksiyon

Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır.

#### Klasik fonksiyonda sınırsız sayıda parametre

 A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

 Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse;

 ```js
// arguments nesnesine erişelim
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// fonksiyon tanımı
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

> Arrow function'da sınırsız sayıda parametre konusunu Arraw fonksiyonu gördükten sonra görebilirsiniz.


### Kendi kendine çağırılan fonksiyon

JavaScript sözdiziminde birçok ilginç şey vardır, bunlardan biri kendi kendine çalışan (kendi kendini çağıran) fonksiyonların tanımıdır. Böyle bir fonksiyonu şu şekilde tanımlayabiliriz:

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır. Kendi kendini çağıran işlevlerin yararı, global ad alanını karıştırmadan (herhangi bir global bildirmeden) kodu bir kez yürütmemize olanak vermeleridir.

### Arrow Function

Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. `function` anahtar kelimesi yerine `=>` işareti kullanılır. 

Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım

```js
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

Yukarıdaki fonksiyon yalnızca geri dönüş ifadesine sahiptir, bu nedenle bunu aşağıdaki şekilde açıkça iade edebiliriz.
```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

#### Arrow function'da sınırsız sayıda parametre

 Arrow function, klasik fonksiyon gibi arguments nesnesine sahip değildir. Arrow function'da sınırsız sayıda parametre kullanmak istersek spread operatör (...) ve hemen ardından parametre adı kullanılır. Fonksiyonda bağımsız değişken olarak geçtiğimiz her şeye arrow functionda dizi olarak erişilebilir. Bir örnek görelim

 ```js
// arguments nesnesine erişmemize bir örnek
​
const sumAllNums = (...args) => {
  // console.log(arguments), arguments nesnesi bulunamadı
  // bunun yerine spread operator (...) ve parametre adı kullanalım
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Default parametre ile fonksiyon kullanımı


Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

```js
// syntax - söz dizimi
// fonksiyon tanımı
function functionName(param = value) {
  //codes
}

// fonksiyon çağırımı
functionName()
functionName(arg)
```

**Example:**

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // değer önce dize olarak değiştirilmelidir
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

Yukarıdaki fonksiyonları bir de arrow function kullanarak tanımlayalım

```js
// syntax -  söz dizimi
// fonksiyonu tanımlama
const functionName = (param = value) => {
  //codes
}

// fonksiyonu çağırma
functionName()
functionName(arg)
```

**Example:**

```js
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

### Function declaration versus Arrow function

Diğer bölümde ele alınacaktır.

🌕 Serinin 7. gününü de başarıyla tamamladın. Durmak yok yola devam



## 💻 Exercises

### Exercises: Level 1

1. Declare a function _fullName_ and it print out your full name.
2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercises: Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

🎉 CONGRATULATIONS ! 🎉

[<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md)
=======
<div align="center">
  <h1> 30 günde JavaScript: Fonksiyonlar</h1>
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
  <small> Temmuz 2022</small>
  </sub>
</div>

[<< 6. Gün](../06_Day_Loops_Donguler/06_day_loops.md) | [8. Gün >>](../08_Day_Objects/08_day_objects.md)

![Thirty Days Of JavaScript](/images/banners/day_1_7.png)

- [📔 7. Gün](#-day-7)
	- [Functions - Fonksiyonlar](#functions---fonksiyonlar)
		- [Klasik fonksiyon Tanımlama](#klasik-fonksiyon-tanımlama)
        - [Anonymous Function - İsimsiz fonksiyon](#anonymous-function---i̇simsiz-fonksiyon)
		- [Expression Function](#expression-function)
		- [Parametresiz ve dönüş değeri olmayan fonksiyon](#parametresiz-ve-dönüş-değeri-olamayan-fonksiyon)
		- [Fonksiyonlarda return kullanımı](#bir-değer-döndüren-fonksiyon)
		- [Bir parametreli fonksiyon](#parametreli-fonksiyon)
		- [İki parametreli fonksiyon](#i̇ki-parametreli-fonksiyon)
		- [Çok parametreli fonksiyon](#çok-parametreli-fonksiyon)
		- [Sınırsız sayıda parametreyle çalışan fonksiyon](#sınırsız-sayıda-parametreyle-çalışan-fonksiyon)
			- [Klasik fonksiyonda sınırsız sayıda parametre](#klasik-fonksiyonda-sınırsız-sayıda-parametre)
		- [Kendi kendine çağırılan fonksiyon - Self Invokinf function](#kendi-kendine-çağırılan-fonksiyon)
		- [Arrow Function](#arrow-function)
          - [Arrow function'da sınırsız sayıda parametre](#arrow-functionda-sınırsız-sayıda-parametre)
		- [Default parametre ile fonksiyon kullanımı](#default-parametre-ile-fonksiyon-kullanımı)
		- [Function declaration versus Arrow function](#function-declaration-versus-arrow-function)
	- [💻 Exercises](#-exercises)
		- [Exercises: Level 1](#exercises-level-1)
		- [Exercises: Level 2](#exercises-level-2)
		- [Exercises: Level 3](#exercises-level-3)

# 📔 7. Gün

## Functions - Fonksiyonlar


Şimdiye kadar birçok JavaScript fonksiyonu yazdık. Bu bölümde, custom fonksiyonlara odaklanacağız. Fonksiyon yazmaya başlamadan önce, fonksiyonun ne olduğunu ve neden fonksiyona ihtiyacımız olduğunu bakalım.

Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.

Bir fonksiyon,  `function` anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu paranteler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

Fonksiyon kullanmanın avantajları: 

- temiz ve okunması kolay
- yeniden kullanılabilir
- kolay test edilir

Bir fonksiyon birkaç şekilde tanımlanabilir:

- _Klasik Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

### Klasik Fonksiyon Tanımlama

Bir fonksiyonun nasıl tanımlanacağını ve çağırılacağını görelim.

```js
//parametresiz fonksiyon tanımıı
function functionName() {
  // istenilen kod parçası
}
functionName() // fonksiyon, fonksiyon adı ve parantezler ile çağırılır
```

### Anonymous Function - İsimsiz Fonksiyon


```js
const anonymousFun = function() {
  console.log(
    'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
  )
}
```

### Expression Function


Expression function, isimsiz fonksiyonlardır. İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız. Örnek vemrek gerekirse.

```js

// Function expression
const square = function() {
  console.log("Bu bir expression function türünde fonksiyondur")
}

```

### Parametresiz ve dönüş değeri olamayan fonksiyon

Fonksiyon, parametre olmadan tanımlanabilir. (Şu ana kadar tanımladıklarımız zaten parametresizdi)

**Example:**

```js
function square() {
  let num = 2
  let square = num * num
  console.log(square)
}

square() // 4

// parametresiz fonksiyon örnek 2:
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // fonksiyon, kendisine verilen isim ile çağırılmalı
```

```js
  function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
}

printFullName() // fonksiyon çağırımına bir örnek
```

### Bir değer döndüren fonksiyon

Fonksiyonlar geriye bir değer döndürebilir. bu işlemi `return` anahtar kelimesini kullanarak sağlarız. Normal fonksiyondan farklı olarak bir field'a atanabilir veya bir metot içerisinde parametre olarak kullanılabilir.

```js
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
```

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### Parametreli fonksiyon

Bir fonksiyonda farklı veri türlerini (number, string, boolean, object, function) parametre olarak geçebiliriz. 

```js
// bir parametreli fonksiyon
function functionName(parm1) {
  // istenilen kod parçası
}
functionName(parm1) // fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // bağımsız bir değişkenle çağırılmalı

function square(number) {
  return number * number
}

console.log(square(10))
```

### İki parametreli fonksiyon

```js
// iki parametreli fonksiyon
function functionName(parm1, parm2) {
  //istenilen kod parçası
}
functionName(parm1, parm2) //fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar

// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // fonksiyon çağırımı
// Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir. 

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### Çok parametreli fonksiyon

```js
// çok parametreli fonksiyon
function functionName(parm1, parm2, parm3,...){
  //istenilen kod parçası
}
functionName(parm1,parm2,parm3,...) // fonksiyon çağırımı sırasında birden çok parametreye ihtiyaç duyar


// bu fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //fonksiyon çağırımı
console.log(sumArrayValues(numbers));


    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))

```

### Sınırsız sayıda parametreyle çalışan fonksiyon

Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır.

#### Klasik fonksiyonda sınırsız sayıda parametre

 A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

 Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse;

 ```js
// arguments nesnesine erişelim
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

```js
// fonksiyon tanımı
​
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

> Arrow function'da sınırsız sayıda parametre konusunu Arraw fonksiyonu gördükten sonra görebilirsiniz.


### Kendi kendine çağırılan fonksiyon

JavaScript sözdiziminde birçok ilginç şey vardır, bunlardan biri kendi kendine çalışan (kendi kendini çağıran) fonksiyonların tanımıdır. Böyle bir fonksiyonu şu şekilde tanımlayabiliriz:

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır. Kendi kendini çağıran işlevlerin yararı, global ad alanını karıştırmadan (herhangi bir global bildirmeden) kodu bir kez yürütmemize olanak vermeleridir.

### Arrow Function

Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. `function` anahtar kelimesi yerine `=>` işareti kullanılır. 

Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım

```js
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

Yukarıdaki fonksiyon yalnızca geri dönüş ifadesine sahiptir, bu nedenle bunu aşağıdaki şekilde açıkça iade edebiliriz.
```js
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

#### Arrow function'da sınırsız sayıda parametre

 Arrow function, klasik fonksiyon gibi arguments nesnesine sahip değildir. Arrow function'da sınırsız sayıda parametre kullanmak istersek spread operatör (...) ve hemen ardından parametre adı kullanılır. Fonksiyonda bağımsız değişken olarak geçtiğimiz her şeye arrow functionda dizi olarak erişilebilir. Bir örnek görelim

 ```js
// arguments nesnesine erişmemize bir örnek
​
const sumAllNums = (...args) => {
  // console.log(arguments), arguments nesnesi bulunamadı
  // bunun yerine spread operator (...) ve parametre adı kullanalım
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```

```js
// function declaration
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### Default parametre ile fonksiyon kullanımı


Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

```js
// syntax - söz dizimi
// fonksiyon tanımı
function functionName(param = value) {
  //codes
}

// fonksiyon çağırımı
functionName()
functionName(arg)
```

**Example:**

```js
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```

```js
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // değer önce dize olarak değiştirilmelidir
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

Yukarıdaki fonksiyonları bir de arrow function kullanarak tanımlayalım

```js
// syntax -  söz dizimi
// fonksiyonu tanımlama
const functionName = (param = value) => {
  //codes
}

// fonksiyonu çağırma
functionName()
functionName(arg)
```

**Example:**

```js
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
```

```js
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

```js
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

### Function declaration versus Arrow function

Diğer bölümde ele alınacaktır.

🌕 Serinin 7. gününü de başarıyla tamamladın. Durmak yok yola devam



## 💻 Exercises

### Exercises: Level 1

1. Declare a function _fullName_ and it print out your full name.
2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercises: Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

🎉 CONGRATULATIONS ! 🎉

[<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md)
>>>>>>> 55d8e3dbc0410d64c1dc3ea5915e015a7950cf2a
