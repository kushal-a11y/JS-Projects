//Object in inside objects

const regUser = {
    email: "Name@gmail.com",
    fullName: {
        firstName: "Utsav",
        LastName: "Chatterjee"
    }
}
console.log(regUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

// Object.keys()
// Object.values()

// Object.entries()

console.log(obj1.hasOwnProperty(2));


//Destructuring of objects

const course = {
    courseName: "Js in Eng",
    price: "0",
    instructor: "Kushal"
}

// course.instructor

const {instructor: x} = course//so that we dont have to do  "course.courseName"multiple time

console.log(x);


// const navbar = (props.company) => {
    //logo
    //home
// }

// navbar(company = "ISRO")

// {
//     "name": "Kanak",
//     'age': "27243478",
//     "price": "free"
// }

[
    {},
    {},

]