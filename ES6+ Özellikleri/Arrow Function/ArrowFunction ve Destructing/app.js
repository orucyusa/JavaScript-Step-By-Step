// const merhaba = function(){
//     console.log("Merhaba");
// }
// meraba();

// Arrow Function

// const merhaba = () =>{
//     console.log("Merhaba");
// }
// merhaba ();

// const merhaba = (firstName,lastName)=>console.log("Merhaba",firstName,lastName);
// merhaba("Yüsa","Oruç");

// const cube = function (x){
//     return x*x*x;
// }
// console.log(cube(4));

// const cube = x=> x*x*x;

// console.log(cube(4));



// let number1,number2;
arr=[100,200,300,400];

//number1 = arr[0];
//number2 = arr[1];

//Destructing
// const [number1,number2]=arr;

// console.log(number1,number2);

//Obje Destructing

// const numbers={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };
// const{a:number1,c:number2,e:number3}=numbers; 
// console.log(a,c,e); // 10 30 50 
// console.log(number1,number2,number3); // 10 30 50 

// Function Destructing 

// const getLangs=() =>["Python","Java","C++"];

// const [lang1,lang2,lang3]=getLangs();
// console.log(lang1,lang2,lang3);

// //Obje
// const person={
//     name:"Yüşa Oruç",
//     year:1999,
//     salary:3000,
//     showInfos : ()=>console.log("Bilgiler gösteriliyor..")
// }
// const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
// console.log(isim,yil,maas);
// bilgileriGoster();

//Spread Operator 

// const langs=["Python","C++","Java","Php"];
// // console.log(langs[0],langs[1],langs[2],langs[3]);
// // console.log(...langs);

// const langs2=["Javascript","C#",...langs];
// console.log(langs2); //Javascript,C#,Python,C++,Java,Php

// const numbers=[1,2,3,4,5,6,7,8,9];

// const [a,b,...number2]=numbers; // 1 2

// console.log(a,b); //1 2 
// console.log(number2); // 3 4 5 6 7 8 9 

// const addNumbers=(a,b,c) => console.log(a+b+c);

// const numbers=[100,200,300];

// addNumbers(...numbers); //600
