//Karşılaştırma Operatörleri 

//==    değerler aynı mı
//===   değerler ve tipler aynı mı
//!=
//!==
//>
//<
//>=
//<=
console.log(2=="2"); //true değere bakar
console.log(2==="2"); //false değer ve tipe bakar!

//Mantıksal Bağlaçlar

//Not operatörü 
const number=100;
console.log(!(2!=2));

//And operatörü &&

//Or operatörü || 

//Ternary Operator
console.log(number===100 ? "Sayi 100": "Sayı 100 Değil"); //ciktisi Sayi 100 olur true döneceği için.

//if bloklarında bir tane işlemse;
if (number==100) console.log("Sayi 100");
else console.log("Sayi 100 değil");