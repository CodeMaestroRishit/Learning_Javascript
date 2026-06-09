const myarr=[0,1,2,3,4,5];//arrays in js can have different types of elements too, they are resizable too
const myheroes=["Ironman","Spiderman","Captain America"]

const myarr2=new Array(1,2,3,4)

console.log(myarr2[1]);
myarr2.push(6);//push_back in c++
myarr2.push(11);
myarr2.pop();// remove element from behind the array
console.log(myarr2);
myarr2.unshift(3); //used for pushing the element in front, but is bad for space complexity

console.log(myarr2.includes(9));// checks whether the elements exists or not
console.log(myarr2.indexOf(9));// checks the index of the element

// slice,splice

console.log("A",myarr2);

const myn1=myarr2.slice(1,3)//SLICE:It does not manipulate the actual array and returns the scope 1,3(-1);

console.log(myarr2)
console.log(myn1);
console.log("b",myarr2)

const myn2=myarr2.splice(1,3);// SPLICE: It manipulates the actual array and returns the value except for the elements passed
console.log(myarr2);

//VIDEO 14