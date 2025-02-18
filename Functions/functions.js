

function sum(number1, number2){

    return number1+number2; // this function return something that's why we have to store or print it.
}

let result= sum(5,10)

console.log("result: ",result)



function MyInfo(){

    console.log("My name is Vishal Bokare")
    // here, only we print that's why we only call the function.
}

MyInfo()

function userLoggedIn(userName){

   if(!userName){
         
     console.log("Please log in");
     return 

   }
   return `${userName} just Logged In`
    

}



let logged =userLoggedIn()

console.log(logged)





function sign_in(userEmail, userPassword){

    if(!userEmail || !userPassword){

        console.log("please enter your email and password");
    }
    else{

        return ` your  Email: ${userEmail}  and password: ${userPassword}`
    }


}


let check=sign_in("Vishal@gmail.com", "Vishal4005")

console.log(check)

// Rest parameters {...parameter1}  it takes  infinite arguments


function calculateCartPrice(val1,val2,...num1){

    return num1;
}

console.log(calculateCartPrice(100,200,300,500,700))





function fun(...param1){

    console.log("prices",param1)

    sum=0
    
    for(let i of param1){
          sum +=i
    }

    return sum


}

let ans=fun(100,200,300,400,500)
console.log(ans)


const user={

    userName:"Vishal Bokare",
    userEmail:"Vishal@gmail.com"
}

function findName(anyObject){

   console.log( `UserName is ${anyObject.userName} and his mail is ${anyObject.userEmail}`);
}

findName(user);

findName({userName:"vishuu", userEmail:"xyz@gmail.com", userPassword:"1234"})

