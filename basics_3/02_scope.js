if(true){
let a=10;
const b=20;
var c=30;
}

//console.log(a);
//console.log(b);
console.log(c); //only var can be printed even if it is out of the scope that is why it is not used

if(true){
    const username="Rishit"
    if(username==="Rishit"){
     const website="Youtube";
     console.log(username+website);
    }

}
//------------------------------+++++++++++++++++++------------------------------

function addone(num){
    return num+1;
}

const addTwo=function(num)//this is known as an expression as variables have a lot of power in Js
{
    return num+2;
}