const person={
    name:"Yüşa Oruç",
    age:25,
    salary:3000
};
const langs=["Python","Java","C++","PHP"];

const name="Yüşa";

// //For In
// //Object
// for(let prop in person){
//     console.log(prop,person[prop]); // name Yüşa Oruç 
//                                     // age 25
//                                     // salary 3000
// }
// Array
// for ( let index in langs){
//     console.log(index,langs[index]); // 0 Python
//                                      // 1 Java
//                                      // 2 C++
//                                      // 3 PHP
// }

for (let index in name){
    console.log(index,name[index]); // 0 Y
                                    // 1 Ü
                                    // 2 Ş
                                    // 3 A
}

// For Ofla objelerde dönülemez! Arraylerde dönülebilir.

//Object
// for (let value of person){
//     console.log(value); // hata alırız TypeError: person is not iterable 
// }

//Array 

//index değil direkt değerleri verir.!

// for(let value of langs){
//     console.log(value); // Python
//                         // Java
//                         // C++
//                         // PHP
// }

// String

for (let character of name){
    console.log(character); // Y
                            // Ü
                            // Ş
                            // A 
}