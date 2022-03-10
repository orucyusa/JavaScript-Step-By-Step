// //Syntatic Sugar

// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }
// Employee.prototype.showInfos=function(){
//     console.log("İsim: "+ this.name + "Yaş : "+ this.age + " Maaş: "+ this.salary);
// }
// const emp=new Employee("Yüşa",25,4000);
// console.log(emp); 
// Eski yapı yukarda ki gibiydi fakat ES6'dan sonra...

// class Employee{     
//     constructor(name,age,salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }
//     showInfos(){
//         console.log("İsim: "+ this.name + "Yaş : "+ this.age + " Maaş: "+ this.salary);
//     }
// }
// const emp = new Employee("Yüşa",25,4000);
// emp.showInfos();

//Statik Methodlar.

// class Matematik{
//     static cube=x=> console.log(x*x*x);  // static methodlarına sadece sınıf üzerinden erişilir. Objeden erişilemez.
//     sqrt=x=> console.log(x*x); // static olmadiği için objeden erişilebilir.
// }
// const math= new Matematik();
// Matematik.cube(3);
// //math.cube(3);// erişilemez static oldugu için.
// math.sqrt(4);//çalışır.

//Object.create(); //static method

//Math.sqrt(4); //static method.
