const accountId = 12345
let accountEmail = "nimish@gmail.com"
var accountPassword = "12345"
 accountCity = "jaipur"
 let accountState;

// accountId = 2 // not allowed

accountEmail = "np@gmail.com"
accountPassword = "123456"
accountCity = "bang"


 console.log(accountId);

 /*
prefer not to use var because of issue in block and functional scope

 */
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
