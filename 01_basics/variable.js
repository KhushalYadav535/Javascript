const accountId=143378993
let accountEmail="khushalyadav@google.com"
var accountPassword="12345"
accountCity="Lucknow"
let accountState;
// accountId=2 // not allowed

accountEmail="kky@google.com"
accountPassword="2223344"
accountCity="Prayagraj"
// console.log(accountPassword);
// console.log(accountEmail);
// console.log(accountId);
// console.log(accountCity);
/* prefer not to use var
because the problem of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])