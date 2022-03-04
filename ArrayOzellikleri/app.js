let value;

const numbers=[43,56,33,23,44,35,5];

//const numbers2= new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

//uzunluk
value=numbers.length;
//Indekslenme
value=numbers[0];
value=numbers[2];
value=numbers[numbers.length-1];

//herhangi bir indeksteki değeri değiştirme

numbers[2]=1000;

value=numbers; //43,56,1000,23,44,35,5

//Index Of

value=numbers.indexOf(10000);//2 

//Arrayin Sonuna deger Ekleme - Push

numbers.push(2000);// sonuna 2000 ekler.

numbers.unshift(3000); // basina 3000 ekler.

//Sonundan değer atma

numbers.pop(); // sonda ki degeri siler.

numbers.shift(); //basindan deger atma.


//Belirli bir kısmı atma
numbers.splice(0,3); 

//Reverse
numbers.reverse();//ters cevirme
value=numbers;

value=numbers.sort(); // iki elamnlı olduğunda sadece ilk elemana bakar.

value=numbers.sort(function(x,y){//küçükten büyüğe iki elemanlı olsada farketmez
    return x-y; 
});

value=numbers.sort(function(x,y){ // büyükten küçüğe sıralama
    return y-x;
});


