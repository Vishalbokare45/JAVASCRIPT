
// # In JS, Arrays are Resizable and collection of different datatypes.

const myArr=[1,2,3,4,5,6]
console.log(myArr)

const myArr2=[1,2,3,4,5,true,"Vishal"]
console.log(myArr2) 
console.log(myArr2[5])
console.log(myArr2[6])


const arr=new Array()

arr.push(2)
arr.push(4)
arr.push("vishal")
arr.push("Bokare")
console.log(arr)

console.log(arr[3])

arr.pop()
console.log(arr)

console.log(arr.length)
console.log(arr.indexOf("vishal"))

console.log(arr.includes("bokare"))
console.log(arr.includes("vishal"))




const myArr3=new Array();

myArr3.push("Vishal")
myArr3.push("Bokare")
myArr3.push("Someshwar")
myArr3.push("Nanded")
myArr3.push("Varad")

console.log(myArr3)

const createArr= myArr3.join() // join used to create strings from array.

console.log(createArr)  // here we get strings  of myArr3


console.log("A", myArr3)

console.log(myArr3.slice(1,3)) // it is  only substring of array with range and doesn't make change in original array.
console.log("B", myArr3)

console.log(myArr3.splice(1,3))
console.log("C", myArr3)  // here splice make the changes in the main array. it means  splice strict to the range and remove splice from main array.





