// //Dates

// let d = new Date()

// console.log(d);

// // How can u make it readable

// console.log(d.toString());


// console.log(d.toDateString());


// console.log(d.toISOString());

// console.log(d.toJSON());

// console.log(d.toLocaleString());

// console.log(typeof d)//object



// //date i need in general format
// console.log(d.toLocaleDateString())


// //Time i need in general format 
// console.log(d.toLocaleTimeString())


// let mynewDate = new Date("01-14-2023")

// console.log(mynewDate.toDateString());

// let timeStamp = Date.now()

// console.log(mynewDate.getTime());

// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);

// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())


// console.log(newDate.toLocaleString('default',{
//     weekday: "long",
// }))


// Write a function that returns the current date and time in the format:
// "YYYY-MM-DD HH:MM:SS".

date = new Date()
// ${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
console.log(`${date.toLocaleDateString()} ${date.toLocaleTimeString('en-GB',{
    month: '2-digit',
    day: '2-digit',
    hour12: false, 
}
)}`);

