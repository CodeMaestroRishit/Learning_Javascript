const tinderuser=new Object();//Singleton Object
const tinderUser={};//constructor object
tinderUser.name="Rishit"
tinderUser.id="123ABC"
tinderUser.isLoggedin=false;
console.log(tinderUser)
console.log(tinderuser)

const regularuser={
email:"some@gmail.com",
fullname:{
    userfullname:{
        firstname:"Rishit",
        lastname:"Guha"
    }
}
}
console.log(regularuser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2);// to merge both the objects
console.log(obj3);

const obj4={...obj1,...obj2}// simpler way it just spreads object 1 and 2 and then merges together in obj4

console.log(obj4);