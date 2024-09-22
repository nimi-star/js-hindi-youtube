const user = {
    name :"nimish",
    "full name" : "nimish pandya",//only acess by (user["full name"])
    age : 18,
    email : "pandyanimish66@gmail.com",
    city : "indore"
}

user.greeting= function(){
    console.log(`hello js user,${this.email}`);
    
}
console.log(user.greeting());

