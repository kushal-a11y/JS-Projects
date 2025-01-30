//Stack(PRIMITIVE)--call by val--copy from stack

//Heap(NON-PRIMITIVE)--call by ref original value ref

let name = "Kkkk"
let annName = name
annName = "Aayush"
console.log(annName);
console.log(name);


let user = {
    id:"xyz@gmail.com",
    password:"1234,"
}

let xuser = user

xuser.email = "pyq@yahoo.com"

console.log(user.email);
