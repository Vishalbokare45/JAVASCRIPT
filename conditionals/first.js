
 

if(true){

    console.log("Heyy Guys !!");

    console.log("My Name is \'Visha Bokare\'")
}



//  # if -else

let isValid=true;

if(!isValid){

    console.log("Given name is valid");
}
else{

    console.log("Given name is not valid")
}



// if-else if else


num1= 11;


if(num1 %2==0){

    console.log(` given num ${num1}  is even`)
}
else if(num1%3 ==0){

    console.log(` given num ${num1}  is  multiply of 3`)


}
else {

    console.log("Given num is not even or odd.")
}


const balance=3000;


if(balance>2000){

    let  isParty=true;

    console.log(`${balance} is more than 2000 and party ${isParty}`)
}


let month=4;

switch(month){

    case 1:
        console.log("January");
        break;
    
    case 2:
            console.log("Feb");
            break;    
    case 3:
                console.log("March");
                break;
    case 4:
                    console.log("April");
                    break;

    default:
        console.log("default match")

}


// falsy values

// false, "",0,-0,BigInt 0n, null, undefined,NAN

// truthy values

// true, [],{}, function(){},"0","false".



// let  userName="vishal"

// let  userName="";

let userName=[]
if(userName){
    

    console.log(`userName : ${userName}`);
}