const balance=2000;

if(balance<500)
{
    console.log("less than ");
}else if(balance<750)
{
    console.log("less than 750");
}else{
    console.log("less than 1200");
}

const userloggedin=true;
const debitcard=true;

if(userloggedin && debitcard )
{
    console.log("allow to buy course");
}


//NULL COALESCING OPERATOR(??): its for assigning a val incoming a new elemnt
let var1;
var1=undefined??15;
console.log(var1);