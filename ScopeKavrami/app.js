var database="123456";


if(true){
    var a="12345";   //var dediğimiz için scope dışında da global değişken olduğu için değişir
    let b="111";                    //önemli bir değişken ve değişmeyecekse, var ile tanımlanmamalı.
}
let b;
console.log(b);
function degisecekMi(){
    var database="123";
}
degisecekMi();
console.log(database);