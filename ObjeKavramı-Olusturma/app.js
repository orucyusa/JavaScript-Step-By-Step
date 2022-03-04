const programmer={
    name:"Yüşa Oruç",
    age:25,
    email:"yusaoruc2@gmail.com",
    langs:["Python","Java","Javascript"],
    
    address:{
        city:"İstanbul",
        street:"Bağcılar"
    },
    work:function(){
        console.log("Programcı çalışıyor.");
    }
}

value=programmer;
value=programmer.email;//genel olarak kullanilan.
value=programmer["email"];

value=programmer.langs; 

value=programmer.address.city;
console.log(value);

programmer.work();

const programmers=[
    {name:"Yüşa Oruç",age:25},
    {name:"Oğuz",age:25}
];
value=programmers[0].name;


console.log(value);