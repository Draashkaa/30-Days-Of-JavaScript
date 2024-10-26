//LEVEL 1
//1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries2 = ['Finland', 'Sweden', 'Norway']
var emptySet = new Set()
console.log(emptySet)
//2
for (i = 0; i < 11; i++){
    emptySet.add(i)
}
console.log(emptySet)
//3
emptySet.delete(2)
console.log(emptySet)
//4
emptySet.clear()
console.log(emptySet)
//5
const languages = ['English','Finnish','English','French','Spanish','English','French','Chinese']
emptySet = new Set(languages)
console.log(emptySet)
//6
countries3 = [
    ['Finland', 'Finland'.length],
    ['Sweden', 'Sweden'.length],
    ['Norway', 'Norway'.length],
  ]
const map = new Map(countries3)
console.log(map)
//LEVEL 2
//1
let A = new Set(a)
let B = new Set(b)
console.log(new Set([...a, ...b]))
//2
console.log(a.filter((num) => B.has(num)))
//3
console.log(a.filter((num) => !B.has(num)))

