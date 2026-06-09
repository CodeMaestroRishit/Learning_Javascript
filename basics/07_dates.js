let mydate=new Date()
console.log(mydate);// unreadable strig
console.log(mydate.toString());//somewhat readable
console.log(mydate.toDateString());//most readable
console.log(mydate.toLocaleString());// mentions date and time 
console.log(typeof mydate);// type ==object


let mynewdate=new Date("08-01-2005");
console.log(mynewdate.toDateString());
console.log(mynewdate.toLocaleDateString());

let myTimestamp=Date.now()
console.log(myTimestamp);

let mytimestamp=Date.now();

console.log(Math.floor(Date.now()/1000));

let newdate=new Date();
console.log(newdate.getDay());
console.log(newdate.getMonth())


newdate.toLocaleDateString('default',{
    weekday:"long"
})