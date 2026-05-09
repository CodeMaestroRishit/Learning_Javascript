let score="ans"
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber)// output is number but its not true as there is 44ans which is combination of number+string
console.log(valueInNumber);
//true=1,false=0

let isLoggedIn="";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

//""=>false
//"rishit"=>true
let value=3
let negValue=-value;
console.log(negValue);

let str0="Hello";
let str1=" Rishit"
let str2=str0+str1;//concat
console.log(str2);

console.log(1+2+"2")//output is 32 the addition happens
console.log(1+"2"+2)//output is 122 cuz there is a string in between
console.log("1"+2+2)//output is 122 for same reason

let gamecounter=100;
++gamecounter;
console.log(gamecounter)