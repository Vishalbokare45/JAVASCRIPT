

let myArr=["Vishal", "Bokare","VIT",12334, true, false]

console.log(myArr)

let myObj={

      myName:"Vishal Bokare",
      age:21,
      cllg:"VIT",
      City:"Pune -411037"

};

console.log(myObj)

console.log(myObj.myName)

myObj.City="Nanded" // using this we can override the values in the objects.

myObj.age=18

console.log(myObj)


const myFun=function(){

     console.log("My name is Vishal Bokare")
}

 console.log(typeof(myFun()))


 let newObj={

      myName:"Vishal Bokare",
      age:21,
      village:"Someshwar",
      city:"Nanded",

      isMarried:false,
      isSingle:false,
      

      info:function(){
        
        console.log("I am persuing my B.tech in AIDS at VIT Pune.");

      },

      IsGF:{

          herName:"Sh*****a",
          
          herEducation:"MBBS",

          CityBelongs:"Nanded"


      },

    printAfter: function(){
         
        console.log("My mummy and Pappa are my priority.")
    },

   


 }

 console.log(newObj)
 console.log(newObj.IsGF)
 console.log(newObj.IsGF.herName)


 setTimeout(newObj.printAfter,2000);
 newObj.info()

 