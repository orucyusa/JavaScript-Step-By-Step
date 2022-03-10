// // Mapler - Key(anahtar) - Value(Değer)

// let myMap = new Map(); // Oluşturma

// console.log(typeof myMap); //object

// const key1="Mustafa";
// const key2={a:10,b:20};
// const key3=()=>2;

// //Set

// myMap.set(key1,"String Değer");
// myMap.set(key2,"Object Literal Değer");
// myMap.set(key3,"Function Değer");

// //Get

// console.log(myMap.get(key1)); 
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// //Map Boyutu 

// console.log(myMap.size); // 3 

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

//For each 

// cities.forEach(function(value,key){  
//     console.log(key,value); // Ankara 5
//                             // İstanbul 15
//                             // İzmir 4
// })

// For Of

// for(let [key,value] of cities){  //Destructing
//     console.log(key,value);  // Ankara 5
//                              // İstanbul 15
//                              // İzmir 4
// }

//Map Keys
// for(let key of cities.keys()){
//     console.log(key);  //Ankara
//                        //İstanbul
//                        //İzmir
// }

// //Map Value

// for(let value of cities.values()){
//     console.log(value);  //5
//                          //15
//                          //4
// }

// //Arraylerden Map oluşturma
// const array =[["key1","value1"],["key2","value2"]];

// const lastMap=new Map(array);

// console.log(lastMap); // key1=>value1    key2=>value2

//Maplerden Array Oluşturma

// const cities = new Map();
// cities.set("Ankara",5);
// cities.set("İstanbul",15);
// cities.set("İzmir",4);

// const array = Array.from(cities);
// //[["Ankara",5],["İstanbul",15],["İzmir",4]]
// console.log(array);

