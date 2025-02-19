
var c=5000;
let a=222

if(true){
    let a=10;
    const b=20;
    
    var c=300;  // var is not block scope datatype.
}


// console.log("block scope",a) // let is present in  if block scope it mean we can't access out of block scope.

// console.log(b) // similar for const.

console.log(c) // but here, var is avialable out of scope which is not good for programming. that's why we don't use var.

// when user defines same variable of var in  global and block then it makes more confusion which value it will take that's why  we don't use var.




console.log("global scope",a)




// # function scopes



function one(){

       const userName="Vishal Bokare"

        function two(){

            let  degree="B.Tech"

            console.log(userName)
        }

    //  console.log(degree)  // here this line gives error because fun  One cannot access the  fun Two degree variable because the scope of that variable is limited for that func only.

     two()  // here we call the two func in One func  that's why 
    //  it prints the userName because for  func two userName is global  scope variable 
}

one()




function MyInfo(){

      let fullName="Vishal Bokare"

      function edu_details(){

           let degree="B.Tech In AI & DS"

           

           function cllg_details(){

               let cllgName="VIT, Pune"

                // this func can access all three func including itself also
               console.log(`My name is ${fullName} & I am persuing my deree ${degree} at ${cllgName}`)
           }

           // here This func can access the fullName because MyInfo() func is global scope func for it.

        cllg_details()
      }


   edu_details()
   
}



MyInfo()  // here MyInfo call first then  it call to the edu_details after that it call to the cllg_details then it execute the console.log().

