let value;

//Veritiplerini String'e çevirme

value = String(123);
value = String(3,14);
value = String(true);
value = String(false);
value = String(function(){console.log()});
value = String([1,2,3,4]);

value=(10).toString();
value=(3.14).toString();

//Veritiplerini Sayılara Çevirme
value = Number("123");
value = Number(null); //0 çıkar
value = Number(undefined); //NaN
value = Number("Hello Word"); //NaN
value = Number(function(){console.log()}); //NaN
value = Number([1,2,3,4]); //NaN

value = Number("3.14"); //3.14 
value = parseFloat("3.14"); //3.14
value = parseInt("3");

const a = "Hello" + 34;

console.log(a);
console.log(typeof a); //String doner. String + Sayı = Sayi "34" olarak aldı

const a = Number("34")+53;
console.log(a);
console.log(typeof a); // Number döner = 87 cikar. Number'a cast ettiğimiz için.

console.log(value);
console.log(typeof value);
