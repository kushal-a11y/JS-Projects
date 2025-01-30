const account_Id = 14987547
let accountEmail = "ddsfk@gmail.com"
var accountPassword = "1234"
accountCity = "karachi"

let accountState
// account_Id = "2"

accountPassword = "3255"

accountCity = "Kolkata"
/*
    Never use Var beacuse of issues in block scope and functional scope
*/


if(true){
    let accountEmail = "dsfk@gmail.com"
    // var accountEmail = "dsfk@gmail.com"
    console.log(accountEmail)
}
console.log(account_Id)

console.table([account_Id,accountEmail,accountPassword,accountCity,accountState])