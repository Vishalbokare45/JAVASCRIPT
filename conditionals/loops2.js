
// let myArr=[1,2,3,4,5]

// for (const key of myArr) {     // for of used for arrays
    
//    console.log(key);
// }


// let MyArr2=["Vishal","Bokare","Varad","Nanded"]

// for (const  keys of MyArr2) {

//     console.log(keys)
    
// }



let MyObject={

    game1:"GTA",
    game2:"Valo",
    game3:"condition0"

}

 // mostly for in loop used for objects
for (const key in MyObject) {

    console.log(`${key}  ,MyObject[key]`);
    
}


const map=new Map();

map.set('IN',"India");
map.set('USA',"United state of America");
map.set('UK',"United Kingdom")


for (const  [key,value] of map) {
    console.log(key,value)
    
}