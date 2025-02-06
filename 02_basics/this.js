this keyword in java
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        
    }
}

function Chai(){
    let userName = "Kushal"
    console.log(this);
}
Chai()


Arrow fucntion
() => {}

const Chai = () => {
    let userName = "Kushal"
    console.log(this);
}

Chai()


Implicit return Explicit return??
const addTwo = (num1, num2) => ({username: "Kushal"})



console.log(addTwo(3,4));

const arr = [2,4,6,2,1]

arr.forEach()