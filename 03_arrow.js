const user={
    name:"Rishit",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to website`)
        //console.log(this)// it is showing the current context
    }
}
user.welcomeMessage()
user.name="sreepriya"
user.welcomeMessage()
//console.log(this);// it gives empty as there is no context in object

const chai = () => {
    let name = "Siya"
    console.log(this) 
}
chai()

const addTwo=(num1,num2)=>{return num1+num2}
console.log(addTwo(10,20))
const addTwo1=(num1,num2)=>(num1+num2) // for this we do not need to write return and curly braces



