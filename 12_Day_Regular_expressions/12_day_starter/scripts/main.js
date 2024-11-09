//LEVEL 1
//1
let pattern = /\d+/g
a = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
let matches = a.match(pattern)
sum = 0
for (i in matches){
    sum = sum + Number(matches[i])
}
console.log(sum)
//2
pattern = /-?\d{1}/g
b = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction`
matches = b.match(pattern)
console.log(matches)
let intmathes = []
for (i in matches){
    intmathes.push(Number(matches[i]))
}
let sortmathes = intmathes.sort(function(a,b) { return a - b })
console.log(sortmathes)
console.log(sortmathes[sortmathes.length-1] - sortmathes[0])
//3
pattern = /^\D/g
console.log(pattern.test('first_name')) // True
console.log(pattern.test('first-name')) // False
console.log(pattern.test('1first_name')) // False
console.log(pattern.test('firstname')) // True