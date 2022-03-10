console.log(this); // windowu çağırır Global Scope

// const emp1={  //Object Literal
//     name:"Yüşa",
//     age:25,
//     showInfos:function(){console.log("Bilgiler Gösteriliyor...");}
// };
// const emp2={
//     name:"Ahmet",
//     age:25
// };
// console.log(emp1);

function Employee(name,age,salary){ // Yapıcı Fonksiyon -- Constructor
    this.name=name;
    this.age=age;
    this.salary=salary;

    this.showInfos=function(){
        console.log(this.name,this.age,this.salary);
    }
    
    //console.log(this); //oluşan objeyi gösterir. Fonksiyon scopunda olduğumuz için.


}
const emp1=new Employee("Yüşa",25,4000);
const emp2=new Employee("Ahmet",25,5000);
console.log(emp1);

emp1.showInfos(); // Yüşa 25 4000
emp2.showInfos(); // Ahmet 25 5000

