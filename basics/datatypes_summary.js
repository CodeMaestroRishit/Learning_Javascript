//datatypes 2 types:
//1) Primitive and Reference

// 7 types
/*
1)string
2)number
3)boolean
4)null(empty)
5)undefined
6)symbol
7)BigInt
*/

/*Reference(Non Primitive)
3 type:
1)Array
2)Objects
3)Function
*/

const heros=["ironman","spiderman","hulk"];
{
    name:"Rishit",
    age=21
}

const myFunction=function(){
    console.log("hello world");
}
console.log(typeof heros);
console.log(typeof myFunction);

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


//+++++++++++======================================++++++++++++++++===========+++++++++++===========+++++++


//Stack Memory(Primitive), Heap(Non-Primitive)
let myname="rishit";
let ytname=myname;
ytname="byrishit";
console.log(myname);
console.log(ytname);

let user={
    email:"rishit@gmail.com",
    upiid:"rishitokicici"
}
let user2=user;
console.log(user2)
user2.email="rishitguha@gmail.com";// refers to user 1 and changes the email as there is .email
console.log(user2)
