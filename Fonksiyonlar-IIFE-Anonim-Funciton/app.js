function merhaba(){
    console.log("Merhaba");
}
merhaba(); //Fonksiyon Çağrısı(Function Call);

function islem(name="Bilgi Yok",age="Bilgi Yok"){
    if(typeof name === "undefined") name="Bilgi Yok";
    if(typeof age === "undefined") name="Bilgi Yok";
    console.log(`İsim: ${name} Yaş : ${age}`);
}

//Function Expression

const merhaba=function(name){
    console.log("Merhaba "+name);
};
merhaba("Murat");

//Immediately Invoked Function Expression(IIFE)

(function(name){
    console.log("Merhaba "+ name);
})("Murat");

const database={
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde edildi.");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}
console.log(database.host);