// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.showInfos=function(){
//     console.log("İsim: "+ this.name+ "Yaş: "+this.age);
// }
// function Employee (name,age,salary){
//     Person.call(this,name,age);
//     this.salary=salary;
// }
// Employee.prototype=Object.create(Person.prototype);
// Employee.prototype.toString=function(){
//     console.log("Employe");
// }
// Employee.prototype.showInfos=function(){
//     console.log("İsim: "+ this.name+ "Yaş: "+this.age);
// }
// const emp= new Employee("Yüşa",25,4000);
// console.log(emp);


//ES6 sonrasinda asagida ki gibi

class Person { //Superclass,BaseClass diye geçebilir.
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("İsim: "+ this.name+ "Yaş: "+this.age);
    }
}
class Employee extends Person{ //türetmek için extends kullaniyoruz. Ayrıca, DerivedClass,Subclass,Childclass diye geçebilir.
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        super(name,age); // Personun constructorını kullanarak devam eder.
        this.salary=salary;
    }
    showInfos(){    //Overriding
        console.log("İsim: "+ this.name+ "Yaş: "+this.age + " Maaş : "+this.salary);
    }
    toString(){ //Overriding
        console.log("Employee");
    }
    raiseSalary(amount){ //Ekstra
        this.salary+=amount;
    }
}
const emp = new Employee("Yüşa",25,4000);
emp.raiseSalary(500);
console.log(emp); 

emp.showInfos();
emp.toString();
