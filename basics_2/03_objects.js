//singleton

//objects Literals
//Objects.

const mysym=Symbol("Key1");

const Jsuser={
name:"Rishit Guha",
age:18,
[mysym]:"mykey1",
location:"Bangalore",
email:"rishitguha0824@gmai.com",
isLoggedin:false,
lastlogindays:["Monday","saturday"]
}

console.log(Jsuser.location); //this also works but not the idle way
console.log(Jsuser["email"]);//this is the ideal way 
console.log(Jsuser[mysym])


Jsuser.email="rishitg@gmail.com";//to update the value

//Object.freeze(Jsuser);//to freeze the Object

Jsuser.greeting = function(){
    console.log("Hello js user");
}

console.log(Jsuser.greeting());

