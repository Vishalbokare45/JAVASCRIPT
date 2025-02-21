

let MyArr=[1,2,3,4,5,6,7,8,9,10];

const nums=MyArr.filter((num)=>{  // filter method return the values

    return num>4;
})

console.log(nums)

let arr=[];
MyArr.forEach((num)=>{ // for each doesn't return values

    if(nums>4){
        arr.push(nums)
    }


})


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks=books.filter((book)=>book.genre==='History');


// console.log(userBooks)

const userPublication=books.filter((bk)=>bk.edition>2000 && bk.publish>=2000)

console.log(userPublication)



//map Method 

//  it also return tha values


const array=[1,2,3,4,5,6,7,8,9,10]


// const myrseult=array.map((num)=>{num*10})// here in { return is missing that's why it shows undefined}

// const myrseult=array.map((num)=>{ return num*10})


// console.log(myrseult)

// chaining the methods

// const myresult=array.map((num)=>num*10).map((num)=>num+5);

const myresult=array.map((num)=>num*10).map((num)=>num+5).filter((num)=>num>50);

console.log(myresult)



