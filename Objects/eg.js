

const myObjCar={

    carName:"Range Rover",
    Model:"defender",
    "Price": "1Cr",
    variant:"Automatic",
    color:"White",

    engine:1997,

    review1: function(){
        console.log(" I like this car for its ground presence & the sportyness");
    },
    review2: function(){
        console.log(" I saw the video of its ad where it pull the railway engine & i like this car in black color");
    }


}

myObjCar.review1();
myObjCar.review2();


myObjCar.engine=2500;

console.log(myObjCar.engine)

console.log(myObjCar["Price"])
console.log(myObjCar.variant="Disel")

Object.freeze(myObjCar);

console.log(myObjCar)
