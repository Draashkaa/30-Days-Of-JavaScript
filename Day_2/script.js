//LEVEL 1
//1
let challenge = '30 Days Of JavaScript';
//2
console.log('#2 ',challenge);
//3
console.log('#3 ',challenge.length);
//4
console.log('#4 ',challenge.toUpperCase());
//5
console.log('#5 ',challenge.toLowerCase());
//6
console.log('#6 ',challenge.substring(2));
//7
console.log('#7 ',challenge.substring(0,2));
//8
console.log('#8 ',challenge.includes("Script"));
//9
console.log('#9 ',challenge.split());
//10
console.log('#10 ',challenge.split(" "));
//11
let a = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log('#11 ',a.split(", "));
//12
console.log('#12 ',challenge.replace('JavaScript', 'Python'));
//13
console.log('#13 ',challenge.charAt(15));
//14
console.log('#14 ',challenge.charCodeAt("J"));
//15
console.log('#15 ',challenge.indexOf("a"));
//16
console.log('#16 ',challenge.lastIndexOf("a"));
//17
let b = "You cannot end a sentence with because because because is a conjunction";
console.log('#17 ',b.indexOf("because"));
//18
console.log('#18 ',b.lastIndexOf("because"));
//19
console.log('#19 ',b.search("because"));
//20
let challenge2 = " 30 Days Of JavaScript ";
console.log('#20 ',challenge2.trim());
//21
console.log('#21 ',challenge.startsWith(3));
//22
console.log('#22 ',challenge.endsWith("t"));
//23
console.log('#23 ',challenge.match(/a/gi).length);
//24
let c = "30 Days Of";
let d = "JavaScript";
console.log('#24 ',c.concat(" ",d));
//25 
console.log('#25 ',challenge.repeat(2));

//LEVEL 2
//1
console.log('#1 ',"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//2
console.log('#2 ',`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
//3
console.log('#3.1 ','10' === 10)
console.log('#3.2 ','10' == 10)
//4
console.log('#4.1 ',parseFloat('9.8')==10);
console.log('#4.2 ',parseInt('9.8')+1==10);
//5
console.log('#5 ',Boolean('python'.includes("on") & 'jargon'.includes("on")));
//6
let e = 'I hope this course is not full of jargon.';
console.log('#6 ',e.indexOf('jargon')>0 ? true:false);
//7
console.log('#7 ',Math.floor(Math.random()*101));
//8
console.log('#8 ',100-Math.floor(Math.random()*51));
//9
console.log('#9 ',Math.floor(Math.random()*256));
//10
let f='JavaScript';
console.log('#10 ',f.charAt(Math.floor(Math.random()*(f.length))));
//11
//first option
for(var g = 1; g<6; g++)
    console.log(`${g}\t1\t${g}\t${g**2}\t${g**3}`)
//second option
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
//12
console.log('#12 ',b.substr(b.indexOf("because"),b.length-b.lastIndexOf("because")));

//LEVEL 3
//1
let h = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log('#1 ',h.match(/love/gi).length);
//2
console.log('#2 ',b.match(/because/gi).length);
//3 не доделал
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log('#3 ',(sentence.replace(/[^\w\s]+/gi,'')));
//4
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let money = text.match(/\d+/g);
let sum = 0;
console.log(money.length);
for (var i = 0; i<money.length; i++){
    sum = sum + Number(money[i])
    console.log(sum)
}