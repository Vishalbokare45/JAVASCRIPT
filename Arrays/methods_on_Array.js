
let arr=new Array(1,2,3,4,5,6,7,8,9)

console.log(arr)
let arr2=new Array("Vishal","Bokare",["Nanded", "Pune"])
console.log(arr2)

// arr.push(arr2)
// console.log(arr)  // here, arr2 push in arr as  a single element.

let newArr=arr.concat(arr2)
console.log(newArr)  // here, arr2 push in arr as  a single element.


// console.log(newArr.flat()) // flat is used to merge array using the depth.



let myArr=[1,2,3,4,5,67]
let myArr2=[11,22,33,[556,666,777,888],[111,222,444,[333,88878]]]

let myArr3= myArr.concat(myArr2)

console.log(myArr3)

console.log(myArr3.flat(2))

