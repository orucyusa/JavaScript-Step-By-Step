// // // //Class tabanli bir dil değil Prototype tabanli bir dil.

// // // const object = new Object(); //Object Literal
// // // object.name="Yüşa";
// // // console.log(object); // name:Yüşa __proto__:object (methodlar bulunur...) objelerin ortak sahip oldugu metodları protoya yazılır.

// // // function Employee(name,age){
// // //     this.name=name;
// // //     this.age=age;
// // //     this.showInfos=function(){
// // //         console.log("Bilgiler Gösteriliyor...");
// // //     }
// // // }
// // // const emp1= new Employee("Yüşa",25);
// // // console.log(emp1);

// // // console.log(emp1.toString()); // Zincirleme yani en temel obje temelinde yazılan methoda daha kıscası miras almış oluyoruz.
// // // console.log(emp1.deneme()); // is not a function ilk önce böyle bir fonksiyon var mı diye bakar, sonra yapıya bakar, arından mirasa(objeye bakar)
// // //                             // olmadigi icin hata döner.

// // function Employee (name,age){
// //     this.name=name;
// //     this.age=age;
// // }

// // Employee.prototype.showInfos=function(){
// //     console.log("İsim: " + this.name + " Yaş: "+ this.age);
// // }

// // const emp1=new Employee("Yüşa",25);
// // const emp2=new Employee("Oğuz",25);

// // emp2.showInfos();

// // console.log(emp1);
// // console.log(emp2);

// //Prototype Tabanlı Kalıtım

// //Kalıtım - Inheritance 

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.showInfos=function(){
//     console.log("İsim : " + this.name + " Yaş : "+ this.age);
// }
// //const person = new Person("Yüşa",25);
// console.log(Person);

// function Employee(name,age,salary){
//     //this.name=name;
//     //this.age=age;
//     Person.call(this,name,age); 
//     this.salary=salary;
// }
// Employee.prototype=Object.create(Person.prototype); //kalıtım
// Employee.prototype.toString=function(){
//     console.log("Employee");
// }
// //Overriding - İptal Etme.
// Employee.prototype.showInfos=function(){
//     console.log("İsim: "+ this.name + "Yaş : "+ this.age + " Maaş : "+this.salary);
// }
// const emp = new Employee("Yüşa",25,4000);
// //console.log(emp); //Person-->Object
// //emp.showInfos();// İsim: Yüşa Yaş: 25
// //emp.toString(); // Employee