//Setler - Kümeler

const mySet= new Set();

mySet.add(100);
mySet.add(100); // hata vermez ama eklemez;
mySet.add(3.14);
mySet.add("Yüşa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const myset2=new Set([100,3.14,"Mustafa"]);

// console.log(mySet);
// console.log(myset2);

//Size
console.log(mySet.size); //6

//Delete Metodu

mySet.delete("Yüşa"); // Eğer yoksa hata vermez varsa siler.

// Has metodu 

console.log(mySet.has("Yüşa")); // true
console.log(mySet.has(3.14)); // true
console.log(myset.has([1,2,3])); // false

//For Each

mySet.forEach(function(value){
    console.log(value); // değerler döner.
})

//For Of

for(let value of mySet){
    console.log(value); // değerler döner.
}

const array=Array.from(mySet);
console.log(array); //Array oluşturulur.