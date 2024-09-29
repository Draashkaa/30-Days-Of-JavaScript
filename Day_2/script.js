//level 1
//1
let challenge = '30 Days Of JavaScript';
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6
console.log(challenge.substring(2));
//7
console.log(challenge.substring(0,2));
//8
console.log(challenge.includes("Script"));
//9
console.log(challenge.split());
//10
console.log(challenge.split(" "));
//11
let a = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(a.split(", "));
//12
console.log(challenge.replace('JavaScript', 'Python'));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt("J"));
//15
console.log(challenge.indexOf("a"));
//16
console.log(challenge.lastIndexOf("a"));
//17
let b = "You cannot end a sentence with because because because is a conjunction";
console.log(b.indexOf("because"));
//18
console.log(b.lastIndexOf("because"));
//19
console.log(b.search("because"));
//20
let challenge2 = " 30 Days Of JavaScript ";
console.log(challenge2.trim());
//21
console.log(challenge.startsWith(3));
//22
console.log(challenge.endsWith("t"));
//23
console.log(challenge.match(/a/gi));
//24
let c = "30 Days Of";
let d = "JavaScript";
console.log(c.concat(" ",d));
//25 
console.log(challenge.repeat(2));
