

let arr=[1,2,3,4];

const result=arr.reduce((acc,currVal)=>{
     console.log(`acc: ${acc}  and currval :${currVal}`)
    return acc+currVal;
},0);

console.log(result)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];


const totalPrice=shoppingCart.reduce((acc,item)=> acc+item.price ,0)

console.log(totalPrice)



// const filterPrice=shoppingCart.filter((item)=>item.price>1000);

// console.log(filterPrice)

const filterPrice=shoppingCart.filter((item)=>item.price>1000).reduce((acc,item)=> acc+item.price,0)

console.log(filterPrice)