// // Call, Apply, Bind
// const obj1={
//     number1:10,
//     number2:20
// };
// const obj2={
//     number1:30,
//     number2:40
// };
// function addNumbers(number3,number4){

//     console.log(this.number1+this.number2+number3+number4);
// }
// addNumbers(100,200);

// addNumber.call(obj1,100,200); //330 this windowu gösterdiği için undefined dönüyor.
// addNumbers.call(obj2,100,200); //370

// addNumbers.apply(obj1,[100,200]); // array vermemiz gerekiyor. 330
// addNumbers.apply(obj2,[100,200]); //370

// //Bind 
// //genellikle eventlerde kullanılır. Kopya fonksiyon üretir.
// function getNumbersTotal(number3,number4){
//     return this.number1+this.number2+number3+number4;
// }
// const copyFunc1=getNumbersTotal.bind(obj1);
// const copyFunc2=getNumbersTotal.bind(obj2);
// console.log(copyFunc1(100,200)); //330
// console.log(copyFunc2(100,200)); //370