

console.log("addOne:",addOne(10))   // here we directly access function before intialization beacuse we directly use function.

function  addOne(num){

  return num+1;
}


// console.log(addNum(6))   here we can't access addNum() because  addNum is used as expression not funct .
const addNum= function(num){

    return num+2;
}

console.log("addNUM: ",addNum(6))