// var

var name ="Yüşa Oruç";
console.log(name);

//let 

let name="Yüşa Oruç";
let name = "Yüşa"; // tanımlanmışı tekrar tanımlanamaz!

//let a,b
a=10; b=20;
console.log(a+b); //=30;

//Const ingilizcede ki sabit anlamından geliyor.

const name= "Yüşa";
console.log(name);

name = "Oruç" //TypeError verir tekrar tanımlanamaz, degistirilemez.

//const a; //hata verir SyntaxError cunku const veriTiplerinde degeri de vermemiz gerekir.
//a=10; 
console.log(a);

// sorulan soru mülakatlarda!

const a=[1,2,3,4,5];  

console.log(a);
a.push(6);
console.log(a); // hata vermez, a'nın bellekteki yeri degismedigi icin yeni bir deger ataması olmuyor.
                // o yüzden push ederek 6'yı array'e ekler.
