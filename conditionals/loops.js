

// for(let i=1;i<=10;i++){

//     console.log(i+" ");
// }


// for(let j=1;j<=10; j++){

//     console.log(`Outer Loop: ${j}` );

//     for(let i=1;i<=10;i++){

//         // console.log(`inner loop: ${i} `);

//         console.log( i +"*"+j +"=" + i*j);

//     }
// }


// break is used to come out of the loop after statisfing some condition

// continue is used to skip below code



for(let i=1;i<=10;i++){


    if(i==5){

        console.log("5 is detected !")
        break;
    }

    console.log(i)
}

// let myArr=["Vishal", "varad",'gaurav']

// for(let i of myArr){

//     console.log(i);
// }


let myArr2=["Vishal","varad","Bokare","sandesh", "Om","Darshan"]

for(let i of myArr2){


    if(i=="Bokare"){
        console.log("SurName is Detected");
        continue;
    }
    console.log(i)
}




let i=1;

while(i<10){

    console.log(i);
    i++;
}

console.log("-----")

 let j=1;
do{

    console.log(j* j);
    j++;

}while(j<10);


