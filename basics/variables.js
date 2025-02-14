const accountId=123 // const value assign
let accountEmail="vishal@gmail.com"  
var accountPass="vishal4005"


// always use the const for const values and let for other values
// not use var.. because of block and functional scope issue


accountCity="Nanded"

console.table([accountId, accountEmail, accountPass, accountCity]);

accountEmail="Lets@gmail.com"



console.log(accountId)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)

