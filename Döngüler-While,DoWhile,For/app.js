//While döngüleri

// let i = 0;

// while(i<10){    //Sonsuz döngü
//     console.log(i);
//     i++;
// }

//Break ve Continue 

let i = 0;

while(i<10){
    if(i==3 || i==5){
        i++;
        continue; // i==3 olunca sonsuza kadar devam eder. Ama arttırma işlemi yaparsak öncesinde düzelir.
    }
    console.log(i);
    i++;
}

//Do While

let i=0;

do{
    console.log(i);
    i++;
}while(i<10);

const langs=["Python","Javascript","Java"];

// let index=0;

// while(index < langs.length){
//     console.log(langs[index]);

//     index++;
// }

// for(let index= 0; index<langs.length; index++){
//     console.log(langs[index]);
// }

// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });


const users=[
    {name:"Mustafa",age:25},
    {name:"Yüşa",age:25},
    {name:"Ali",age:35}
];

const names=users.map(function(user){
    return user.name;  // Mustafa, Zeynep, Ali
});
const ages=users.map(function(user){
    return user.age; 
});

const user={
    name:"Mustafa",
    age:25
};
for(let key in user){
    console.log(key, user[key]); //name ve age getirir sadece key yazarsak
}