

//  # this keyword. it is used to refere to current object or context

// this is used only on objects not on  the functions


let MyInfo={

     myName:"Vishal Bokare",
     age:21,

     greeting:function(){

        console.log(`welcome, ${this.myName}!! `)

        console.log(this) // print the current object details
     }

}


MyInfo.greeting()

MyInfo.myName="Varad "
MyInfo.age=18


MyInfo.greeting()


//  +++++++++++  Arrow Functions ++++++++++++++++


// const sayMyName= function(){

//     console.log("My name is Vishal!!!!");
// }

// sayMyName()


const sayMyName = () =>{

    console.log("My name is Vishal Bokare");
}

sayMyName()



const sum = (num1 , num2)=>{



    return num1+num2;

}

console.log(sum(25,25))



const add= (num1 , num2)=> (num1+num2)  // here we directly execute like this using parenthesis , no need to use return.


console.log(add(35,35));


// we can define object using arrow funct.



const myInfo= ()=>({myName:"Vishal", age:21, village:"Nanded"})


console.log(myInfo());


// # IIFE Immediately Invoked Function Expression

// It is used to avoid the global scope variable pollutions

// (function defination)()

(function sayHello(){

    console.log("My Name is vishal");
})();


(()=>{
    console.log("Heyyy Guyss !!")
})();

