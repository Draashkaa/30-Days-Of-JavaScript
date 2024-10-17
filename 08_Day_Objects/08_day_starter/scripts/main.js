//LEVEL 1
//1,3,5
const dog ={
    name: 'Grom',
    legs: 4,
    color: 'Grey',
    age: 5,
    bark: function(){
        return 'woof woof'
    },
    breed: 'pug',
    getDogInfo: function(){
        return (`${this.name} ${this.legs} ${this.color} ${this.age} ${this.bark()} ${this.breed}`)
    }
}
//2
console.log(dog)
//4
console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark())
//5
console.log(dog.getDogInfo())
//LEVEL 2
//1
var n = "Alex"
for (i in users){
    console.log(users[i].skills.length)
    if (users[i].skills.length > users[n].skills.length){
        n = i
    }
}
console.log(n,users[n].skills)
//2
for (i in users){
    if (users[i].isLoggedIn && users[i].points > 50){
        console.log(users[i])
    } else {
        console.log('noy')
    }
}
//3
for (i in users){
    if (users[i].skills.includes('MongoDB', 'Express', 'React', 'Node')){
        console.log(i)
    }
}
//4
const Timur = {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Python', 'Node'],
    age: 16,
    isLoggedIn: false,
    points: 14
}
users['Timur'] = Timur
console.log(users)
//5
const keys = Object.keys(users)
console.log(keys)
//6
const values = Object.values(users)
console.log(values)
//7
for (i in countries){
    console.log(countries[i].name,countries[i].capital,countries[i].population,countries[i].languages)
}
