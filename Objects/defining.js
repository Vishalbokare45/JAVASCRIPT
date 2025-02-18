

const mySym= Symbol("key1");

const  info={

     name:"Vishal",  // here, the name,age are the strings of keys
    //  but we are not used them as String but we like below

    "full name":"Vishal Bokare",
    email:"vishal@google.com",

     age:21,
     cllg:"VIT",
     city:"pune",

     [mySym]:"myKey2", // here, symbol always initialized with [] brackets.

     isPresentDays:["Monday","Wednesday","thursday"]
     
}

console.log(info.name)
console.log(info.age)
console.log(info['full name']) // if we have defined the key as string then we can access them only like this.


console.log(info["email"]) //we access others also this

console.log(info["isPresentDays"])
console.log(info["isPresentDays"][1])

console.log(info[mySym])

console.log(info)


info.email="vishalbokare45@gmail.com"//  changes the email and age in the info object.
info.age=18

console.log(info)

// Object.freeze(info) // it will freeze the object we can't make chnage in object.

info.name="Vishuu.."

console.log(info) // look same as previous object doesn't make any change in object due to freeze on object.


// # defining the function in object 


info.greeting=function(){

    console.log(`Hello JS user ${this.name}`);
}


info.greeting();

info.funToDefineMe=function(){

    console.log(`hello guys!! ${this["full name"]} here !!`);

    console.log(`My cllg  is ${this["cllg"]}  and city ${this["city"]}`)
}

info.funToDefineMe();