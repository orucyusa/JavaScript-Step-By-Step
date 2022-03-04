// Degisken olusturma
// Ingilizce olusturmaya ozen gosterelim.

var a=20;
var b =10;
var c=40;

console.log(a,b,c);

//Primitive

var a=10; // a'nın number olacagini otomatik anliyor
console.log(typeof a);

//String

var name= "Mustafa"; //Dinamik yapisi oldugu icin String olarak algılar.

//Boolean 

var a = true; //Kosul durumlarinda kullanilacak.

console.log(typeof a)

// undefined
var b; //tanimsiz kalirsa boyle olur.
console.log(b);


//Reference Veri Tipleri
//array 
var numbers=[1,2,3,4,5];
console.log(typeof numbers); //object
console.log(numbers[0]); // "1"i getirir.
// 
var person = {
    name: "Yüşa Oruç",
    age:25
}
console.log(typeof person); // object

var date = new Date();
console.log(typeof date); // object

var merhaba=function(){
    console.log("Merhaba");
}
console.log(typeof merhaba); // function


//Primitve sadece o degiskenin degeri
//Reference ise referanslar üzerinden bilgiyi getirir
